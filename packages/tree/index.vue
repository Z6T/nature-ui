<template >
    <div class="nt-tree">
        <pre v-html="JSON.stringify(treeData,null,'\t')"></pre>
        <hr />
        {{leafLevalObj}}
        <div class="nt-tree__div">
            <NodeTreeNode :data="data" ref="childNodeWrapper" />
        </div>
    </div>
</template>

<script>
import NodeTreeNode from "./tree-node";

export default {
    name: "nt-tree",
    provide() {
        return {
            fatherTree: this
        };
    },
    props: {
        data: Array
    },
    data() {
        return {
            treeData: [],
            leafLevalObj: {},
            checkeArr: []
        };
    },
    components: { NodeTreeNode },
    computed() { },
    methods: {
        clickLeaf(item) {
            this.$emit("node-click", item);
        },
        // 摊平数组，以及数组中子元素的children的数组
        getFlatChild(childs) {
            if (!Array.isArray(childs)) return [];
            const arrres = [];
            const fun = arr => {
                for (let index = 0; index < arr.length; index++) {
                    const ele = arr[index];
                    arrres.push(ele);
                    if (ele.children && Array.isArray(ele.children)) {
                        fun(ele.children);
                    }
                }
            };
            fun(childs);
            return arrres;
        },
        // 参数是一个数组，判断下边的所有元素是否全选 type就是truefalse
        isEveryChildChecked(childArr, type) {
            if (!Array.isArray(childArr) || !childArr.length) return false;
            return childArr.every(c => typeof c.checked !== undefined && c.checked === type);
        },
        // 子元素有一个被选中就返回true
        isSomeChildChecked(childArr) {
            if (!Array.isArray(childArr) || !childArr.length) return false;
            return childArr.some(c => c.checked === true);
        },
        // 取到某个数组的最末枝的叶子节点的数组
        getAllLeafNode(arr, dist = []) {
            arr.forEach(item => {
                if (!item.children) {
                    return dist.push(item)
                }
                this.getAllLeafNode(item.children, dist)
            })
            return dist
        },
        // 如果没有checked属性，加上reactive（响应式）的属性
        setCheckProp(data, thyp) {
            const func = arr => {
                if (Array.isArray(arr)) {
                    for (let i = 0; i < arr.length; i++) {
                        const ele = arr[i];
                        const childs = this.getFlatChild(ele.children);
                        // 动态为所有节点设置checked属性
                        if (ele.checked && ele.checked === true && !thyp) {
                            this.$set(ele, "checked", true);
                            // 当前节点以及子节点全是checked---简单粗暴
                            childs.forEach(child => {
                                this.$set(child, "checked", true);
                            });
                        }

                        // 判断当前节点下的所有叶子节点的状态.是全选?全不选?还是只有某些选
                        let every = null; let everyno = null; let some = null;
                        let hasChildFlag = ele.children && ele.children.length;
                        if (hasChildFlag) {
                            const thisChilds = this.getAllLeafNode(ele.children);
                            console.log('thisChilds :', ele.label + '的childs', thisChilds);
                            every = this.isEveryChildChecked(thisChilds, true) // 是否全选
                            everyno = this.isEveryChildChecked(thisChilds, false) // 是否全不选
                            // some = this.isSomeChildChecked(thisChilds)
                            if (every) {
                                this.$set(ele, "checked", true);
                            } else if (everyno || !hasChildFlag) {
                                this.$set(ele, "checked", false);
                            } else if (hasChildFlag) {
                                this.$set(ele, "checked", 'some');
                            }
                            // console.log('ele every:', ele.label, every);
                            // console.log('ele everyno:', ele.label, everyno);
                        } else {
                            this.$set(ele, "checked", ele.checked)
                        }

                        func(ele.children);
                    }
                }
                return arr;
            };
            this.treeData = func(data)
            this.treeData.forEach(item => this.leafLevalObj[item.label] = this.getAllLeafNode(item.children))

        }
    },
    watch: {
        data: {
            handler(val) {
                // this.setCheckProp(val);
            },
            deep: true,
            immediate: true
        },
        treeData: {
            handler(val) {
                this.setCheckProp(val, 'init'); // 数据变动不能再走:强制将所有child的checked置为true这个操作,因为点的可能是子元素
            },
            deep: true,
            immediate: true
        }
    },
    created() {
        this.setCheckProp(this.data);
    }
};
</script>

<style>
</style>

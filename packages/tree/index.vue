<template >
    <div class="nt-tree">
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
        data: Array,
        showcheckbox: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            treeData: [],
            leafLevalObj: {},
            checkeArr: [],
            $nodeid: '' //用于标识当前组件的随机id
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
        // 获取所有选中的节点
        getCheckedNode() {
            return this.getFlatChild(this.treeData).filter(item => item.checked === true)
        },
        // 获取叶子节点
        getCheckedLeafNode() {
            return this.getFlatChild(this.treeData).filter(item => item.checked === true && !item.children);
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
        setCheckProp(data, isInit) {
            const func = arr => {
                if (Array.isArray(arr)) {
                    for (let i = 0; i < arr.length; i++) {
                        const ele = arr[i];
                        const childs = this.getFlatChild(ele.children);
                        // 动态为所有节点设置checked属性,第一次进来可以这样简单粗暴
                        // 后续每个都要判断,因为选的可能是子节点
                        if (ele.checked && ele.checked === true && !isInit) {
                            this.$set(ele, "checked", true);
                            // 当前节点以及子节点全是checked---简单粗暴
                            childs.forEach(child => {
                                this.$set(child, "checked", true);
                            });
                            continue;
                        } else if (!ele.checked && !ele.children) {
                            this.$set(ele, "checked", false);
                        }

                        // 判断当前节点下的所有叶子节点的状态.是全选?全不选?还是只有某些选
                        let every = null; let everyno = null;
                        let hasChildFlag = ele.children && ele.children.length;
                        if (hasChildFlag) {
                            const thisChilds = this.getAllLeafNode(ele.children);
                            every = this.isEveryChildChecked(thisChilds, true) // 是否全选
                            everyno = this.isEveryChildChecked(thisChilds, false) // 是否全不选
                            if (every) {
                                this.$set(ele, "checked", true);
                            } else if (everyno) {
                                this.$set(ele, "checked", false);
                            } else {
                                this.$set(ele, "checked", 'some');
                            }
                        } else {
                            // 没有子节点直接设置为本身就可以
                            this.$set(ele, "checked", ele.checked)
                        }

                        func(ele.children);
                    }
                }
                return arr;
            };
            this.treeData = func(data)
        }
    },
    watch: {
        treeData: {
            handler(val) {
                if (this.showcheckbox) {
                    this.setCheckProp(val, 'init'); // 数据变动不能再走:强制将所有child的checked置为true这个操作,因为点的可能是子元素
                }
            },
            deep: true,
            immediate: true
        }
    },
    created() {
        this.$nodeid = Math.random().toString(36).substr(3)
        if (this.showcheckbox) {
            this.setCheckProp(this.data);
        }
    }
};
</script>

<style>
</style>

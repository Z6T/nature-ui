<template>
    <ul v-if="data&&data.length" v-show="state_co==='open'||vLeval.length===3">
        <li
            v-for="(item,i) in treeData"
            :key="i"
            :class="[i===dragingIndex?'drag-start-node':'']"
            @dragstart.stop="onDragStart(i)"
            @dragover.stop="onDragOver($event,i)"
            @dragleave="onDragEnter"
            @dragend.stop="onDragEnd(i)"
            draggable="true"
            :nt-tree-leval="vLeval+i"
            :isFolder="!!(item&&item.children)"
        >
            <div>
                <!-- <input
                    type="checkbox"
                    name
                    id
                    @click="handleCheckbboxClick(i)"
                    :checked="item.curChecked"
                />-->
                <i>{{item.state==='open'?'-':'+'}}</i>
                <span
                    @click="expandNode($event,i,item)"
                    :isLastNode="!item.children"
                    :expand="this_expand"
                >{{item.label}}---> {{vLeval+i}}---->{{!!item.children}} =={{item.state}}</span>
            </div>
            <tree-node :data="item.children" :state="item.state" :vLeval="vLeval+i+'-'"></tree-node>
        </li>
    </ul>
</template>

<script>
let draging = null, dragover = null;

export default {
    name: "TreeNode",
    inject: ['fatherTree'],
    data() {
        return {
            draging: null,
            dragover: null,
            treeData: this.data,
            dragingIndex: null,
            dragoverIndex: null,
            curCpmponentShow: false,
            childs: null,
            this_expand: false,
            state_co: this.state, // 当前节点是否关闭或者直接开启
            curChecked: true
        }
    },
    props: {
        data: Array,
        vLeval: {
            type: String,
            // nt-tree-index
            default: 'nt-'
        },
        state: {
            type: String,
            default: 'close',
            validator: (s) => {
                return ['open', 'close'].indexOf(s) > -1;
            }

        }
    },
    methods: {
        onDragStart(index) {
            this.dragingIndex = index;
            draging = this.treeData[index];
        },
        onDragOver(e, index) {
            if (e.target.tagName === 'SPAN') {
                e.target.classList.add('drag-over-node')
            }
            this.dragoverIndex = index
            if (!this.treeData[index].children) {
                // this.$set(this.treeData[index], 'children', [])
            }
            dragover = this.treeData[index];
        },
        onDragEnd(index) {
            this.dragingIndex = null;
            const dragingLevel = this.vLeval + index;
            const arr = dragingLevel.match(/\d/g).slice(-2);
            if (!dragover.children) {
                this.dragover.children = [];
                this.$set(this.dragover, 'children', [])
            }
            const dragingStr = JSON.stringify(draging);
            const dragoverStr = JSON.stringify(dragover);
            // 防止拖动到自己的子元素身上
            const dragingContainOver = dragingStr.indexOf(dragoverStr) > -1;
            if (dragingContainOver) return;
            arr.length === 2 ? this.$parent.treeData[arr[0]].children.splice(arr[1], 1) :
                this.$parent.treeData.splice(arr[0], 1)
            dragover.children.push(draging)
        },
        onDragEnter(e) {
            e.target.classList.remove('drag-over-node')
        },
        expandNode(e, index, item) {
            if (!this.$children) return;
            this.this_expand = !this.this_expand;
            const isshow = this.$children[index].state_co
            this.$children[index].state_co = isshow === 'close' ? 'open' : 'close';
            this.fatherTree.clickLeaf({ id: item.id, label: item.label, isLeaf: !(item.children && item.children.length !== 0) })
        },
        handleCheckbboxClick(i) {
            this.treeData[i].curChecked = true;
            const curNode = this.treeData[i];
            const fn = (curNode) => {
                this.$children && this.$children.forEach(item => {
                    item.curChecked = true;
                    if (item.children) {
                        fn(item.children)
                    }
                })
            }

            fn(curNode)
        }

    },
    watch: {
        data: {
            handler(newVal) {
                this.treeData = newVal;
            },

            deep: true,
            immediate: true
        }
    }
};
</script>

<style>
</style>

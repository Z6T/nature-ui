<template>
    <ul v-if="data&&data.length">
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
            <span>{{item.label}}---> {{vLeval+i}}---->{{!!item.children}} ======</span>
            <tree-node :data="item.children" :vLeval="vLeval+i+'-'"></tree-node>
        </li>
    </ul>
</template>

<script>
let draging = null, dragover = null;

export default {
    name: "TreeNode",
    data() {
        return {
            draging: null,
            dragover: null,
            treeData: this.data,
            dragingIndex: null,
            dragoverIndex: null,
        }
    },
    props: {
        data: Array,
        vLeval: {
            type: String,
            // nt-tree-index
            default: 'nt-'
        },
    },
    methods: {
        onDragStart(index) {
            this.dragingIndex = index;
            draging = this.treeData[index];
        },
        onDragOver(e,index) {
            console.log(e.target)
            e.target.classList.add('drag-over-node')
            this.dragoverIndex = index
            if (!this.treeData[index].children) {
                this.$set(this.treeData[index], 'children', [])
            }
            dragover = this.treeData[index]
        },
        onDragEnd(index) {
            this.dragingIndex = null
            this.dragingIndex = null
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
        onDragEnter(e){
            console.log(e.target)
             e.target.classList.remove('drag-over-node')
        }
    },
    watch: {
        data: {
            handler(newVal) {
                this.treeData = newVal
            },
            
            deep: true,
            immediate: true
        }
    }
};
</script>

<style>
</style>

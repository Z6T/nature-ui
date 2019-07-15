<template >
    <div class="nt-tree">
        <div class="nt-tree__div">
            {{$refs.childNodeWrapper&&$refs.childNodeWrapper.data}}
            <NodeTreeNode :data="data" ref="childNodeWrapper" />
        </div>
    </div>
</template>

<script>
import NodeTreeNode from './tree-node'

export default {
    name: "nt-tree",
    provide() {
        return {
            fatherTree: this
        }
    },
    props: {
        data: Array
    },
    data() {
        return {
            treeData: this.data
        };
    },
    components: { NodeTreeNode },
    methods: {
        clickLeaf(item) {
            this.$emit('node-click', item)
        }
    },
    created() {
        this.treeData = JSON.parse(JSON.stringify(this.data).replace(/"id"/g, '"checked":"","id"'))
    },
};
</script>

<style>
</style>

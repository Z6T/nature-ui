<template >
    <div class="nt-tree">
        <div class="nt-tree__div">
            {{$refs.childNodeWrapper&&$refs.childNodeWrapper.data}}
            <NodeTreeNode :data="treeData" ref="childNodeWrapper" />
        </div>
    </div>
</template>

<script>
import NodeTreeNode from './tree-node'

export default {
    name: "nt-tree",
    data() {
        return {
            treeData: [
                {
                    label: "一级 1",
                    children: [
                        {
                            label: "二级 1-1",
                            children: [
                                {
                                    label: "三级 1-1-1"
                                },
                                {
                                    label: "三级 1-1-2"
                                }
                            ]
                        }
                    ]
                },
                {
                    label: "一级 2",
                    children: [
                        {
                            label: "二级 2-1",
                            children: [
                                {
                                    label: "三级 2-1-1"
                                }
                            ]
                        },
                        {
                            label: "二级 2-2",
                            children: [
                                {
                                    label: "三级 2-2-1"
                                }
                            ]
                        }
                    ]
                },
                {
                    label: "一级 3",
                    children: [
                        {
                            label: "二级 3-1",
                            children: [
                                {
                                    label: "三级 3-1-1"
                                }
                            ]
                        },
                        {
                            label: "二级 3-2",
                            children: [
                                {
                                    label: "三级 3-2-1",
                                    children: []
                                }
                            ]
                        }
                    ]
                }
            ]
        };
    },
    components: { NodeTreeNode }
};
</script>

<style>
</style>

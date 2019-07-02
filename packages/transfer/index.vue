<template>
    <div class="nt-transfer">
        <Frame title="原始列表" :frameData="srcList" type="src" ref="src"></Frame>
        <div class="nt-transfer__arrowList absoCenter">
            <div
                class="nt-transfer__arrowList__leftArrow absoCenter"
                :class="!toleftDisable?'arrowDisable':''"
                @click="toLeft"
            >&lt;</div>
            <div
                class="nt-transfer__arrowList__rightArrow absoCenter"
                :class="!toRightDisable?'arrowDisable':''"
                @click="toRight"
            >&gt;</div>
        </div>
        <Frame title="目标列表" :frameData="distList" type="dist" ref="dist"></Frame>
    </div>
</template>

<script>
import Frame from './frame.vue'

export default {
    name: 'nt-transfer',
    data() {
        return {
            data: [
                { "key": "1", "label": "Content 1", "disabled": false },
                { "key": "2", "label": "Content 2", "disabled": true },
                { "key": "3", "label": "Content 3", "disabled": false }
            ],
            targetKeys: ["1", "2"],
            toleftDisable: false,
            toRightDisable: false,
        }
    },
    props: {

    },
    computed: {
        srcList() {
            return this.data.filter(item => !this.targetKeys.includes(item.key))
        },
        distList: {
            get() {
                return this.data.filter(item => this.targetKeys.includes(item.key))
            }
        }    },
    components: {
        Frame
    },
    methods: {
        toLeft() {
            const distCols = this.$refs.dist.collections;
            for (let i = 0; i < distCols.length; i++) {
                const item = distCols[i];
                this.targetKeys.splice(this.targetKeys.indexOf(item), 1);
            }
            this.$refs.dist.collections.length = 0;
            this.toleftDisable = false;
        },
        toRight() {
            const srcCols = this.$refs.src.collections;
            this.targetKeys.push(...srcCols);
            this.$refs.src.collections = []
            this.toRightDisable = false;
        }
    },
}
</script>

<style>
</style>

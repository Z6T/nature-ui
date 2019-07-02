<template>
    <div class="nt-transfer">
        <Frame title="原始列表" :frameData="srcList"></Frame>
        <div class="nt-transfer__arrowList absoCenter">
            <div class="nt-transfer__arrowList__leftArrow absoCenter">&lt;</div>
            <div class="nt-transfer__arrowList__rightArrow absoCenter">&gt;</div>
        </div>
        <Frame title="目标列表" :frameData="distList"></Frame>
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
            targetKeys: ["1", "2"]
        }
    },
    props: {

    },
    computed: {
        srcList() {
            return this.data.filter(item => !this.targetKeys.includes(item.key))
        },
        distList() {
            return this.data.filter(item => this.targetKeys.includes(item.key))
        }
    },
    components: {
        Frame
    }
}
</script>

<style>
</style>

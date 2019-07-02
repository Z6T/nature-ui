<template>
    <div class="nt-transper__frame">
        <div class="nt-transper__frame__header">{{title}}</div>
        <div class="nt-transper__frame__body">
            <div class="nt-transper__frame__body__item" v-for="item in frameData" :key="item.key">
                <input type="checkbox" @click="collectChecked(item.key)" />
                {{item.label}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'nt-transfer__frame',
    data() {
        return {
            collections: []
        }
    },
    props: {
        frameData: Array,
        title: String,
        type: String // 是左侧列表还是右侧列表
    },
    methods: {
        collectChecked(key) {
            const cls = this.collections;
            const isInclude = cls.includes(key);
            if (!isInclude) {
                cls.push(key);
            } else {
                cls.splice(cls.findIndex(item => item === key), 1)
            }
            let flag;
            cls.length ? flag = true : flag = false;
            this.type === 'dist' ? this.$parent.toleftDisable = flag : this.$parent.toRightDisable = flag


        }
    },
}
</script>

<style>
</style>

<template>
    <div class="nt-transper__frame">
        <div class="nt-transper__frame__header">{{title}}</div>
        <div class="nt-transper__frame__body">
            <div
                class="nt-transper__frame__body__item"
                v-for="item in frameData"
                :key="item.key"
                :class="item.disabled?'disabled':''"
            >
                <input
                    type="checkbox"
                    class="iconfont icon-nt-checkbox_unchecked"
                    @click="collectChecked(item.key,$event)"
                    :id="item.key"
                    :disabled="item.disabled"
                />
                <label :for="item.key">{{item.label}}</label>
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
        collectChecked(key, e) {
            if (e.target.classList.contains('icon-nt-checkbox_unchecked')) {
                e.target.classList.remove('icon-nt-checkbox_unchecked')
                e.target.classList.add('icon-nt-checkbox_checked')
            } else {
                e.target.classList.add('icon-nt-checkbox_unchecked')
                e.target.classList.remove('icon-nt-checkbox_checked')

            }
            console.log('e.target.checked :', e.target.checked);
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
label {
    user-select: none;
}
</style>

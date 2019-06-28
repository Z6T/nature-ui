<template>
    <div class="nt-select" ref="ntselectwapper">
        <input
            type="text"
            name
            id
            readonly
            placeholder="请选择"
            ref="ntselect_input"
            :value="selectItem.text"
        >
        <i class="iconfont" :class="showUl?'icon-arrowTop':'icon-arrowBottom'"></i>
        <ul class="nt-select__ul" v-show="showUl" @mousedown="selectItemEv">
            <li
                class="nt-select__ul__li"
                :class="item.value===selectItem.value?'nt-select__ul__li_selected':''"
                v-for="item in options"
                :key="item.value+'_nts'"
                :value="item.value"
            >{{item.text}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'nt-select',
    data() {
        return {
            showUl: false,
            selectItem: {
                value: null,
                text: null
            },
            options: [{
                text: '苹果',
                value: '1'
            }, {
                text: '🍐',
                value: '2'
            }, {
                text: '香蕉',
                value: '3'
            },],
        }
    },
    methods: {
        selectItemEv(e) {
            const ele = e.target;
            let [text, value] = [ele.innerText, ele.getAttribute('value')]
            this.selectItem = { text, value }

            // if (this.$refs.ntselectwapper.contains(ele)) {
            //     this.stopBlur = true
            // }
        }
    },
    mounted() {
        const _this = this;
        this.$refs.ntselect_input.addEventListener('focus', function () {
            _this.showUl = !_this.showUl
        })
        this.$refs.ntselect_input.addEventListener('blur', function () {
            _this.showUl = !_this.showUl
        })
    },
}
</script>

<style>
</style>

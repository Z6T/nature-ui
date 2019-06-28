<template>
    <div class="nt-select" ref="ntselectwapper">
        <input
            type="text"
            name
            id
            readonly
            placeholder="请选择"
            ref="ntselect_input"
            :value="selectItem.text||selectText"
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
                value: this.value,
                text: ''
            },
        }
    },
    props: {
        options: {
            type: Array
        },
        value: [String, Number, Boolean]
    },
    computed: {
        // eslint-disable-next-line vue/return-in-computed-property
        selectText() {
            if (this.value) {
                return this.options.filter(item => item.value === this.value)[0].text;
            }
        }
    },
    methods: {
        selectItemEv(e) {
            const ele = e.target;
            let [text, value] = [ele.innerText, ele.getAttribute('value')]
            this.selectItem = { text, value }
            this.$emit('input', this.selectItem.value)
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

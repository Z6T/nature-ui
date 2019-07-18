<template>
    <div class="nt-select" ref="ntselectwapper">
        <input
            v-if="!isMul"
            type="text"
            name
            id
            readonly
            placeholder="请选择"
            ref="ntselect_input"
            :value="selectItem&&selectItem.text"
        />
        <p v-else @click="openOptions" ref="ntselect_mulinput">
            <span v-for="(item,key) in mulSelectItems" :key="key+'item'" class="itemblock">
                {{item.text.slice(0,5)}}{{item.text.length>5?'...':''}}
                <nt-icon
                    icon="close"
                    style="font-size:14px;float:right"
                    @click="removeItem($event,item.key)"
                ></nt-icon>
            </span>
        </p>
        <i class="iconfont tip" :class="showUl?'icon-arrowTop':'icon-arrowBottom'"></i>
        <ul class="nt-select__ul" v-show="showUl" @mousedown="selectItemEv" ref="ulwapper">
            <li
                class="nt-select__ul__li"
                :class="item.value===selectItem.value?'nt-select__ul__li_selected':''"
                v-for="item in options"
                :key="item.value+'_nts'"
                :value="item.value"
            >
                {{item.text}}
                <span
                    v-if="mulSelectItems.find(itemo=>itemo.value===item.value)"
                    style="float:right"
                >✔️</span>
            </li>
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
            mulSelectItems: []
        }
    },
    props: {
        options: {
            type: Array
        },
        value: [String, Number, Boolean],
        multiple: String
    },
    computed: {
        // eslint-disable-next-line vue/return-in-computed-property
        selectText() {
            if (this.value) {
                return this.options.filter(item => item.value === this.value)[0].text;
            }
        },
        isMul() {
            return this.hasProp('multiple');
        }
    },
    methods: {
        removeItemByKey(key) {
            const cilckedItemIndex = this.mulSelectItems.findIndex(item => item.value === key);
            this.mulSelectItems.splice(cilckedItemIndex, 1);
            this.$emit('input', [...this.mulSelectItems].map(item => item = item.value));
        },
        removeItem(e, key) {
            this.removeItemByKey(key);
            e.stopPropagation();
        },
        hasProp(name) {
            let props = this.$options.propsData;
            return props.hasOwnProperty(name);
        },
        selectItemEv(e) {
            const ele = e.target;
            let [text, value] = [ele.innerText, ele.getAttribute('value')]
            this.selectItem = { text, value }
            if (this.isMul) {
                const cilckedItemIndex = this.mulSelectItems.findIndex(item => item.value === value);
                cilckedItemIndex === -1 ? this.mulSelectItems.push(this.selectItem) : this.mulSelectItems.splice(cilckedItemIndex, 1)

                this.$emit('input', [...this.mulSelectItems].map(item => item = item.value));
            } else {
                this.$emit('input', this.selectItem.value);
                this.showUl = false;
            }
        },
        openOptions() {
            this.showUl = true;
            const fn = (e) => {
                if (e.target.tagName === 'I') return
                if (!this.$refs.ntselect_mulinput) return
                if (!this.$refs.ntselect_mulinput.contains(e.target) && !this.$refs.ulwapper.contains(e.target) && this.isMul) {
                    this.showUl = false;
                }
            }
            document.removeEventListener('click', fn);
            document.addEventListener('click', fn
                , false)
        }
    },
    mounted() {
        const ipt = this.$refs.ntselect_input;
        const mulipt = this.$refs.ntselect_mulinput;
        let inputTarget = this.isMul ? mulipt : ipt
        const ulF = this.$refs.ulwapper;
        ipt.addEventListener('focus', () => {
            this.showUl = !this.showUl
        })
        ipt.addEventListener('blur', () => {
            this.showUl = false
        })

    },
}
</script>

<style>
</style>

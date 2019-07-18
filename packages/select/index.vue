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
            :value="selectItem&&selectItem.text||options[firstInitSelects].text"
        />
        <p v-else @click="openOptions" ref="ntselect_mulinput">
            <span
                v-for="(item,key) in mulSelectItems.length?mulSelectItems:firstInitSelects"
                :key="key+'item'"
                class="itemblock"
            >
                {{item.text.slice(0,5)}}{{item.text.length>5?'...':''}}
                <!-- {{item.text}} -->
                <nt-icon
                    icon="close"
                    style="font-size:14px;float:right"
                    @click="removeItem($event,item.value)"
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
            mulSelectItems: [],
            firstOnce: true
        }
    },
    props: {
        options: {
            type: Array
        },
        value: [String, Number, Boolean, Array],
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
        },
        /**
         * 如果是多选:返回一个item的数组
         * 单选则返回被选项index
         */
        firstInitSelects: {
            get() {
                if (this.isMul) {
                    const arrIndex = []
                    this.value.forEach(valueimte => {
                        arrIndex.push(this.options.find(item => item.value == valueimte))
                    })
                    return arrIndex;
                }
                return this.options.findIndex(item => item.value == this.value)
            },
            set(newVal) {
                this.mulSelectItems = newVal;
            }
        }
    },
    methods: {
        removeItemByKey(key) {
            //  if (this.isMul&&this.firstOnce) {
            //         this.firstOnce = false;
            //         this.mulSelectItems = this.mulSelectItems.concat(this.firstInitSelects)
            //  }
            if (typeof this.mulSelectItems === 'object') {
                const cilckedItemIndex = this.mulSelectItems.findIndex(item => item.value === key);
                this.mulSelectItems.splice(cilckedItemIndex, 1);
                this.$emit('input', [...this.mulSelectItems].map(item => item = item.value));
            }
        },
        removeItem(e, key) {
            this.removeItemByKey(key);
            e.stopPropagation();
        },
        hasProp(name) {
            let props = this.$options.propsData;
            return props.hasOwnProperty(name);
        },
        // 选择每一线
        selectItemEv(e) {
            console.log(e);
            let ele = e.target;
            if(ele.tagName==='SPAN'){
                ele = ele.parentNode;
            }
            let [text, value] = [ele.innerText, ele.getAttribute('value')]
            this.selectItem = { text, value }
            if (this.isMul) {
                // if (this.firstOnce) {
                //     this.firstOnce = false;
                //     this.mulSelectItems = this.mulSelectItems.concat(this.firstInitSelects)
                // }
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
            if (this.isMul && document) {
                document.removeEventListener('click', fn);
                document.addEventListener('click', fn
                    , false)
            }
        }
    },
    created(){
           if (this.isMul){

               this.mulSelectItems=this.firstInitSelects
           }
    },
    mounted() {
        const ipt = this.$refs.ntselect_input;
        if (ipt) {
            ipt.addEventListener('focus', () => {
                this.showUl = !this.showUl
            })
            ipt.addEventListener('blur', () => {
                this.showUl = false
            })
        }

    },
}
</script>

<style>
</style>

<template>
    <div class="nt-table" ref="ntTableWrapper">
        <!-- scroll -->
        <div class="nt-table__scroll" ref="scrolWrapper">
            <table class="nt-table__scroll__table" ref="scrollTable">
                <thead ref="scrolThead" :style="topStyl">
                    <tr>
                        <th
                            :height="tHeadHeight"
                            :width="item.width"
                            v-for="(item,index) in scrollTitleData.title"
                            :key="index+'_'+item.prop"
                        >
                            <div v-text="item.label"></div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(row,i) in data" :key="i+'v-row'">
                        <td
                            v-for="(title,j) in scrollTitleData.title"
                            :key="j+'_td'"
                            v-text="row[title.prop]"
                        ></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- left -->
        <div
            class="nt-table__fixedleft"
            ref="fixedleftWrapper"
            :style="leftStyl"
            :class="{'fix-shadow':leftFixTabelData.showShadow}"
        >
            <table class="nt-table__fixedleft__table" ref="fixedleftTable">
                <thead ref="fixedleftThead" :style="topStyl">
                    <tr>
                        <th
                            :height="tHeadHeight"
                            :width="item.width"
                            v-for="(item,index) in leftFixTabelData.title"
                            :key="index+'_'+item.prop"
                            v-text="item.label"
                        ></th>
                    </tr>
                </thead>

                <tbody ref="fixedleft_tbody">
                    <tr v-for="(row,i) in data" :key="i+'v-row'">
                        <td
                            v-for="(title,j) in leftFixTabelData.title"
                            :key="j+'_td'"
                            v-text="row[title.prop]"
                        ></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- right -->
        <div
            ref="fixedrightWrapper"
            class="nt-table__fixedright"
            :class="{'fix-shadow':rightFixTabelData.showShadow}"
            :style="leftStyl"
        >
            <table class="nt-table__fixedright__table" ref="fixedrightTable">
                <thead ref="fixedrightThead" :style="topStyl">
                    <tr>
                        <th
                            :height="tHeadHeight"
                            :width="item.width"
                            v-for="(item,index) in rightFixTabelData.title"
                            :key="index+'_'+item.prop"
                            v-text="item.label"
                        ></th>
                        <th v-if="$scopedSlots.default">
                            <div>操作</div>
                        </th>
                    </tr>
                </thead>

                <tbody ref="fixedright_tbody">
                    <tr v-for="(row,i) in data" :key="i+'v-row'">
                        <td
                            v-for="(title,j) in rightFixTabelData.title"
                            :key="j+'_td'"
                            v-text="row[title.prop]"
                        ></td>
                        <td v-if="$scopedSlots.default" class="handleTd">
                            <slot v-bind:row="row"></slot>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>

export default {
    name: 'nt-table',
    data() {
        return {
            titleAllData: [],
            leftFixTabelData: {
                title: [],
                data: [],
                showShadow: false
            },
            rightFixTabelData: {
                title: [],
                data: [],
                showShadow: true
            },
            scrollTitleData: {
                title: [],
                data: []
            },
            scrollTop: 0,
            scrollLeft: 0,
            tHeadHeight: 0,
            row: 988989
        }
    },
    props: {
        data: {
            type: Array,
            default: () => []
        },
        columns: {
            type: Array,
            default: () => []
        }
    },
    computed: {
        leftStyl() {
            return { transform: `translateX(${this.scrollLeft}px)` }
        },
        topStyl() {
            // 减一是为了解决transform渲染的问题
            return { transform: `translateY(${this.scrollTop-1}px)` }
        },
    },
    methods: {
        handleSlotData() {
            this.columns.forEach(item => this.titleAllData.push(item))
            // 此处如果用filter,增加复杂度,要三次filter
            this.titleAllData.forEach(item => {
                if (item.fixed === '' || item.fixed === 'left') {
                    this.leftFixTabelData.title.push(item)
                } else if (item.fixed === 'right') {
                    this.rightFixTabelData.title.push(item)
                } else {
                    this.scrollTitleData.title.push(item)
                }
            });
        },
        setScrollTablePading() {
            if (this.leftFixTabelData.title.length !== 0) {
                setTimeout(() => {
                    const [pdLeft, pdRight, scrollWidth] = [this.$refs.fixedleftWrapper.offsetWidth, this.$refs.fixedrightWrapper.offsetWidth, this.$refs.scrollTable.offsetWidth];
                    let lTableWidth = this.leftFixTabelData.title.length ? pdLeft : 0;
                    let rTableWidth = typeof pdRight !== 'undefined' ? pdRight : 0;
                    this.$refs.scrolWrapper.style.width = `${scrollWidth + lTableWidth}px`;
                    this.$refs.scrolWrapper.style.paddingLeft = (lTableWidth ? (lTableWidth - 1) : 0) + 'px'
                    this.$refs.scrolWrapper.style.paddingRight = (rTableWidth ? (rTableWidth - 1) : 0) + 'px'
                }, 0);
            }
        },
        bindScrollEvent() {
            this.$refs.ntTableWrapper.addEventListener('scroll', (e) => {
                const { scrollTop, scrollLeft } = e.target;
                // 左右滑动控制fixtable的阴影的显示隐藏
                this.leftFixTabelData.showShadow = !!scrollLeft;
                this.rightFixTabelData.showShadow = !(scrollLeft + this.$refs.ntTableWrapper.offsetWidth === this.$refs.scrolWrapper.offsetWidth);
                this.scrollTop = scrollTop
                this.scrollLeft = scrollLeft
            })
        }
    },
    mounted() {
        this.handleSlotData();
        this.bindScrollEvent();
        this.setScrollTablePading()
        setTimeout(() => {
            this.tHeadHeight = Math.max(this.$refs.scrolThead.offsetHeight,
                this.$refs.fixedleftThead.offsetHeight,
                this.$refs.fixedrightThead.offsetHeight)
        }, 0);
    },
}
</script>

<style>
</style>

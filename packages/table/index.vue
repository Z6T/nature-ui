<template>
    <div class="nt-table" ref="ntTableWrapper">
        <div class="nt-table__scroll" ref="scrolWrapper">
            <table class="nt-table__scroll__table" ref="scrollTable">
                <thead ref="scrolThead">
                    <tr>
                        <th
                            v-for="(item,index) in scrollTitleData.title"
                            :key="index+'_'+item.prop"
                            v-text="item.label"
                        ></th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>hoverme</td>
                        <td>hoverme</td>
                        <td>hoverme</td>
                        <td>hoverme</td>
                        <td>hoverme</td>
                        <td>hoverme</td>
                        <td>hoverme</td>
                        <td>hoverme</td>
                        <td>hoverme</td>
                        <td>hoverme</td>
                    </tr>
                    <tr>
                        <td>hoverme</td>
                        <td>hoverme</td>
                        <td>hoverme</td>
                        <td>hoverme</td>
                        <td>hoverme</td>
                        <td>hoverme</td>
                        <td>hoverme</td>
                        <td>hoverme</td>
                        <td>hoverme</td>
                        <td>hoverme</td>
                    </tr>
                    <tr>
                        <td>hoverme</td>
                        <td>hoverme</td>
                        <td>hoverme</td>
                        <td>hoverme</td>
                        <td>hoverme</td>
                        <td>hoverme</td>
                        <td>hoverme</td>
                        <td>hoverme</td>
                        <td>hoverme</td>
                        <td>hoverme</td>
                    </tr>
                    <tr>
                        <td>hoverme</td>
                        <td>hoverme</td>
                        <td>hoverme</td>
                        <td>hoverme</td>
                        <td>hoverme</td>
                        <td>hoverme</td>
                        <td>hoverme</td>
                        <td>hoverme</td>
                        <td>hoverme</td>
                        <td>hoverme</td>
                    </tr>
                    <tr>
                        <td>hoverme</td>
                        <td>hoverme</td>
                        <td>hoverme</td>
                        <td>hoverme</td>
                        <td>hoverme</td>
                        <td>hoverme</td>
                        <td>hoverme</td>
                        <td>hoverme</td>
                        <td>hoverme</td>
                        <td>hoverme</td>
                    </tr>
                    <tr>
                        <td>hoverme</td>
                        <td>hoverme</td>
                        <td>hoverme</td>
                        <td>hoverme</td>
                        <td>hoverme</td>
                        <td>hoverme</td>
                        <td>hoverme</td>
                        <td>hoverme</td>
                        <td>hoverme</td>
                        <td>hoverme</td>
                    </tr>
                    <tr>
                        <td>hoverme</td>
                        <td>hoverme</td>
                        <td>hoverme</td>
                        <td>hoverme</td>
                        <td>hoverme</td>
                        <td>hoverme</td>
                        <td>hoverme</td>
                        <td>hoverme</td>
                        <td>hoverme</td>
                        <td>hoverme</td>
                    </tr>
                    <tr>
                        <td>hoverme</td>
                        <td>hoverme</td>
                        <td>hoverme</td>
                        <td>hoverme</td>
                        <td>hoverme</td>
                        <td>hoverme</td>
                        <td>hoverme</td>
                        <td>hoverme</td>
                        <td>hoverme</td>
                        <td>hoverme</td>
                    </tr>
                    <tr>
                        <td>hoverme</td>
                        <td>hoverme</td>
                        <td>hoverme</td>
                        <td>hoverme</td>
                        <td>hoverme</td>
                        <td>hoverme</td>
                        <td>hoverme</td>
                        <td>hoverme</td>
                        <td>hoverme</td>
                        <td>hoverme</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="nt-table__fixedleft" ref="fixedleftWrapper">
            <table class="nt-table__fixedleft__table" ref="fixedleftTable">
                <thead ref="fixedleftThead" style="transform:translateY(0px)">
                    <tr>
                        <th
                            :width="item.width"
                            v-for="(item,index) in fixedLeftTitleData.title"
                            :key="index+'_'+item.prop"
                            v-text="item.label"
                        ></th>
                    </tr>
                </thead>

                <tbody ref="fixedleft_tbody">
                    <tr>
                        <td>xxx</td>
                        <td>xxx</td>
                    </tr>
                    <tr>
                        <td>hoverme</td>
                        <td>hoverme</td>
                    </tr>
                    <tr>
                        <td>hoverme</td>
                        <td>hoverme</td>
                    </tr>
                    <tr>
                        <td>hoverme</td>
                        <td>hoverme</td>
                    </tr>
                    <tr>
                        <td>hoverme</td>
                        <td>hoverme</td>
                    </tr>
                    <tr>
                        <td>hoverme</td>
                        <td>hoverme</td>
                    </tr>
                    <tr>
                        <td>hoverme</td>
                        <td>hoverme</td>
                    </tr>
                    <tr>
                        <td>hoverme</td>
                        <td>hoverme</td>
                    </tr>
                    <tr>
                        <td>yy</td>
                        <td>yyy</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="nt-table__fixedright" ref="fixedrightWrapper">
            <table class="nt-table__fixedright__table" ref="fixedrightTable">
                <thead ref="fixedrightThead" style="transform:translateY(0px)">
                    <tr>
                        <th
                            :width="item.width"
                            v-for="(item,index) in fixedRightTitleData.title"
                            :key="index+'_'+item.prop"
                            v-text="item.label"
                        ></th>
                    </tr>
                </thead>

                <tbody ref="fixedright_tbody">
                    <tr>
                        <td>xxx</td>
                        <td>xxx</td>
                    </tr>
                    <tr>
                        <td>hoverme</td>
                        <td>hoverme</td>
                    </tr>
                    <tr>
                        <td>hoverme</td>
                        <td>hoverme</td>
                    </tr>
                    <tr>
                        <td>hoverme</td>
                        <td>hoverme</td>
                    </tr>
                    <tr>
                        <td>hoverme</td>
                        <td>hoverme</td>
                    </tr>
                    <tr>
                        <td>hoverme</td>
                        <td>hoverme</td>
                    </tr>
                    <tr>
                        <td>hoverme</td>
                        <td>hoverme</td>
                    </tr>
                    <tr>
                        <td>hoverme</td>
                        <td>hoverme</td>
                    </tr>
                    <tr>
                        <td>yy</td>
                        <td>yyy</td>
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
            fixedLeftTitleData: {
                title: [],
                data: []
            },
            fixedRightTitleData: {
                title: [],
                data: []
            },
            scrollTitleData: {
                title: [],
                data: []
            },
        }
    },
    methods: {
        handleSlotData() {
            const slotDefault = this.$slots.default;
            slotDefault.forEach(item => this.titleAllData.push(item.data.attrs))
            this.fixedLeftTitleData.title = this.titleAllData.filter(item => typeof item.fixed !== 'undefined' && (item.fixed === '' || item.fixed === 'left'))
            this.fixedRightTitleData.title = this.titleAllData.filter(item => item.fixed === 'right');
            this.scrollTitleData.title = this.titleAllData.filter(item => typeof item.fixed === 'undefined');
        },
        setScrollTablePading() {
            if (this.fixedLeftTitleData.title.length !== 0 || this.fixedLeftTitleData.title.length !== 0) {
                setTimeout(() => {
                    const [pdLeft, pdRight] = [this.$refs.fixedleftWrapper.offsetWidth, this.$refs.fixedrightWrapper.offsetWidth]
                    this.$refs.scrolWrapper.style.margin = `0 ${pdRight - 1}px  0  ${pdLeft - 1}px `;
                }, 0);
            }
        },
        bindScrollEvent() {
            // 更改scroll的padding

            this.$refs.ntTableWrapper.addEventListener('scroll', (e) => {
                const { scrollTop, scrollLeft } = e.target;
                // 固定头
                this.$refs.scrolThead.style.transform = `translateY(${scrollTop}px)`
                // 左右滑动控制fixtable的阴影的显示隐藏
                if (scrollLeft) {
                    this.$refs.fixedleftWrapper.classList.add('fix-shadow')
                } else {
                    this.$refs.fixedleftWrapper.classList.remove('fix-shadow')
                }
                // 因为缩进了2px
                const awarp = this.$refs.scrolWrapper;
                console.log(this.$refs.fixedleftWrapper.offsetWidth, this.$refs.fixedleftWrapper.offsetWidth, scrollLeft);
                console.log('this.$refs.scrolWrapper.offsetLeft :', this.$refs.scrolWrapper.offsetLeft);
                console.log('awarp.clientWidth :', awarp.clientWidth);
                console.log('awarp.offsetWidth :', awarp.offsetWidth);
                console.log('awarp.scrollLeft :', scrollLeft);
                if (scrollLeft + 2 === this.$refs.fixedleftWrapper.offsetWidth + this.$refs.fixedleftWrapper.offsetWidth) {
                    this.$refs.fixedrightWrapper.classList.remove('fix-shadow')
                } else {
                    this.$refs.fixedrightWrapper.classList.add('fix-shadow')
                }
                this.$refs.fixedleftThead.style.transform = `translateY(${scrollTop}px)`
                this.$refs.fixedleftWrapper.style.left = `${scrollLeft}px`

                this.$refs.fixedrightThead.style.transform = `translateY(${scrollTop}px)`
                this.$refs.fixedrightWrapper.style.right = `-${scrollLeft}px`
            })
        }
    },
    mounted() {
        this.handleSlotData()
        this.bindScrollEvent();
        this.setScrollTablePading()
    },
}
</script>

<style>
</style>

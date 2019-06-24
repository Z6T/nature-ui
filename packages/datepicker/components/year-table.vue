<template>
    <div>
        <div class="nt-date-picker__header">
            <span @click="handleArrowClick('decrease')">&lt;&lt;</span>
            &emsp;
            <p class="nt-date-picker__header__title">{{firstYear}}年-{{lastYear}}年</p>&emsp;
            <span @click="handleArrowClick('increase')">&gt;&gt;</span>
        </div>
        <div class="nt-date-picker__content">
            <div class="nt-date-picker__content__body_year" @click="clickYearCell">
                <div
                    class="nt-date-picker__content__body_year__cell"
                    :class="item==curyear ?'nt-date-picker__content__body_year__cell_active':''"
                    v-for="(item,i) in arr"
                    :key="i+'_year'"
                >{{item}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'year-nt-table',
    data() {
        return {
            firstYear: '', lastYear: '',
            curyear: this.year, arr: []
        }
    },
    inject: ['ntDatePicker'],
    props: {
        year: {
            type: Number
        }
    },
    methods: {
        countYearList(year) {
            let y = year;
            this.firstYear = y - y % 10;
            this.lastYear = this.firstYear + 9;
            const arr = [];
            for (let i = this.firstYear; i < this.lastYear + 1; i++) {
                arr.push(i)
            }
            this.arr = arr;
        },
        clickYearCell(e) {
            const y = +e.target.innerText
            this.curyear = y
            this.$parent.curDate.year = y;
            this.ntDatePicker.showYearTable = false; this.ntDatePicker.showMonthTable = true;
        },
        handleArrowClick(type) {
            type === 'increase' ? this.firstYear += 10 : this.firstYear -= 10;
            this.countYearList(this.firstYear)
        },
        init() {
            this.countYearList(this.curyear)
        }
    },
    watch: {
        year(newVal) {
            this.curyear = newVal;
            this.init()
        }
    },
    created() {
        this.init()
    },
}
</script>

<style>
</style>

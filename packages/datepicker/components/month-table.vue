<template>
    <div>
        <div class="nt-date-picker__header">
            <span @click="handleArrowClick('decrease')">&lt;&lt;</span>
            &emsp;
            <p
                class="nt-date-picker__header__title"
                @click="ntDatePicker.showMonthTable = false;ntDatePicker.showYearTable = true;"
            >{{curyear}}年</p>&emsp;
            <span @click="handleArrowClick('increase')">&gt;&gt;</span>
        </div>
        <div class="nt-date-picker__content">
            <div class="nt-date-picker__content__body_year" @click="clickMonthCell">
                <div
                    class="nt-date-picker__content__body_year__cell"
                    :class="item==curmonth+'月' ?'nt-date-picker__content__body_year__cell_active':''"
                    v-for="(item,i) in arr"
                    :key="i+'_year'"
                >{{item}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'month-nt-table',
    data() {
        return {
            curyear: this.year,
            curmonth: this.month, arr: []
        }
    },
    inject: ['ntDatePicker'],
    props: {
        month: {
            type: Number
        },
        year: Number
    },
    methods: {
        countMonthList() {
            const arr = [];
            for (let i = 1; i < 13; i++) {
                arr.push(i + '月')
            }
            this.arr = arr;
        },
        clickMonthCell(e) {
            const m = parseInt(e.target.innerText)
            this.curmonth = m
            this.$parent.curDate.month = m;
            this.ntDatePicker.showMonthTable = false; this.ntDatePicker.showPanel = true;

        },
        handleArrowClick(type) {
            type === 'increase' ? this.curyear++ : this.curyear--;
            this.$parent.curDate.year = this.curyear;
        },
        init() {
            this.countMonthList(this.curmonth)
        }
    },
    watch: {
        year(newVal) {
            this.curyear = newVal;
        }
    },
    created() {
        this.init()
    },
}
</script>

<style>
</style>

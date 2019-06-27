<template>
    <div>
        <div class="nt-date-picker__header">
            <span @click="ntDatePicker.handleArrowClick('year','decrease')">&lt;&lt;</span>&emsp;
            <span @click="ntDatePicker.handleArrowClick('month','decrease')">&lt;</span>&emsp;
            <p class="nt-date-picker__header__title">
                <span
                    @click="ntDatePicker.showPanel = false;ntDatePicker.showYearTable = true;"
                >{{main_curDate.year}}年</span>
                <span
                    @click="ntDatePicker.showPanel = false;ntDatePicker.showMonthTable = true;"
                >{{main_curDate.month}}月</span>
            </p>&emsp;
            <span @click="ntDatePicker.handleArrowClick('month','increase')">&gt;</span>&emsp;
            <span @click="ntDatePicker.handleArrowClick('year','increase')">&gt;&gt;</span>
        </div>
        <div class="nt-date-picker__content">
            <div class="nt-date-picker__content__header">
                <div class="td">日</div>
                <div class="td">一</div>
                <div class="td">二</div>
                <div class="td">三</div>
                <div class="td">四</div>
                <div class="td">五</div>
                <div class="td">六</div>
            </div>
            <div class="nt-date-picker__content__body" @click="clickDateCell">
                <div
                    areatag="prev"
                    class="nt-date-picker__content__body__cell nt-date-picker__content__body__cell_disable"
                    v-for="(previtem,index) in main_prevMonth"
                    :key="index+'_p'"
                >{{previtem}}</div>
                <div
                    areatag="cur"
                    class="nt-date-picker__content__body__cell"
                    :class="[year_month + ('0'+avilitem).slice(-2)===ntDatePicker.dateText?
                    'nt-date-picker__content__body__cell_active':'',year_month + avilitem===ntDatePicker.curText?
                    'nt-date-picker__content__body__cell_curDay':'']"
                    v-for="(avilitem,index) in main_avilaDate"
                    :key="index+'_a'"
                >{{avilitem}}</div>
                <div
                    areatag="next"
                    class="nt-date-picker__content__body__cell nt-date-picker__content__body__cell_disable"
                    v-for="(nextitem,index) in main_nextMonth"
                    :key="index+'_n'"
                >{{nextitem}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'main-nt-table',
    data() {
        return {
            main_prevMonth: this.prevMonth,
            main_avilaDate: this.avilaDate,
            main_nextMonth: this.nextMonth,
            main_curDate: this.curDate
        }
    },
    inject: ['ntDatePicker'],
    props: {
        prevMonth: Array,
        avilaDate: Array,
        nextMonth: Array,
        curDate: {
            type: Object,
            default: () => {
                return { year: '', month: '', date: '' }
            }
        }
    },
    methods: {
        clickDateCell(e) {
            const tag = e.target.getAttribute('areatag');
            const d = +e.target.innerText;
            let date = this.curDate;
            switch (tag) {
                case 'prev':
                    date.month--;
                    break;
                case 'next':
                    date.month++;
            }
            date.date = d;
            const { year, month, date: sDate } = date;
            let oldVal = this.$parent.dateText;
            this.$parent.selectDate = { year, month, date: sDate };
            this.$parent.$emit('input', this.$parent.dateText); // 给父组件传值
            // 处理change事件
            this.$parent.$emit('change', this.$parent.dateText, oldVal);

        }
    },
    computed: {
        year_month() {
            const { year, month } = this.main_curDate;
            return year + '-' + ('0' + month).slice(-2) + '-';
        }
    },
    watch: {
        prevMonth(newVal) {
            this.main_prevMonth = newVal;
        },
        avilaDate(newVal) {
            this.main_avilaDate = newVal;
        },
        nextMonth(newVal) {
            this.main_nextMonth = newVal;
        },
        curDate: {
            handler(newVal) {
                this.main_curDate = newVal;
            },
            deep: true,
            immediate: true
        }
    },
}
</script>

<style>
</style>

<template>
    <div class="nt-date" @click="stopBlur">
        <input
            type="text"
            ref="dateInput"
            class="nt-date-picker__input"
            :placeholder="placeholder"
            :value="dateText"
            :disabled="disabled"
        />
        <i class="icon-nt-date iconfont nt-date__dateicon"></i>
        <i class="icon-nt-remove iconfont nt-date__remove" @click="clearDate"></i>
        <div class="nt-date-picker" v-show="showPanel||showYearTable||showMonthTable">
            <MainTable
                :prevMonth="prevMonth"
                :avilaDate="avilaDate"
                :nextMonth="nextMonth"
                :curDate="curDate"
                v-show="showPanel"
            />
            <YearTable :year="curDate.year" v-show="showYearTable" />
            <MonthTable :month="curDate.month" :year="curDate.year" v-show="showMonthTable" />
        </div>
    </div>
</template>

<script>
import MainTable from "./components/main-table";
import YearTable from "./components/year-table";
import MonthTable from "./components/month-table";

export default {
    name: "nt-date-picker",
    data() {
        return {
            prevMonth: [],
            avilaDate: [],
            nextMonth: [],
            showPanel: false,
            showYearTable: false,
            showMonthTable: false,
            curDate: {
                year: "",
                month: "",
                date: ""
            },
            selectDate: {}
        };
    },
    props: {
        placeholder: {
            type: String,
            default: "选择日期"
        },
        disabled: Boolean,
        value: {
            type: String
        }
    },
    components: { MainTable, YearTable, MonthTable },
    provide() {
        return {
            ntDatePicker: this
        };
    },
    computed: {
        dateText() {
            if (this.selectDate.year == undefined) {
                return this.value;
            }
            const { year, month, date } = this.selectDate;
            if (year && month && date) {
                return (
                    year + "-" + ("0" + month).slice(-2) + "-" + ("0" + date).slice(-2)
                );
            }
            return "";
        },
        curText() {
            const { year, month, date } = this.curDay;
            if (year && month && date) {
                return (
                    year + "-" + ("0" + month).slice(-2) + "-" + ("0" + date).slice(-2)
                );
            }
            return "";
        }
    },
    methods: {
        clearDate() {
            if (this.disabled) return;
            this.selectDate = {};
            this.$emit("input", "");
        },
        stopBlur(e) {
            if (!e.target.classList.contains("nt-date-picker__content__body__cell")) {
                e.stopPropagation();
            }
        },
        // 获得某年某月有多少天，也就是这个月最后一天是几号
        getDayCountInMonth(year, month) {
            let date = new Date(year, month, 0);
            return date.getDate();
        },
        // 获得某年某月的第一天是星期几
        getFirstDayInMonth(year, month) {
            let date = new Date(year, month - 1, 1);
            return date.getDay();
        },
        // month是真实的第几月
        getArrDayInYearMonth(year, month) {
            let baseTdCount = 42;
            // 这个月有几天
            let thisMonDay = this.getDayCountInMonth(year, month);
            // 这个月的第一天星期几？
            let FirstDayInMonth = this.getFirstDayInMonth(year, month);
            // 日历显示的第一天
            let firstAvilableDay =
                this.getDayCountInMonth(year, month - 1) - FirstDayInMonth + 1;
            let prevMonth = [],
                avilaDate = [],
                nextMonth = [];
            for (
                let i = firstAvilableDay;
                i < firstAvilableDay + FirstDayInMonth;
                i++
            ) {
                prevMonth.push(i);
            }
            // 为了保证剩下多少个元素，因为从1开始累加，所有要加1
            let availDateAndNext = baseTdCount - prevMonth.length + 1;
            let isThisMonth = true;
            for (let j = 1; j < availDateAndNext; j++) {
                let ele = j % thisMonDay;
                if (ele === 0) {
                    ele = thisMonDay;
                    avilaDate.push(ele);
                    isThisMonth = false;
                    continue;
                }
                isThisMonth ? avilaDate.push(ele) : nextMonth.push(ele);
            }
            this.prevMonth = prevMonth;
            this.avilaDate = avilaDate;
            this.nextMonth = nextMonth;
        },
        /**
         * 年还是月
         * 增加还是减少
         */
        handleArrowClick(dateType, _type) {
            let date = this.curDate[dateType];
            this.curDate[dateType] = _type === "increase" ? ++date : --date;
            if (dateType === "month" && _type === "increase" && date > 12) {
                this.curDate["year"] = this.curDate["year"] + 1;
                this.curDate["month"] = 1;
            } else if (dateType === "month" && _type !== "increase" && date < 1) {
                this.curDate["year"] = this.curDate["year"] - 1;
                this.curDate["month"] = 12;
            }
        },
        init() {
            const date = new Date();
            this.curDate.month = date.getMonth() + 1;
            this.curDate.year = date.getFullYear();
            this.curDate.date = date.getDate();
            this.curDay = Object.assign({}, this.curDate);
            // 这个方法传递的是实际月份
            this.arr;
        }
    },
    watch: {
        curDate: {
            handler(newVal) {
                const { year, month } = newVal;
                this.getArrDayInYearMonth(year, month);
            },
            deep: true,
            immediate: true
        }
    },
    created() {
        this.init();
    },
    mounted() {
        let self = this;
        (this.$refs.dateInput.onfocus = function (e) {
            self.showPanel = true;
        }),
            document.addEventListener("click", function () {
                self.showPanel = false;
            });
    }
};
</script>

<style>
</style>

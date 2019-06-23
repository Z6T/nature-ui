<template>
    <div style="width:210px">
        <div>
            <div class="td">日</div>
            <div class="td">一</div>
            <div class="td">二</div>
            <div class="td">三</div>
            <div class="td">四</div>
            <div class="td">五</div>
            <div class="td">六</div>
        </div>
        <div>
            <div class="td">1</div>
            <div class="td">2</div>
            <div class="td">3</div>
            <div class="td">4</div>
            <div class="td">5</div>
            <div class="td">6</div>
            <div class="td">7</div>
        </div>
    </div>
</template>

<script>
import { log } from 'util';
export default {
    name:'nt-date-picker',
    methods:{
        // 获得某年某月有多少天，也就是这个月最后一天是几号
        getDayCountInMonth(year,month){
            let date = new Date(year,month,0);
            return date.getDate();
        },
        // 获得某年某月的第一天是星期几
        getFirstDayInMonth(year,month){
            let date = new Date(year,month-1,1);
            return date.getDay();
        },
        // month是真实的第几月
        getArrDayInYearMonth(year,month){
            let baseTdCount = 42;
            // 这个月有几天
            let thisMonDay = this.getDayCountInMonth(year,month);
            // 这个月的第一天星期几？
            let FirstDayInMonth = this.getFirstDayInMonth(year,month);
            // 日历显示的第一天
            let firstAvilableDay = this.getDayCountInMonth(year,month-1)-FirstDayInMonth+1;
            let prevMonth = [],avilaDate=[],nextMonth=[];
            for (let i = firstAvilableDay; i < firstAvilableDay+FirstDayInMonth; i++) {
                prevMonth.push(i)
            }
            console.log(prevMonth);
            // 为了保证剩下多少个元素，因为从1开始累加，所有要加1
            let availDateAndNext = baseTdCount - prevMonth.length+1;
            let isThisMonth = true;
            for (let j = 1; j < availDateAndNext; j++) {
                let ele = j%thisMonDay;
                if(ele===0){
                    ele = thisMonDay;
                    avilaDate.push(ele)
                    isThisMonth = false;
                    continue;
                }
                isThisMonth?avilaDate.push(ele):nextMonth.push(ele);  
            }
            console.log(prevMonth,avilaDate,nextMonth);
        },
        init(){
            this.getArrDayInYearMonth(2019,8)
        }
    },
    created(){
        this.init()
    }
}
</script>

<style>
.td{
    width: 28px;
    border:1px solid red;
    float: left;
}
</style>

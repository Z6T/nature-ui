<template>
    <div class="nt-pagintion" @click="changeNum">
        <button
            class="nt-pagination__btn"
            :class="curPageNum===1?'nt-pagination__btn_disabled':''"
            :disabled="curPageNum===1"
        >上一页</button>
        <button
            class="nt-pagination__btn"
            :class="item===curPageNum?'nt-pagination__btn_active':''"
            v-for="(item, key) in buttonArr"
            :key="'btn' + key"
        >{{item|| '...'}}</button>
        <button
            class="nt-pagination__btn"
            :class="curPageNum===totolPages?'nt-pagination__btn_disabled':''"
            :disabled="curPageNum===totolPages"
        >下一页</button>
        <span class="nt-pagination__pagesize">
            共
            <span class="nt-pagination__pagesize_active">{{total}}</span> 条
        </span>
        <input
            type="text"
            class="nt-pagination__input"
            placeholder="页码"
            @input="inputSnum"
            v-model="searchNum"
        />
        <button class="nt-pagination__btn nt-pagination__btn_active">确定</button>
    </div>
</template>

<script>
export default {
    name: 'nt-pagination',
    props: {
        curPage: {
            type: Number,
            default: 1
        },
        total: {
            type: Number,
        },
        pageSize: {
            type: Number
        }
    },
    data() {
        return {
            curPageNum: this.curPage,
            searchNum: ''
        }
    },
    computed: {
        totolPages() {
            return Math.floor(this.total / this.pageSize) + 1;
        },
        buttonArr() {
            const maxlength = 5;
            if (this.totolPages < maxlength + 2) {
                return this.pushStart2End(1, this.totolPages)
            } else {
                const splitNum = Math.floor(maxlength / 2)
                if (this.curPageNum < maxlength) {
                    return this.pushStart2End(1, maxlength).concat([null, this.totolPages])
                } else if (this.curPageNum >= this.totolPages - splitNum) {
                    return [1, null].concat(this.pushStart2End(this.totolPages - maxlength, this.totolPages))
                } else {
                    return [].concat([1, null], this.pushStart2End(this.curPageNum - splitNum, this.curPageNum + splitNum), [null, this.totolPages])
                }
            }
        },
    },
    methods: {
        changeNum(e) {
            if (e.target.tagName === 'BUTTON') {
                const txt = e.target.innerText;
                switch (txt) {
                    case '上一页':
                        this.curPageNum = this.curPageNum - 1
                        break;
                    case '下一页':
                        this.curPageNum = this.curPageNum + 1
                        break;
                    case '确定':
                        if (!this.searchNum) return;
                        this.curPageNum = +this.searchNum;
                        break;
                    default:
                        this.curPageNum = +txt;
                        break;
                }
                this.$emit('change', this.curPageNum)
            }
        },
        inputSnum() {
            if (isNaN(+this.searchNum.slice(-1)) || this.searchNum > this.totolPages) {
                this.searchNum = this.searchNum.substring(0, this.searchNum.length - 1)
            }
        },
        pushStart2End(start, end) {
            let arr = []
            for (let i = start; i <= end; i++) {
                arr.push(i)
            }
            return arr
        },
    }

}
</script>

<style>
</style>

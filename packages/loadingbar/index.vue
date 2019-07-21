<template>
    <div
        class="nt-loadingbar"
        :style="{width:progressVal+'%',backgroundColor:barColor,opacity:opcy}"
    ></div>
</template>

<script>
export default {
    name: 'nt-loadingbar',
    data() {
        return {
            step: 0.2,
            initVal: 0,
            stopVal: 85,
            progressVal: 0,
            barColor: '#fff',
            opcy: 1
        }
    },
    props: {
        type: {
            type: String,
            validator: (val) => {
                return ['start', "finish", 'error'].indexOf(val) > -1;
            }
        }
    },
    methods: {
        go() {
            this.progressVal += this.step;
            this.barColor = 'green'
            setTimeout(() => {
                if (this.progressVal < 94) {
                    this.go();
                }
            }, 15);
        },
        finishBar() {
            this.progressVal = 100;
            setTimeout(() => {
                this.opcy = 0;
            }, 500);
        },
        color16() {//十六进制颜色随机
            var r = Math.floor(Math.random() * 256);
            var g = Math.floor(Math.random() * 256);
            var b = Math.floor(Math.random() * 256);
            var color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
            this.barColor = color;
        }
    },
    mounted() {
        if (this.type === "start") {
            this.go()
        } else if (this.type === "finish") {
            this.barColor = 'green'
            this.finishBar()
        } else if (this.type === "error") {
            this.barColor = 'red'
            this.finishBar()
        }
    },
}
</script>

<style>
</style>

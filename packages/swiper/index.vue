<template>
    <div class="nt-swiper">
        <transition-group tag="ul" name="list" class="nt-swiper__wrapper">
            <li v-for="(item,i) in slideList" :key="i" v-show="i===curIndex" @mouseenter="stopPlay"
             @mouseleave="go"
            >
                <a :href="item.clickUrl">
                    <img :src="item.imgSrc" alt />
                </a>
            </li>
        </transition-group>
        <div class="nt-swiper__dots">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
        </div>
    </div>
</template>

<script>
import { clearInterval } from 'timers';
export default {
    name: 'nt-swiper',
    data() {
        return {
            curIndex: 0,
            timer: '',
            slideList: [{
                imgSrc: 'https://gma.alicdn.com/bao/uploaded/i4/34532543/O1CN01rm95HU1UejiZiBhxI_!!0-saturn_solar.jpg_250x250.jpg_.webp',
                clickUrl: "http://baidu.com"
            }, {
                imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562330773616&di=d29902c5fb8b5f33ec28a67d08b8a68d&imgtype=0&src=http%3A%2F%2Fattachments.gfan.com%2Fforum%2F201608%2F04%2F23490553eyeyyc3yc8mur1.jpg',
                clickUrl: "http://baidu.com"
            }, {
                imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562330773989&di=e81bac9a75c76ba10a50c7ae907b89c6&imgtype=0&src=http%3A%2F%2Fcdnq.duitang.com%2Fuploads%2Fitem%2F201307%2F12%2F20130712143815_zXBrZ.jpeg',
                clickUrl: "http://baidu.com"
            }],
            timer:''
        }
    },
    methods: {
         go() {
                this.timer = setInterval(() => {
                    this.autoPlay()
                }, 1000)
            },
        autoPlay() {
            this.curIndex++;
            if (this.curIndex > this.slideList.length - 1) this.curIndex = 0;
        },
        stopPlay(){
            console.log(777);
            window.clearInterval(this.timer);
            this.timer = null;
        }
    },
    created() {
        // this.$nextTick(() => {
        //     this.timer = setInterval(() => {
        //         this.autoPlay()
        //     }, 1000)
        // })
    },
}
</script>

<style>
.ismove {
    transform: translateX(0px) !important;
    transition: all 0s !important;
}
</style>

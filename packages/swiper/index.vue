<template>
    <div class="nt-swiper">
        <transition-group tag="ul" name="list" class="nt-swiper__wrapper">
            <li
                v-for="(item,i) in slideList"
                :key="i+'swiper'"
                v-show="i===curIndex"
                @mouseenter="stopPlay"
                @mouseleave="go"
            >
                <a :href="item.clickUrl">
                    <img :src="item.imgSrc" alt />
                </a>
            </li>
        </transition-group>
        <div class="nt-swiper__dots">
            <span
                class="dot"
                v-for="(item,i) in slideList.length"
                :key="i"
                :class="curIndex === i?'is_active':''"
                @mouseenter="stopPlay(i)"
                @mouseleave="go"
            ></span>
        </div>
    </div>
</template>

<script>
import { clearInterval } from 'timers';
export default {
    name: 'nt-swiper',
    props: {
        slideList: Array
    },
    data() {
        return {
            curIndex: 0,
            timer: '',
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
        stopPlay(i) {
            if (typeof i === 'number') this.curIndex = i;
            window.clearInterval(this.timer);
            this.timer = null;
        }
    },
    created() {
        this.$nextTick(() => {
            this.timer = setInterval(() => {
                this.autoPlay()
            }, 1000)
        })
    },
}
</script>

<style>
.ismove {
    transform: translateX(0px) !important;
    transition: all 0s !important;
}
</style>

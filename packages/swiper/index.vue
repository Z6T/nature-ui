<template>
    <div class="nt-swiper">
        <transition-group tag="ul" :name="!isHoverDot?'list':''" class="nt-swiper__wrapper">
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

        <span v-if="showArrow" @click="toLeft" class="nt-swiper__leftarrow nt-swiper__arrow">
            <nt-icon icon="arrow-left"></nt-icon>
        </span>
        <span v-if="showArrow" @click="toRight" class="nt-swiper__rightarrow nt-swiper__arrow">
            <nt-icon icon="arrow-right"></nt-icon>
        </span>

        <div class="nt-swiper__dots" v-if="showDots">
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
export default {
    name: 'nt-swiper',
    props: {
        slideList: Array,
        showDots: {
            type: Boolean,
            default: false
        },
        showArrow: {
            type: Boolean,
            default: false
        },
        duration: {
            type: Number,
            default: 2000
        },
    },
    data() {
        return {
            curIndex: 0,
            timer: '',
            isHoverDot: false,
        }
    },
    computed: {
        total() {
            return this.slideList.length || 0;
        }
    },
    methods: {
        go() {
            this.timer = setInterval(() => {
                this.autoPlay()
            }, this.duration)
        },
        autoPlay() {
            this.isHoverDot = false;
            this.curIndex++;
            if (this.curIndex > this.total - 1) this.curIndex = 0;
        },
        stopPlay(i) {
            if (typeof i === 'number') this.curIndex = i;
            this.isHoverDot = true;
            window.clearInterval(this.timer);
            this.timer = null;
        },
        toLeft() {
            if (this.curIndex === 0) {
                this.curIndex = this.total - 1;
            } else {
                this.curIndex--;
            }
            this.stopPlay(this.curIndex)
        },
        toRight() {
            if (this.curIndex === this.total - 1) {
                this.curIndex = 0;
            } else {
                this.curIndex++;
            }
            this.stopPlay(this.curIndex)
        },
    },
    created() {
        this.$nextTick(() => {
            this.timer = setInterval(() => {
                this.autoPlay()
            }, this.duration)
        })
    },
}
</script>


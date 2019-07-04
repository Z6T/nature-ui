<template>
    <div class="nt-swiper">
        <DIV
            class="nt-swiper__wrapper translateXRight"
            ref="wrapper"
            :style="{transform:'translate('+X+'px)',transition:'all '+transitionTime +'s'}"
        >
            <div class="nt-swiper__wrapper__slider">1</div>
            <div class="nt-swiper__wrapper__slider">2</div>
            <div class="nt-swiper__wrapper__slider">3</div>
            <div class="nt-swiper__wrapper__slider">1</div>
        </DIV>
        <div class="nt-swiper__dots"></div>
    </div>
</template>

<script>
export default {
    name: 'nt-swiper',
    data() {
        return {
            X: 0,
            transitionTime: 1
        }
    },
    methods: {
        doSlider() {
            if (this.X === -2000) {
                this.transitionTime = 0;
                this.X = 0;
            }
            console.time()
            setTimeout(() => {
                console.timeEnd()
                this.transitionTime = 1;
                this.X -= 500;
                this.doSlider();
            }, 1000);
        }
    },
    created() {
        this.doSlider()
    },
}
</script>

<style>
.ismove {
    transform: translateX(0px) !important;
    transition: all 0s !important;
}
</style>

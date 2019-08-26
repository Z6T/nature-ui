<template>
    <div class="slider" :style="{overflow:of}" @mouseenter="of='auto'" @mouseleave="of='hidden'">
        <ul class="slider_group__wp" v-for="(item, index) in data" :key="index">
            <li class="slider_group__wp__item">
                <p class="slider_group__wp__item__label">{{item.label}}</p>
                <ul class="slider_group__wp__item__item">
                    <li v-for="(litiem, index) in item.children" :key="index">
                        <router-link :to="litiem.path">{{litiem.label}}</router-link>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'slider',
    data() {
        return {
            of: 'hidden'
        }
    },
    props: {
        data: Array
    }
}
</script>

<style lang="less">
// .slider::-webkit-scrollbar {display:none}

.slider {
    width: 260px;
    height: 100%;
    box-sizing: border-box;
    padding-top: 20px;
    overflow: auto;
    /* background-color: rebeccapurple; */
    & .slider_group__wp__item__label {
        color: #333333;
        font-weight: bold;
        font-size: 18px;
        line-height: 42px;
    }
    & li {
        padding: 3px 0;
    }
    & a {
        width: 100%;
        display: inline-block;
        line-height: 28px;
        font-size: 15px;
        color: #666666;
        text-decoration: none;
        cursor: pointer;
        font-family: monospace;
    }
    & p {
        padding: 0 !important;
    }
}
.router-link-active {
    color: #3399cc !important;
}
</style>

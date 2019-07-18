<template>
    <div class="app">
        <Nav></Nav>
        <div class="mainContnt">
            <Slider :data="sliderJson" />
            <router-view class="rv md"></router-view>
        </div>
    </div>
</template>

<script>
import sliderJson from './router/slides';
import Nav from './components/nav';
import Slider from './components/Slider';

export default {
    name: 'app',
    data() {
        return {
            sliderJson
        }
    },
    components: { Nav, Slider }

}
</script>

<style lang="less">
.app {
    display: flex;
    height: 100%;
    flex-direction: column;
    .mainContnt {
        flex: 1;
        padding-left: 180px;
        display: flex;

        .rv {
            box-sizing: border-box;
            width: 100%;
            height: 100%;
            padding: 20px;
            overflow: auto;
            // background-color: RED;
        }
    }
}
@media screen and (max-width: 1300px) {
    .app .mainContnt {
        padding: 0 100px;
    }
}
</style>

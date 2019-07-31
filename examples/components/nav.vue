<template>
    <div class="nav">
        <div class="nav__log">
            <img src="../assets/logo.png" alt />
        </div>
        <div class="nav__item__wrapper">
            <div class="nav__item">专栏</div>
            <div class="nav__item">github</div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
.nav {
    display: flex;
    justify-content: space-between;
    height: 60px;
    padding: 0 200px;
    background-color: #ffffff;
    position: relative;
    overflow: hidden;
    -webkit-box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    .nav__log {
        height: 100%;
        img {
            height: 100%;
        }
    }
    .nav__item__wrapper {
        display: flex;
        .nav__item {
            padding: 0 4px;
            margin: 0 10px;
            font-size: 16px;
            line-height: 60px;
            // border-bottom: 3px solid #3399cc;
            cursor: pointer;
        }
    }
}

@media screen and (max-width: 1300px) {
    .nav {
        padding: 0 100px;
    }
}
</style>

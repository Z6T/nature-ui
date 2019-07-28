<template>
    <div class="nt-loading">
     <img src="../nt-styles/common/imgs/earth.svg" style="display:block;width:330px;height:240px" />
    </div>
</template>

<script>
export default {
    name:'nt-loading'

}
</script>

<style>
.nt-loading{
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 99999999;
    background: rgba(0,0,0,0.4);
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>

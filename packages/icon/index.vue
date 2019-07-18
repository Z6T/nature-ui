<template>
    <i class="nt-icon iconfont" :class="'icon-'+icon" @click="handleClick"></i>
</template>

<script>
export default {
    name: 'nt-icon',
    props: {
        icon: String
    },
    methods: {
        handleClick(e) {
            this.$emit('click', e)
        }
    },
}
</script>

<style>
</style>

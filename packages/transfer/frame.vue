<template>
    <div class="nt-transper__frame">
        <div class="nt-transper__frame__header">{{title}}</div>
        <div class="nt-transper__frame__body">
            <div
                class="nt-transper__frame__body__item"
                v-for="item in frameData"
                :key="item.key"
            >{{item.label}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'nt-transfer__frame',
    props: {
        frameData: Array,
        title: String
    }
}
</script>

<style>
</style>

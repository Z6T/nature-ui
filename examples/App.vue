<template>
    <div id="app">
        <nt-button size="large">默认按钮</nt-button>&emsp;
        <nt-button>默认按钮</nt-button>&emsp;
        <nt-button size="small">默认按钮</nt-button>&emsp;
        <nt-button type="primary" size="large">默认按钮</nt-button>&emsp;
        <nt-button type="primary">默认按钮</nt-button>&emsp;
        <nt-button type="primary" size="small">默认按钮</nt-button>&emsp;
        <nt-button type="danger" size="large">默认按钮</nt-button>&emsp;
        <nt-button type="danger">默认按钮</nt-button>&emsp;
        <nt-button type="danger" size="small">默认按钮</nt-button>&emsp;
        <nt-button type="warn" size="large">默认按钮</nt-button>&emsp;
        <nt-button type="warn">默认按钮</nt-button>&emsp;
        <nt-button type="warn" size="small">默认按钮</nt-button>&emsp;
    </div>
</template>

<script>
export default {
    name: "app",
    components: {
    },
    methods: {
        query(e) {
            // eslint-disable-next-line no-console
            console.log(e);
        }
    }
};
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>

<template>
    <div id="app">
        <nt-button size="large">默认按钮</nt-button>-------
        <nt-button>默认按钮</nt-button>-------
        <nt-button size="small">默认按钮</nt-button>
        <br>
        <nt-button type="primary" :disabled="false">百搭按钮</nt-button>------
        <nt-button type="danger" size="small" :long="true">百搭按钮</nt-button>------
        <nt-button type="warn" @click="query" :disabled="false">查询</nt-button>------
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

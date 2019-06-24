<template>
    <div id="app">
        <nt-button size="large">默认按钮</nt-button>-------
        <nt-button>默认按钮</nt-button>-------
        <nt-button size="small">默认按钮</nt-button>
        <br>
        <nt-button type="primary" :disabled="false">百搭按钮</nt-button>------
        <nt-button type="danger" size="small" :long="true">百搭按钮</nt-button>------
        <nt-button type="warn" @click="query" :disabled="false">查询</nt-button>------
        <nt-checkbox v-model="checked1" border>备选1</nt-checkbox>
        <nt-checkbox v-model="checked2" border>备选2</nt-checkbox>

        <nt-checkbox-list v-model="list" @change="handChange">
            <nt-checkbox value="one">备选1</nt-checkbox>
            {{checked1}}
            <nt-checkbox value="two">备选2</nt-checkbox>
            {{checked2}}
        </nt-checkbox-list>
        {{list}}
        <h1></h1>
        <nt-date-picker></nt-date-picker>
        <!-- <h1>你好</h1> -->
    </div>
</template>

<script>
export default {
    name: "app",
    data() {
        return {
            value1: '',
            value2: '',
            checked1: false,
            checked2: true,
            list: ['one']
        }
    },
    components: {
    },
    methods: {
        query(e) {
            // eslint-disable-next-line no-console
            console.log(e);
        },
        handChange(val) {
            alert(val)
        }
    }
};
</script>

<style>
</style>

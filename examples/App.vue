<template>
    <div id="app">
        <nt-select :options="options" v-model="sVal"></nt-select>
        ==={{sVal}}
        <nt-select></nt-select>
        <hr>
        <nt-button size="large">默认按钮</nt-button>-------
        <nt-button>默认按钮</nt-button>-------
        <nt-button size="small">默认按钮</nt-button>
        <br>
        <nt-button type="primary" :disabled="false">百搭按钮</nt-button>------
        <nt-button type="danger" size="small" :long="true">百搭按钮</nt-button>------
        <nt-button type="warn" @click="query" :disabled="true">查询</nt-button>------
        <nt-checkbox v-model="checked1" border :disabled="true">备选1</nt-checkbox>
        <nt-checkbox v-model="checked2" border>备选2</nt-checkbox>

        <nt-checkbox-list v-model="list" @change="handChange">
            <nt-checkbox value="one" :disabled="true">备选1</nt-checkbox>
            {{checked1}}
            <nt-checkbox value="two">备选2</nt-checkbox>
            {{checked2}}
        </nt-checkbox-list>
        {{list}}
        <h1></h1>
        <nt-date-picker v-model="date" @change="handledate"></nt-date-picker>
        <nt-date-picker v-model="date" @change="handledate"></nt-date-picker>
        <nt-date-picker v-model="date" @change="handledate"></nt-date-picker>
        ---{{date}}
        <!-- <nt-dialog></nt-dialog> -->
        <button @click="showModal">点击</button>
        <button @click="showPageloading">start</button>
        <button @click="finnishPageloading">finish</button>
        <button @click="errorloading">error</button>
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
            list: ['one'],
            date: '',
            options: [{
                text: '🍎',
                value: '1'
            }, {
                text: '🍐',
                value: '2'
            }, {
                text: '🍌',
                value: '3'
            }],
            sVal: '3'
        }
    },
    methods: {
        query(e) {
            // eslint-disable-next-line no-console
            console.log(e);
        },
        handChange(val) {
            alert(val)
        },
        handledate(val, old) {
            // console.log('^^^^^^* val *^^^^^^', val);
            // console.log('^^^^^^* old *^^^^^^', old);
        },
        showModal() {
            this.$dialog({
                justOkBtn: false,
                confirm() {
                    console.log(999);
                    // this.dialogClose()
                }
            }).then(() => {
                alert('success')
            });
        },
        showPageloading() {
            this.$loadingbar.start();
        },
        finnishPageloading() {
            this.$loadingbar.finish();
        },
        errorloading() {
            this.$loadingbar.error();
        }
    }
};
</script>

<style>
#app {
    padding: 0 100px;
}
#app > * {
    margin: 20px;
}
</style>

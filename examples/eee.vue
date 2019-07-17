<template>
    <div id="app">
        <router-view></router-view>
        <nt-table :data="tableData" :columns="title" style="height:200px">
            <template v-slot:default="scope" fixed="right">
                <span @click="handleCick(scope.row)">编辑</span>
                <span>删除</span>
                <span>编辑</span>
            </template>
        </nt-table>
        <hr />
        <nt-swiper :slideList="slideList"></nt-swiper>
        <hr />
        <nt-transfer :data="datatransfer" :targetKeys="targetKeys" @onChange="handleCHangeTranfsd"></nt-transfer>

        <nt-tree :data="treeData" @node-click="handTreeClick"></nt-tree>
        <hr />
        <nt-select :options="options" v-model="sVal"></nt-select>
        ==={{sVal}}
        <nt-select></nt-select>
        <hr />
        <nt-button size="large">默认按钮</nt-button>-------
        <nt-button>默认按钮</nt-button>-------
        <nt-button size="small">默认按钮</nt-button>
        <br />
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
            slideList: [{
                imgSrc: 'https://gma.alicdn.com/bao/uploaded/i4/34532543/O1CN01rm95HU1UejiZiBhxI_!!0-saturn_solar.jpg_250x250.jpg_.webp',
                clickUrl: "http://baidu.com"
            }, {
                imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562330773616&di=d29902c5fb8b5f33ec28a67d08b8a68d&imgtype=0&src=http%3A%2F%2Fattachments.gfan.com%2Fforum%2F201608%2F04%2F23490553eyeyyc3yc8mur1.jpg',
                clickUrl: "http://baidu.com"
            }, {
                imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562330773989&di=e81bac9a75c76ba10a50c7ae907b89c6&imgtype=0&src=http%3A%2F%2Fcdnq.duitang.com%2Fuploads%2Fitem%2F201307%2F12%2F20130712143815_zXBrZ.jpeg',
                clickUrl: "http://baidu.com"
            }],
            datatransfer: [
                { "key": "1", "label": "Content 1", "disabled": false },
                { "key": "2", "label": "Content 2", "disabled": true },
                { "key": "3", "label": "Content 3", "disabled": false }
            ],
            targetKeys: ["1", "2"],
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
            sVal: '3',
            treeData: [
                {
                    label: '西游记',
                    'id': '111',
                    state: 'open',
                    children: [
                        {
                            label: '孙悟空',
                            id: '111-1'
                        },
                        {
                            label: '猪八戒',
                            id: '111-2'
                        }
                    ]
                },
                {
                    label: '三国演义',
                    id: '222',
                    children: [
                        {
                            label: '关羽',
                            id: '222-1',
                            state: 'open',
                            children: [
                                {
                                    label: '关平',
                                    id: '222-1-1'
                                }
                            ]
                        },
                        {
                            label: '张飞',
                            id: '222-2',
                            children: [
                                {
                                    label: '张苞',
                                    id: '222-2-1'
                                }
                            ]
                        },
                        {
                            label: '刘备',
                            id: '222-3',
                            children: [
                                {
                                    label: '阿斗',
                                    id: '222-3-1'
                                }
                            ]
                        },
                    ]
                },
            ],
            title: [
                {
                    label: '机构编号',
                    prop: 'number',
                    width: 85,
                    fixed: 'left'
                },
                {
                    label: '机构名称',
                    prop: 'name',
                    width: 292,
                    // fixed: 'left',
                    textAlign: 'left'
                },
                {
                    label: '类型',
                    prop: 'type',
                    width: 180
                },
                {
                    label: '类型',
                    prop: 'type',
                    width: 180
                },
                {
                    label: '类型',
                    prop: 'type',
                    width: 180
                },
                {
                    label: '类型',
                    prop: 'type',
                    width: 180
                },
                {
                    label: '类型',
                    prop: 'type',
                    width: 180
                },
                {
                    label: '类型',
                    prop: 'type',
                    width: 180
                },
                {
                    label: '类型',
                    prop: 'type',
                    width: 180,
                    // fixed: 'right'
                },
                {
                    label: '状态',
                    prop: 'brand',
                    width: 82,
                    // fixed: 'right'
                }
            ],
            tableData: [{
                number: 111,
                // english: 222,
                name: '英皇读书',
                type: '金融',
                brand: '在线运行'
            }, {
                number: 333,
                // english: 222,
                name: '英皇读书',
                type: '金融',
                brand: '在线运行'
            }, {
                number: 111,
                // english: 222,
                name: '英皇读书',
                type: '金融',
                brand: '在线运行'
            }, {
                number: 111,
                // english: 222,
                name: '英皇读书',
                type: '金融',
                brand: '在线运行'
            }, {
                number: 111,
                // english: 222,
                name: '英皇读书',
                type: '金融',
                brand: '在线运行'
            }, {
                number: 111,
                // english: 222,
                name: '英皇读书',
                type: '金融',
                brand: '在线运行'
            },]
        }
    },
    methods: {
        handleCHangeTranfsd(newT) {
            console.log(newT);
        },
        handleCick(data) {
            console.log(data);
        },
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
        },
        handTreeClick(item) {
            console.log('item :', item);
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

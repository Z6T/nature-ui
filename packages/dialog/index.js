
import Vue from "vue"; // 引入 Vue 是因为要用到 Vue.extend() 这个方法
import Dialog from './index.vue'

let constructor = Vue.extend(Dialog); // 这个在前面的前置知识内容里面有讲到
let instance;

let dialogInstance = {}
dialogInstance = function (options = {}) {
    return new Promise((resolve, reject) => {
        instance = new constructor({
            propsData: options
        }).$mount(); // 渲染组件
        document.body.appendChild(instance.$el); // 挂载到 body 下
        resolve();
    })
};
Vue.prototype.$dialog = dialogInstance;

export default {
    Dialog, dialogInstance
};

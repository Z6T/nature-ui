
import Vue from "vue"; // 引入 Vue 是因为要用到 Vue.extend() 这个方法
import loadingbar from './index.vue'

let constructor = Vue.extend(loadingbar); // 这个在前面的前置知识内容里面有讲到
let loadingbarInstance = function (options = {}) {
    const instance = new constructor({
        propsData: options
    }).$mount(); // 渲染组件
    console.log(instance);
    const prevEle = document.querySelector('.nt-loadingbar')
    if (prevEle) {
        prevEle.parentNode.removeChild(prevEle)
    }
    document.body.appendChild(instance.$el); // 挂载到 body 下
};
['start', "finish", 'error'].forEach(type => {
    loadingbarInstance[type] = (options = {}) => {
        options.type = type;
        return loadingbarInstance(options)
    }
})
Vue.prototype.$loadingbar = loadingbarInstance;

export default loadingbarInstance;

import Vue from "vue"; // 引入 Vue 是因为要用到 Vue.extend() 这个方法
import loading from "./index.vue";

let constructor = Vue.extend(loading); // 这个在前面的前置知识内容里面有讲到
let loadingInstance = function (options = {}) {
    const instance = new constructor({
        propsData: options
    }).$mount(); // 渲染组件
    const prevEle = document.querySelector(".nt-loading");
    if (prevEle) {
        prevEle.parentNode.removeChild(prevEle);
    }
    document.body.appendChild(instance.$el); // 挂载到 body 下
};

Vue.prototype.$ntLoadingShow = loadingInstance;
Vue.prototype.$ntLoadingHide = function () {
    document.body.removeChild(document.querySelector('.nt-loading'))
};

export default loadingInstance;

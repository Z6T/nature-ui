import Vue from "vue"; // 引入 Vue 是因为要用到 Vue.extend() 这个方法
import Message from "./index.vue";

let constructor = Vue.extend(Message);
let MsgInstance = function (options = {}) {
    const instance = new constructor({
        propsData: options
    }).$mount(); // 渲染组件
    const prevEle = document.querySelector(".nt-message");
    if (prevEle) {
        prevEle.parentNode.removeChild(prevEle);
    }
    document.body.appendChild(instance.$el); // 挂载到 body 下
    window.setTimeout(() => {
        instance.$el.style.opacity = 0;
        setTimeout(() => {
            document.body.removeChild(instance.$el)
        }, 1000);
    }, options.duration * 1000 || 3000)
};

Vue.prototype.$ntMessageShow = MsgInstance;
Vue.prototype.$ntMessageHide = function () {
    document.body.removeChild(document.querySelector('.nt-message'))
};

export default MsgInstance;

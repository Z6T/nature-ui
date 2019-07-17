# 快速开始

## 使用之前

 在开始使用 nature-ui 之前，有必要先了解Vue基础知识，我们也假设您已经写过 Vue,

## 引入nature-ui



在项目入口页面 `main.js` 中如下配置：

```javascript
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from 'components/app.vue';
import Routers from './router.js';
// 1、引入nature-ui和nature.min.css
import natureUi from 'nature-ui';
import 'nature-ui/lib/styles/nature.min.css'

Vue.use(VueRouter);
// 2、全局注册
Vue.use(natureUi);

// The routing configuration
const RouterConfig = {
    routes: Routers
};
const router = new VueRouter(RouterConfig);

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
```

## 组件使用规范

使用`:prop`传递数据格式为 数字、布尔值或函数时，必须带`:`(兼容String除外，具体看组件文档)，比如：

```javascript
Correct usage:
<nt-button :disabled="true"></nt-button>

Incorrect usage:
<nt-button disabled="true"></nt-button>
```

所有组件的前缀均为 `nt-`



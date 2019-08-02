## 基于vue-cli3环境搭建

- 初始化项目`vue create nature-ui`
- 改造项目目录
  - src修改为examples,这个里边就是可以供你进行测试组件,和编写官方文档的,下边会介绍
  - 根目录新增packages目录,存放所有的组件
- 根目录新增vue.config.js,目的是为了改造项目入口,改为:examples/main.js

```javascript
module.exports = {
    pages: {
        index: {
            entry: "examples/main.js"
        }
    }
}
```

- 在packages下新建button文件夹,button下新建index.vue,并在packages下新建index.js作为

```js
|--packages
|----button
|------index.vue
```

index.vue非常简单的内容:

```js
<template>
    <button>nature-ui</button>
</template>

<script>
export default {
    name: 'nt-button'
}
```




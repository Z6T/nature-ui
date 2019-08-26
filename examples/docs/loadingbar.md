
<script>
export default {
  methods: {
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



# LoadingBar 页面顶部加载条

### 基本用法
::: demo 
```html
<template>
  <div>
    <nt-button  @click="showPageloading">start</nt-button>
    <nt-button type="primary" @click="finnishPageloading">finish</nt-button>
    <nt-button type="danger" @click="errorloading">error</nt-button>
  </div>
</template>
<script>
export default {
  methods: {
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

```
:::
### Events

| 事件名称 | 说明     | 回调参数 |
| :------- | :------- | :------- |
|this.$loadingbar.start();  | 进度条开始 |    -      |
| this.$loadingbar.finish();  | 进度条完成 |    -      |
| this.$loadingbar.error();  | 进度条错误 |    -      |

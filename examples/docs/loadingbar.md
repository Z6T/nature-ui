
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

调用`this.$loadingbar.start();this.$loadingbar.finish();this.$loadingbar.error();`分别对应**进度条开始，进度条完成，进度条错误**。
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

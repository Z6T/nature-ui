
<script>
export default {
  methods: {
    showPageloading() {
      this.$ntLoadingShow();
      setTimeout(()=>{
        this.$ntLoadingHide();
      },2000)
    },
    showSpinloading() {
      this.$ntLoadingShow();
      setTimeout(()=>{
        this.$ntLoadingHide();
      },2000)
    },
    showEarthloading() {
      this.$ntLoadingShow({
          type:'earth'
      });
      setTimeout(()=>{
        this.$ntLoadingHide();
      },2000)
    },
    showDiskloading() {
      this.$ntLoadingShow({
          type:'disk'
      });
      setTimeout(()=>{
        this.$ntLoadingHide();
      },2000)
    },
  }
};
</script>



# Loading 加载中

### 基本用法

::: demo 
```html
<template>
  <div>
    <nt-button  @click="showPageloading">显示loading</nt-button>
  </div>
</template>
<script>
export default {
  methods: {
     showPageloading() {
      this.$ntLoadingShow();
      setTimeout(()=>{
        this.$ntLoadingHide();
      },2000)
    }
  }
};
</script>

```
:::
### Loading样式

::: demo 
```html
<template>
  <div>
    <nt-button  @click="showSpinloading">显示loading</nt-button>
    <nt-button  @click="showEarthloading">显示loading</nt-button>
    <nt-button  @click="showDiskloading">显示loading</nt-button>
  </div>
</template>
<script>
export default {
  methods: {
     showPageloading() {
      this.$ntLoadingShow();
      setTimeout(()=>{
        this.$ntLoadingHide();
      },2000)
    }
  }
};
</script>

```
:::


### Attributes

| 参数     | 说明           | 类型    | 可选值                               | 默认值    |
| :------- | :------------- | :------ | :----------------------------------- | :-------- |
| type     | 显示loading的类型       | String  |   earth, spin, disk| spin |


### Events

| 事件名称 | 说明     | 回调参数 |
| :------- | :------- | :------- |
| this.$ntLoadingShow();    | 显示loading |    -      |
| this.$ntLoadingHide();    | 隐藏loading |    -      |

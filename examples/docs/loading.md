
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



# LoadingBar 页面顶部加载条

### 基本用法

调用

```javascript
this.$ntLoadingShow();
this.$ntLoadingHide();
```

分别对应**显示loading，隐藏loading**。
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

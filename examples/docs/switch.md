# Switch 开关

## 基本用法

通过v-model来绑定开关的闭合和关闭，类型为Boolean,通过绑定change事件，当开关点击时就会触发，参数为切换后的新值
::: demo 
```html
<template>
  <div>
    <nt-switch v-model="switchActive" @change="handleSwitchChange"></nt-switch>
    <p>{{switchActive}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      switchActive: true
    };
  },
  methods: {
    handleSwitchChange(val) {
      alert(`切换后的新值为${val}`);
    }
  }
};
</script>


```
:::

### Attributes
通过v-model来绑定开关的闭合和关闭，类型为Boolean


### Events

| 事件名称 | 说明     | 回调参数 |
| :------- | :------- | :------- |
| change    | 点击开关时触发的事件 |  参数为切换后的新值     |


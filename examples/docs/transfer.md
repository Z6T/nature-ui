# Transfer 穿梭框

## 基本用法

**data**为需要传递的左右框的所有数据，类型为Array,里边的每一项都有一个唯一的**key**,作为唯一标识，**disabled**类型为Boolean,定义该项是否禁用
::: demo 
```html
<template>
  <nt-transfer :data="datatransfer" :targetKeys="targetKeys" @change="handleCHangeTranfer"></nt-transfer>
</template>

<script>
export default {
  data() {
    return {
      datatransfer: [
        { key: "1", label: "Content 1", disabled: false },
        { key: "2", label: "Content 2", disabled: true },
        { key: "3", label: "Content 3", disabled: false }
      ],
      targetKeys: ["1", "2"]
    };
  },
  methods: {
    handleCHangeTranfer(newT) {
      console.log(newT);
    }
  }
};
</script>

```
:::

### Attributes

| 参数     | 说明           | 类型    | 可选值                               | 默认值    |
| :------- | :------------- | :------ | :----------------------------------- | :-------- |
| data     | 原始列表和目标列表的所有数据     | Array  | 每一项需要有唯一的key值 | -|
| targetKeys     | 目标列表数据的key组成的Array      | Array  | -   | - |
| disabled | 该项是否禁用   | boolean | `true` `false`                       | `false`   |

### Events

| 事件名称 | 说明     | 回调参数 |
| :------- | :------- | :------- |
| change    | 点击穿梭按钮时触发的事件 | 参数为一个数组，有两个原素，第一个元素为原始列表的数据Array,第二个元素为目标列表的数据Array        |


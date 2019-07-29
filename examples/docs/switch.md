<script>
    export default {
      data() {
        return {
          switchActive: true,
          selfswitchActive:false
        };
      },
      methods: {
        handleSwitchChange(val) {
          alert(`切换后的新值为${val}`);
        }
      }
    }
</script>


# Switch 开关

## 基本用法

通过v-model来绑定开关的闭合和关闭，类型为Boolean
::: demo 
```html
<template>
  <div>
    <nt-switch v-model="switchActive"></nt-switch>
    <p>
        <span class="firstSpan"> {{switchActive?'开':'关'}}</span>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      switchActive: true
    };
  }
};
</script>


```
:::
## 自定义颜色

通过**activeBgc**传递状态为开时候的颜色,通过**inactiveBgc**传递状态为关时候的颜色
::: demo 
```html
<template>
  <div>
    <nt-switch v-model="selfswitchActive" activeBgc="red" inactiveBgc="black" ></nt-switch>
    <p>
        <span> {{selfswitchActive?'开':'关'}}</span>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selfswitchActive:false
    };
  }
};
</script>


```
:::


## 监听事件

通过绑定change事件，当开关点击时就会触发，参数为切换后的新值
::: demo 
```html
<template>
  <div>
    <nt-switch v-model="switchActive" @change="handleSwitchChange"></nt-switch>
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
### Attributes
| 参数       | 说明     | 类型   | 可选值 | 默认值    |
| :---------- | :-------- | :------ | :------ | :--------- |
| v-model      | 绑定开关的闭合和关闭 | Boolean | —      | false     |
| activeBgc     | 状态为开时候的颜色 | String | -      | #3399CC(主题色)        |
| inactiveBgc     | 状态为关时候的颜色 | String | -      | #ccc        |


### Events

| 事件名称 | 说明     | 回调参数 |
| :------- | :------- | :------- |
| change    | 点击开关时触发的事件 |  参数为切换后的新值     |


# Button 按钮

## 基本用法

### 按钮类型 

需要传递type属性,支持 **default、primary、danger、warn** 四种类型，默认为 **default**

::: demo 
```html
<nt-button>默认按钮</nt-button>
<nt-button type="primary" >百搭按钮</nt-button>
<nt-button type="danger"  >危险按钮</nt-button>
<nt-button type="warn"    >警告按钮</nt-button>
```
:::

### 按钮尺寸

需要传递size属性,支持 **large、normal、small** 三种类型，默认为 **normal**

::: demo 
```html
<nt-button size="large">默认按钮</nt-button>
<nt-button>默认按钮</nt-button>
<nt-button size="small">默认按钮</nt-button>
```
:::

### 按钮禁用

需要传递disabled属性,支持 **true,false** 两种类型，默认为 **false**,类型为Boolean,因此需要在disabled前加":"

::: demo 
```html
<nt-button :disabled="true">默认按钮</nt-button>
<nt-button :disabled="true" type="primary" >百搭按钮</nt-button>
<nt-button :disabled="true" type="danger"  >危险按钮</nt-button>
<nt-button :disabled="true" type="warn"    >警告按钮</nt-button>
```
:::

### 块级按钮

需要传递long属性,支持 **true,false** 两种类型，默认为 **false**

::: demo 
```html
<nt-button type="primary" size="small" :long="false">百搭按钮</nt-button>
<nt-button type="primary" size="small" :long="true">百搭按钮</nt-button>
```
:::

### 按钮事件

直接在组件上绑定@click即可,不需要特殊传递事件

::: demo 
```html

<template>
    <nt-button @click="handleClick">点我一下</nt-button> 
</template>

<script>
export default{
    methods:{
        handleClick(){
            alert('欢迎来到nature-ui大事件')
        }
    }
}
</script>
```
:::
### Attributes

| 参数     | 说明           | 类型    | 可选值                               | 默认值    |
| :------- | :------------- | :------ | :----------------------------------- | :-------- |
| type     | 按钮类型       | string  | `default` `primary` `danger`  `warn` | `default` |
| size     | 按钮 大小      | string  | `normal` `large`  `small`            | `normal`  |
| disabled | 按钮是否禁用   | boolean | `true` `false`                       | `false`   |
| long     | 是否为块状按钮 | boolean | `true` `false`                       | `false`   |

### Events

| 事件名称 | 说明     | 回调参数 |
| :------- | :------- | :------- |
| click    | 点击操作 |          |


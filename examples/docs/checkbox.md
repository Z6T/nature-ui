# Checkbox 复选框

## 基本用法

### 复选框类型 

单个的checkbox,通过v-modelbang

::: demo 
```html
<div id="checkbox">
<nt-checkbox v-model="zhuge">诸葛孔明</nt-checkbox>
<nt-checkbox  v-model="situ">王司徒</nt-checkbox>

<p>
    已选择：<span v-if='zhuge'>诸葛孔明</span> <span v-if='zhuge && situ'>,</span><span v-if='situ'>王司徒</span>
  </p></div>
<script>
export default{
    data(){
        return {
            zhuge:true,
            situ:false
        }
    },
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
| Long     | 是否为块状按钮 | boolean | `true` `false`                       | `false`   |

### Events

| 事件名称 | 说明     | 回调参数 |
| :------- | :------- | :------- |
| click    | 点击操作 |          |


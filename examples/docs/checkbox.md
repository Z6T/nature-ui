# Checkbox 复选框

## 基本用法

### 复选框类型 

默认写法,直接绑定value即可

::: demo 
```html
<div id="checkbox">
<nt-checkbox v-model="checked1">备选1</nt-checkbox>
<nt-checkbox  v-model="checked1">备选2</nt-checkbox>
</div>
<script>
export default{
    data(){
        return {
            checked1:true
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


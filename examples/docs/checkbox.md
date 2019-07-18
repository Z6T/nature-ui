<script>
export default{
    data(){
        return {
            zhuge:true,
            situ:false,
            yide:false,
            yunchang:true
        }
    },
     methods:{
        handleChange(val){
            alert(`您${val?'选择了':'取消了'}诸葛孔明`)
        }
    }
}
</script>

<style>
    p{
        font-size:14px;
    }
</style>
# Checkbox 复选框

## 基本用法

单个的checkbox,通过v-model绑定一个布尔值(Boolean)

::: demo 
```html
<div id="checkbox">
<nt-checkbox v-model="zhuge">诸葛孔明</nt-checkbox>
<nt-checkbox  v-model="situ">王司徒</nt-checkbox>

<p>
    已选择：<span v-if='zhuge'>诸葛孔明</span> <span v-if='zhuge && situ'>,</span><span v-if='situ'>王司徒</span>
  </p>
</div>
<script>
export default{
    data(){
        return {
            zhuge:true,
            situ:false
        }
    }
}
</script>


```
::: 

## 带边框的复选框

只需要传递一个border属性即可

::: demo 
```html
<div id="checkbox">
<nt-checkbox v-model="yide" border>张翼德</nt-checkbox>
<nt-checkbox  v-model="yunchang" border>关云长</nt-checkbox>

  <p>
    已选择：<span v-if='yide'>张翼德</span> <span v-if='yide && yunchang'>,</span><span v-if='yunchang'>关云长</span>
  </p>
</div>
<script>
export default{
    data(){
        return {
            yide:false,
            yunchang:true
        }
    }
}
</script>

```
::: 
## 禁用复选框

只需要传递一个disabled属性即可,可选参数为Boolean值,默认为false

::: demo 
```html
<div id="checkbox">
<nt-checkbox v-model="yide" :disabled="true">张翼德</nt-checkbox>
</div>
<script>
export default{
    data(){
        return {
            yide:false
        }
    }
}
</script>

```
::: 


## 绑定change事件

可以绑定change事件来监听复选框的改变,默认传递参数为新的Boolean值

::: demo 
```html
<div id="checkbox">
<nt-checkbox v-model="zhuge" @change="handleChange">诸葛孔明(点击试试)</nt-checkbox>

</div>
<script>
export default{
    data(){
        return {
            zhuge:true
        }
    },
    methods:{
        handleChange(val){
            alert(`您${val?'选择了':'取消了'}诸葛孔明`)
        }
    }
}
</script>

```
::: 


### Attributes

| 参数     | 说明           | 类型    | 可选值                               | 默认值    |
| :------- | :------------- | :------ | :----------------------------------- | :-------- |
| border     | 是否需要边框       | boolean  | `true`  `false`  |`false`|
| disabled | 按钮是否禁用   | boolean | `true` `false`                       | `false`   |

### Events

| 事件名称 | 说明     | 回调参数 |
| :------- | :------- | :------- |
| chaneg    | 监听复选框改变的事件 |   新是否选中的Boolean值       |


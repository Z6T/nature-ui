<script>
export default{
    data(){
        return {
            list:['tmall'],
            kjlist:['github'],
        }
    },
     methods:{
      handChange(list){
        alert(`当前选中的复选框组的key是${list}`)
      }
    }
}
</script>

<style>
    p{
        font-size:14px;
    }
</style>
# CheckboxList 复选框组

## 基本用法

与单个的checkbox不同的是,复选框组通过v-model绑定一个数组(Array),是所有选中的key值

::: demo 
```html
<nt-checkbox-list v-model="kjlist">
            <nt-checkbox value="facebook" :disabled="true">facebook</nt-checkbox>
            <nt-checkbox value="github">github</nt-checkbox>
            <nt-checkbox value="google">google</nt-checkbox>
</nt-checkbox-list>
<p>当前选中复选框组的key值:{{kjlist}}</p>
<script>
export default{
    data(){
        return {
          list:['tmall']
        }
    }
}
</script>


```
::: 


## 绑定change事件

可以绑定change事件来监听复选框的改变,默认传递参数为复选框组中所有选中项的key值

::: demo 
```html
<nt-checkbox-list v-model="list" @change="handChange">
            <nt-checkbox value="taobao">taobao</nt-checkbox>
            <nt-checkbox value="tmall">tmall</nt-checkbox>
</nt-checkbox-list>
<script>
export default{
    data(){
        return {
          list:['tmall']
        }
    },
    methods:{
      handChange(list){
        alert(`当前选中的复选框组的key是${list}`)
      }
    }
}
</script>



```
::: 

### Events

| 事件名称 | 说明     | 回调参数 |
| :------- | :------- | :------: |
| Change  | 监听复选框组改变的事件 |   新数组(Array),是所有选中的key值      |

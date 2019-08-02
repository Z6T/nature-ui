<script>
export default{
    data(){
        return {
          sVal:'3',
          sList:['1','3'],
          options: [{
                text: '北京大学	',
                value: '1'
            }, {
                text: '清华大学	',
                value: '2'
            }, {
                text: '复旦大学	',
                value: '3'
            }, {
                text: '中国人民大学		',
                value: '4'
            }, {
                text: '浙江大学		',
                value: '5'
            }, {
                text: '中山大学		',
                value: '6'
            }, {
                text: '上海交通大学	',
                value: '7'
            }],
        }
    },
    methods:{
        handleChange(val){
            alert(`单选框改变，更新后的key值为${val}`)
        },
        handleMulChange(val){
            alert(`multipleSelect改变，更新后的key值数组为${val}`)
        },
    }
}
</script>


<style>
    p{
        font-size:14px;
    }
</style>
# Select下拉框 

## 基本用法

下拉框选项通过options传递,要求每一项的value值**必须唯一**

::: demo 
```html
<nt-select :options="options" v-model="sVal"></nt-select>
<p>当前选择项的value值为:{{sVal}}</p>
<script>
export default{
    data(){
        return {
          sVal:'3',
          options: [{
                text: '北京大学	',
                value: '1'
            }, {
                text: '清华大学	',
                value: '2'
            }, {
                text: '复旦大学	',
                value: '3'
            }, {
                text: '中国人民大学		',
                value: '4'
            }, {
                text: '浙江大学		',
                value: '5'
            }, {
                text: '中山大学		',
                value: '6'
            }, {
                text: '上海交通大学	',
                value: '7'
            }],
        }
    }
}
</script>


```
::: 

## 下拉框多选

传递multiple属性,并通过v-model绑定一个数组(Array)

::: demo 

```html
<nt-select :options="options" v-model="sList" multiple></nt-select>
<p>当前选择项的value值为:{{sList}}</p>
<script>
export default{
    data(){
        return {
          sList:[],
          options: [{
                text: '北京大学	',
                value: '1'
            }, {
                text: '清华大学	',
                value: '2'
            }, {
                text: '复旦大学	',
                value: '3'
            }, {
                text: '中国人民大学		',
                value: '4'
            }, {
                text: '浙江大学		',
                value: '5'
            }, {
                text: '中山大学		',
                value: '6'
            }, {
                text: '上海交通大学	',
                value: '7'
            }],
        }
    }
}
</script>


```
::: 

## 下拉框禁用

传递disabled属性,参数为Boolean值，默认为false

::: demo 

```html
<nt-select :options="options" v-model="sVal" :disabled="true" ></nt-select>
<nt-select :options="options" v-model="sList" :disabled="true" multiple></nt-select>
<script>
export default{
    data(){
        return {
          sVal:'3',
          sList:['1','3'],
          options: [{
                text: '北京大学	',
                value: '1'
            }, {
                text: '清华大学	',
                value: '2'
            }, {
                text: '复旦大学	',
                value: '3'
            }, {
                text: '中国人民大学		',
                value: '4'
            }, {
                text: '浙江大学		',
                value: '5'
            }, {
                text: '中山大学		',
                value: '6'
            }, {
                text: '上海交通大学	',
                value: '7'
            }],
        }
    }
}
</script>


```
::: 

## 下拉框change事件

 直接@change绑定change事件即可

::: demo 

```html
<nt-select :options="options" v-model="sVal" @change="handleChange"></nt-select>
<nt-select :options="options" v-model="sList"  @change="handleMulChange" multiple></nt-select>
<script>
export default{
    data(){
        return {
          sVal:'3',
          sList:['1','3'],
          options: [{
                text: '北京大学	',
                value: '1'
            }, {
                text: '清华大学	',
                value: '2'
            }, {
                text: '复旦大学	',
                value: '3'
            }, {
                text: '中国人民大学		',
                value: '4'
            }, {
                text: '浙江大学		',
                value: '5'
            }, {
                text: '中山大学		',
                value: '6'
            }, {
                text: '上海交通大学	',
                value: '7'
            }],
        }
    },
    methods:{
        handleChange(val){
            alert(`单选框改变，更新后的key值为${val}`)
        },
        handleMulChange(val){
            alert(`multipleSelect改变，更新后的key值数组为${val}`)
        },
    }
}
</script>


```
::: 


### Attributes

| 参数     | 说明           | 类型    | 可选值                               | 默认值    |
| :------- | :------------- | :------ | :----------------------------------- | :-------- |
| disabled     |是否禁用       | Boolean  | `true` `false`  | `false` |
| multiple     | 是否多选      | -  | 直接加上这个属性即可，默认不加 | `无` |
### Events

| 事件名称 | 说明     | 回调参数 |
| :------- | :------- | :------: |
| change  | 直接@change绑定change事件即可 |   Event     |

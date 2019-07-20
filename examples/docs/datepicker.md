<script>
export default{
    data(){
        return {
           date:'',
           disabledDate:'2018-09-11'
        }
    },
    methods:{
        handleChange(val){
            alert(`日期选择后的新值为${val}`)
        }
    }
}
</script>

# DatePicker 日期选择器

## 基本用法

直接通过v-model绑定一个变量即可，可通过顶部的标题栏快捷方式选择年和月
::: demo 
```html
        <nt-date-picker v-model="date"></nt-date-picker>
        <p>您当前选择的日期是：{{date}}</p>
        <script>    
            export default{
                data(){
                    return {
                        date:''
                    }
                }
            }
        </script>
```
:::

### 禁用

需要传递disabled属性,Boolean类型

::: demo 
```html
        <nt-date-picker v-model="disabledDate" :disabled="true"></nt-date-picker>
        <p>您当前选择的日期是：{{disabledDate}}</p>
        <script>    
            export default{
                data(){
                    return {
                       disabledDate:'2018-09-11'
                    }
                }
            }
        </script>
```
:::

### change事件



::: demo 
```html
        <nt-date-picker v-model="date" @change="handleChange"></nt-date-picker>
        <p>您当前选择的日期是：{{date}}</p>
        <script>    
            export default{
                data(){
                    return {
                        date:''
                    }
                },
                methods:{
                    handleChange(val){
                        alert(`日期选择后的新值为${val}`)
                    }
                }
            }
        </script>
```
:::

### Attributes

| 参数     | 说明           | 类型    | 可选值                               | 默认值    |
| :------- | :------------- | :------ | :----------------------------------- | :-------- |
| placeholder     |    占位符    | string  |- | `选择日期` |
| disabled | 按钮是否禁用   | boolean | `true` `false`                       | `false`   |

### Events

| 事件名称 | 说明     | 回调参数 |
| :------- | :------- | :------- |
| change    | 日期选择值改变触发 | 改变后的新值         |


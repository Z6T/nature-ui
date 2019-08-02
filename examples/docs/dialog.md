<script>
export default{
    data(){
            return{
                clickText:''
            }
        },
    methods:{
        showHwModal(){
            const _this = this;
            this.$dialog({
                 height:300,
                 width:300,
                 showMask:true,
                 justOkBtn:true
            })
        },
        showModal(){
            this.$dialog().then(() => {
                alert('面板已经打开')
            });
        },
        showMaskModal(){
            this.$dialog({
                 showMask:true
            }).then(() => {
               
            });
        },
        showClickModal(){
            const _this = this;
            this.$dialog({
                 showMask:true,
                 justOkBtn:true,
                 confirm(){
                     _this.clickText = _this.clickText ?'' :'点击了确定';
                     this.dialogClose(); // 调用dialogClose方法关闭弹窗
                 }
            }).then(() => {
               
            });
        },
        showHwModal(){
            const _this = this;
            this.$dialog({
                 showMask:true,
                 height:300,
                 width:600
            }).then(() => {
               
            });
        },
  }
}
</script>


<style>
    p{
        font-size:14px;
    }
</style>
# Dialog 弹框

## 基本用法

<span>直接通过`this.$dialog([options])`调用即可，dialog的内容通过body传递，默认是唱、跳、rap、篮球、music

::: demo 
```html
<nt-button type="primary" @click="showModal">点击</nt-button>

<script>
export default{
    methods:{
        showModal(){
            this.$dialog().then(() => {
                alert('面板已经打开')
            });
        }
  }
}
</script>


```
::: 
## 显示遮罩

直接配置参数showMask即可

::: demo 
```html
<nt-button type="primary" @click="showMaskModal">点击</nt-button>

<script>
export default{
    methods:{
        showMaskModal(){
            this.$dialog({
                 showMask:true
            }).then(() => {
               
            });
        },
  }
}
</script>

```
::: 


## 配置确定按钮点击事件,只显示确定按钮

直接配置参数confirm即可,注:如果这个参数的方法使用了箭头函数,将不能再通过this调用dialogClose方法关闭弹窗

::: demo 
```html
<nt-button type="primary" @click="showClickModal">点击</nt-button>  {{clickText}}

<script>
export default{
    methods:{
        data(){
            return{
                clickText:''
            }
        },
         showClickModal(){
            const _this = this;
            this.$dialog({
                 showMask:true,
                 justOkBtn:true,
                 confirm(){
                    _this.clickText = _this.clickText ?'' :'点击了确定';
                    this.dialogClose(); // 此处直接通过this调用dialogClose方法关闭弹窗
                 }
            }).then(() => {
               
            });
        },
  }
}
</script>

```
::: 
## 配置自定义宽高

::: demo 
```html
<nt-button type="primary" @click="showHwModal">点击</nt-button>

<script>
export default{
         showHwModal(){
            const _this = this;
            this.$dialog({
                 height:300,
                 width:300,
                 showMask:true,
                 justOkBtn:true
            })
        },
  }
}
</script>

```
::: 

### Attributes

| 参数     | 说明           | 类型    | 可选值                               | 默认值    |
| :------- | :------------- | :------ | :----------------------------------- | :-------- |
| body     |    dialog的body部分    | String  |-|唱、跳、rap、篮球、music|
| showMask     |    是否显示遮罩层    | Boolean  |`true`,`false` | `false` |
| justOkBtn | 是否只显示确定按钮   | boolean | `true` `false`                       | `false`   |
| showHeader | 是否显示头部header   | boolean | `true` `false`                       | `true`   |
| title | 头部标题   | boolean | 提示                    |    |
| confirmTxt | 确定按钮的文字   | string | -                       | `确定`   |
| concelTxt | 取消按钮的文字   | string | -                       | `取消`   |
| confirm | 点击确定按钮执行的方法   | Function | -                       |    |
| concel | 点击取消按钮执行的方法   | Function | -                       |    |
### Events

 this.$dialog()返回一个pormise对象，可以通过.then进行处理回调

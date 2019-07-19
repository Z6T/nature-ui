<script>
export default{
    data(){
            return{
                clickText:''
            }
        },
    methods:{
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
                 confirm(){
                     _this.clickText = '点击了确定';
                     this.dialogClose(); // 调用dialogClose方法关闭弹窗
                 }
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
# dialog 弹框

## 基本用法

直接通过`this.$dialog([options])`调用即可

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


## 配置确定按钮点击事件

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
                 confirm(){
                    _this.clickText = '点击了确定';
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

### Events

| 事件名称 | 说明     | 回调参数 |
| :------- | :------- | :------: |
| click  | 直接绑定click事件即可 |   Event     |

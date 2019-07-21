<script>

export default{

    data(){

        return {

           date:'',

           disabledDate:'2018-09-11'

        }

    }

}

</script>

# skeleton 骨架屏

## 骨架屏样式组件

网络请求较慢 ，文本没有加载出来时，显示文本的默认占位图。

::: demo 
```html

<nt-skeleton  height=200"></nt-skeleton>

```
:::
## 自定义样式


::: demo 
```html
<div style="display:flex">
    <nt-skeleton  height="200" width="200"></nt-skeleton>
    <div style="display:flex;flex-direction:column">
        <nt-skeleton  height=30" width="200"></nt-skeleton>
        <nt-skeleton  height=30" width="400"></nt-skeleton>
        <nt-skeleton  height=30" width="400"></nt-skeleton>
        <nt-skeleton  height=30" width="400"></nt-skeleton>
    </div>
</div>

```
:::

### Attributes
| 参数       | 说明     | 类型   | 可选值 | 默认值    |
| ---------- | -------- | ------ | ------ | --------- |
| width      | 占位长度 | String | —      | 100%      |
| height     | 占位宽度 | String | -      | -         |
| proportion | 高、宽比 | Number | —      | 1         |
| bgColor    | 背景色   | String | —      | '#b4bccc' |

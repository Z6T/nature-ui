
<style>
    .wrapper{
        display:flex;
        flex-wrap:wrap;
    }
    .iconwrapper{
        display:flex;
        flex-direction: column;
        justify-content:start;
        text-align:center;
        width:80px;
        height:60px;
        font-size:12px;
        cursor:pointer;
    }
</style>
# Icon 小图标

## 基本用法

::: demo 
```html
<div class="wrapper">
    <span class='iconwrapper'>
        <nt-icon icon="visible"></nt-icon>
        <span class='iconitem'>visible</span>
    </span>

    <span class='iconwrapper'>
        <nt-icon icon="zoomout"></nt-icon>
        <span class='iconitem'>zoomout</span>
    </span>

    <span class='iconwrapper'>
        <nt-icon icon="upload"></nt-icon>
        <span class='iconitem'>upload</span>
    </span>

    <span class='iconwrapper'>
        <nt-icon icon="zoomin"></nt-icon>
        <span class='iconitem'>zoomin</span>
    </span>

    <span class='iconwrapper'>
        <nt-icon icon="up"></nt-icon>
        <span class='iconitem'>up</span>
    </span>

    <span class='iconwrapper'>
        <nt-icon icon="text"></nt-icon>
        <span class='iconitem'>text</span>
    </span>

    <span class='iconwrapper'>
        <nt-icon icon="spatial-analysis"></nt-icon>
        <span class='iconitem'>spatial-analysis</span>
    </span>

    <span class='iconwrapper'>
        <nt-icon icon="set"></nt-icon>
        <span class='iconitem'>set</span>
    </span>

    <span class='iconwrapper'>
        <nt-icon icon="share"></nt-icon>
        <span class='iconitem'>share</span>
    </span>

    <span class='iconwrapper'>
        <nt-icon icon="sequence"></nt-icon>
        <span class='iconitem'>sequence</span>
    </span>

    <span class='iconwrapper'>
        <nt-icon icon="save"></nt-icon>
        <span class='iconitem'>save</span>
    </span>

    <span class='iconwrapper'>
        <nt-icon icon="right"></nt-icon>
        <span class='iconitem'>right</span>
    </span>

    <span class='iconwrapper'>
        <nt-icon icon="scale-screen"></nt-icon>
        <span class='iconitem'>scale-screen</span>
    </span>

    <span class='iconwrapper'>
        <nt-icon icon="push"></nt-icon>
        <span class='iconitem'>push</span>
    </span>

    <span class='iconwrapper'>
        <nt-icon icon="property"></nt-icon>
        <span class='iconitem'>property</span>
    </span>

    <span class='iconwrapper'>
        <nt-icon icon="pull"></nt-icon>
        <span class='iconitem'>pull</span>
    </span>

    <span class='iconwrapper'>
    <nt-icon icon="more"></nt-icon>
    <span class='iconitem'>more</span>
    </span>

    <span class='iconwrapper'>
        <nt-icon icon="location"></nt-icon>
        <span class='iconitem'>location</span>
    </span>

    <span class='iconwrapper'>
        <nt-icon icon="left"></nt-icon>
        <span class='iconitem'>left</span>
    </span>

    <span class='iconwrapper'>
        <nt-icon icon="layer"></nt-icon>
        <span class='iconitem'>layer</span>
    </span>

    <span class='iconwrapper'>
        <nt-icon icon="invisible"></nt-icon>
        <span class='iconitem'>invisible</span>
    </span>
    <span class='iconwrapper'>
        <nt-icon icon="group-unfold"></nt-icon>
        <span class='iconitem'>group-unfold</span>
    </span>
    <span class='iconwrapper'>
        <nt-icon icon="function"></nt-icon>
        <span class='iconitem'>function</span>
    </span>
    <span class='iconwrapper'>
        <nt-icon icon="full-screen"></nt-icon>
        <span class='iconitem'>full-screen</span>
    </span>
    <span class='iconwrapper'>
        <nt-icon icon="group-fold"></nt-icon>
        <span class='iconitem'>group-fold</span>
    </span>
    <span class='iconwrapper'>
        <nt-icon icon="delete"></nt-icon>
        <span class='iconitem'>delete</span>
    </span>
    <span class='iconwrapper'>
        <nt-icon icon="filtration"></nt-icon>
        <span class='iconitem'>filtration</span>
    </span>
    <span class='iconwrapper'>
        <nt-icon icon="form"></nt-icon>
        <span class='iconitem'>form</span>
    </span>
    <span class='iconwrapper'>
        <nt-icon icon="down"></nt-icon>
        <span class='iconitem'>down</span>
    </span>
    <span class='iconwrapper'>
        <nt-icon icon="creat-map"></nt-icon>
        <span class='iconitem'>creat-map</span>
    </span>
    <span class='iconwrapper'>
        <nt-icon icon="download"></nt-icon>
        <span class='iconitem'>download</span>
    </span>
    <span class='iconwrapper'>
        <nt-icon icon="arrow-left"></nt-icon>
        <span class='iconitem'>arrow-left</span>
    </span>
    <span class='iconwrapper'>
        <nt-icon icon="date"></nt-icon>
        <span class='iconitem'>date</span>
    </span>
    <span class='iconwrapper'>
        <nt-icon icon="chart"></nt-icon>
        <span class='iconitem'>chart</span>
    </span>
    <span class='iconwrapper'>
        <nt-icon icon="creat-chart"></nt-icon>
        <span class='iconitem'>creat-chart</span>
    </span>
    <span class='iconwrapper'>
        <nt-icon icon="clean"></nt-icon>
        <span class='iconitem'>clean</span>
    </span>
    <span class='iconwrapper'>
        <nt-icon icon="area"></nt-icon>
        <span class='iconitem'>area</span>
    </span>
    <span class='iconwrapper'>
        <nt-icon icon="close"></nt-icon>
        <span class='iconitem'>close</span>
    </span>
    <span class='iconwrapper'>
        <nt-icon icon="add"></nt-icon>
        <span class='iconitem'>add</span>
    </span>
    <span class='iconwrapper'>
        <nt-icon icon="arrow-right"></nt-icon>
        <span class='iconitem'>arrow-right</span>
    </span>
    <span class='iconwrapper'>
        <nt-icon icon="arrow-up"></nt-icon>
        <span class='iconitem'>arrow-up</span>
    </span>
    <span class='iconwrapper'>
        <nt-icon icon="arrow-down"></nt-icon>
        <span class='iconitem'>arrow-down</span>
    </span>
    <span class='iconwrapper'>
        <nt-icon icon="more"></nt-icon>
        <span class='iconitem'>more</span>
    </span>
    <span class='iconwrapper'>
        <nt-icon icon="success"></nt-icon>
        <span class='iconitem'>success</span>
    </span>
    <span class='iconwrapper'>
        <nt-icon icon="danger"></nt-icon>
        <span class='iconitem'>danger</span>
    </span>
    <span class='iconwrapper'>
        <nt-icon icon="warn"></nt-icon>
        <span class='iconitem'>warn</span>
    </span>
</div>

```
::: 

### Attributes

| 参数     | 说明           | 类型    | 可选值                               | 默认值    |
| :------- | :------------- | :------ | :----------------------------------- | :-------- |
| icon     | 图标类型       | string  | 见上方demo| `无` |
### Events

| 事件名称 | 说明     | 回调参数 |
| :------- | :------- | :------: |
| click  | 直接通过@click绑定click事件即可 |   Event     |
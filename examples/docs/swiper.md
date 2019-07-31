<script>
export default {
    data() {
        return {
            slideList: [
                {
                    imgSrc: require("../assets/imgs/img1.jpeg"),
                    clickUrl: "https://github.com/Z6T/nature-ui"
                },
                {
                    imgSrc: require("../assets/imgs/img2.jpeg"),
                    clickUrl: "https://github.com/Z6T/nature-ui"
                },
                {
                    imgSrc: require("../assets/imgs/img3.jpeg"),
                    clickUrl: "https://github.com/Z6T/nature-ui"
                }
            ]
        }
    }
}
</script>
# Swiper 无缝轮播

## 基本用法

 <span>传递的**slideList**类型为**Array**类型,每一个元素都含有**imgSrc和clickUrl**,即图片地址和跳转链接,默认大小宽度为100%,高度为300px,可以如下demo中重写**style**进行重置
::: demo 
```html
<nt-swiper :slideList="slideList" style="width:600px"></nt-swiper>
<script>
export default {
    data() {
        return {
            slideList: [
                {
                    imgSrc: require("../assets/imgs/img1.jpeg"),
                    clickUrl: ""
                },
                {
                    imgSrc: require("../assets/imgs/img2.jpeg"),
                    clickUrl: "http://baidu.com"
                },
                {
                    imgSrc: require("../assets/imgs/img3.jpeg"),
                    clickUrl: "http://baidu.com"
                }
            ]
        }
    }
}
</script>

```
:::
## 显示底部导航和左右箭头

 <span>**showDots**为Boolean类型,是否显示底部导航,**showArrow**为Boolean类型,是否显示左右箭头,**duration**为Number类型,轮播组件过渡值,单位为ms
::: demo 
```html
<nt-swiper :slideList="slideList" :showDots="true" :showArrow="true" :duration="3000" style="width:600px"></nt-swiper>
<script>
export default {
    data() {
        return {
            slideList: [
                {
                    imgSrc: require("../assets/imgs/img1.jpeg"),
                    clickUrl: "http://baidu.com"
                },
                {
                    imgSrc: require("../assets/imgs/img2.jpeg"),
                    clickUrl: "http://baidu.com"
                },
                {
                    imgSrc: require("../assets/imgs/img3.jpeg"),
                    clickUrl: "http://baidu.com"
                }
            ]
        }
    }
}
</script>

```
:::

### Attributes

| 参数     | 说明           | 类型    | 可选值                               | 默认值    |
| :------- | :------------- | :------ | :----------------------------------- | :-------- |
| slideList     | 含有**imgSrc和clickUrl**,即图片地址和跳转链接的数组       | Array  | - | - |
| showDots     |  是否显示底部导航    | Boolean  |`true` `false`            | `false`  |
| showArrow     |  是否显示左右箭头  | Boolean  |`true` `false`            | `false`  |
| duration     |  轮播组件过渡值,单位为ms    | Number  |-           | 2000  |
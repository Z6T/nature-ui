# 安装

## CDN 引入


通过 [unpkg.com/nature-ui](https://unpkg.com/nature-ui/) 可以看到nature-ui 最新版本的资源，也可以切换版本选择需要的资源，在页面上引入 js 和 css 文件即可开始使用：

```javascript
<script src="//vuejs.org/js/vue.min.js"></script>
<script src="//unpkg.com/nature-ui/lib/nature-ui.umd.min.js"></script>
<link rel="stylesheet" href="//unpkg.com/nature-ui/lib/styles/nature.min.css">
```

### 示例

通过 CDN 可以快速使用 iView 写出一个示例，您可以复制下面代码

``` html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>iview example</title>
    <script type="text/javascript" src="http://vuejs.org/js/vue.min.js"></script>
    <!-- import nature-ui -->
    <script src="http://unpkg.com/nature-ui/lib/nature-ui.umd.min.js"></script>
    <link rel="stylesheet" href="http://unpkg.com/nature-ui/lib/styles/nature.min.css">
</head>

<body>
    <div id="app">
        <nt-button type="primary">欢迎来到nature-ui!</nt-button>
    </div>
    <script>
        new Vue({
            el: '#app'
        })
    </script>
</body>
</html>
```

## NPM 安装

推荐使用 npm 来安装，享受生态圈和工具带来的便利，可以更好的与各种打包工具相互融入。

``` javascript
$ npm install nature-ui --save
```

如果您使用了 NPM 安装，并使用 webpack 作为构建工具，请继续阅读**快速上手**章节。
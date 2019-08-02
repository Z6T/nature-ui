# 基于vue-cli3环境搭建

## 结构改造

- 初始化项目`vue create nature-ui`
- 改造项目目录
  - src修改为examples,这个里边就是可以供你进行测试组件,和编写官方文档的,下边会介绍
  - 根目录新增packages目录,存放所有的组件
- 根目录新增vue.config.js,目的是为了改造项目入口,改为:examples/main.js

```javascript
module.exports = {
    pages: {
        index: {
            entry: "examples/main.js"
        }
    }
}
```

- 在packages下新建button文件夹,button下新建index.vue,并在packages下新建index.js作为最终导出所有组件的总出口文件

```js
|--packages
|----index.js
|----button
|------index.vue
```

index.vue非常简单的内容:

```js
<template>
    <button>nature-ui</button>
</template>

<script>
export default {
    name: 'nt-button'
}
```

好了现在再examples的App.vue中引入button下的index.vue,然后yarn serve启动.如果启动正常没什么问题的话,你应该能在页面上看到这个button

别忘了,还有index.js,这个js的目的是为了导出所有组件,从而让别人在使用我们的UI库的时候.可以引入之后,通过Vue.use的方式引入.

后续所有的组件都会在这个index.js中导出组件:

```js
import Button from './button'

// 所有组件列表
const components = [
    Button
]
// 定义 install 方法，接收 Vue 作为参数
const install = function (Vue) {
    // 判断是否安装，安装过就不继续往下执行
    if (install.installed) return
    install.installed = true
    // 遍历注册所有组件
    components.map(component => {
        if (typeof component === 'undefined' || !component.name) return;
        Vue.component(component.name, component)
    })
    // 下面这个写法也可以
    // components.map(component => Vue.use(component))
}

// 检测到 Vue 才执行，毕竟我们是基于 Vue 的
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install,  
    ...components 
}

```

## CSS样式分离

大家应该可以看到像elementUI,iView这些比较优秀的UI库都是进行了样式分离的,这样也非常的有利于日后样式的管理和维护.

比如我的nature-ui,是在packages下新建了nt-styles目录,下边的src目录来专门存放我的所有的css文件.

这里我们使用市场上欢呼度最高最流行的BEM写法来写,也有一些别的文章记录过BEM和vue-cli的项目进行集成的,但是这里使用了最新的vue-cli3后,还是略有一些不同的,坑我都已经替大家踩过了

```js
npm i postcss-salad precss -D
```

安装完成之后,vue-cli3 的项目需要在项目根目录的package.json中进行配置,新增:

```js
"postcss": {
        "plugins": {
            "autoprefixer": {},
            "postcss-salad": {
                "browsers": [
                    "ie > 8",
                    "last 2 versions"
                ],
                "features": {
                    "bem": {
                        "shortcuts": {
                            "component": "b",
                            "descendent": "e",
                            "modifier": "m"
                        },
                        "separators": {
                          	// 这里的符号需要与你的css语法进行对应,
                            "descendent": "__
                            "modifier": "_"
                        }
                    }
                }
            }
        }
    },
```

上边的符号需要与你的css语法进行对应:

比如:

.nt-button__input_active

```css
@b nt-button{
  @e input{
    @m active{
      
    }
  }
}
```

这样才是对应的,BEM语法只有class!现在就可以完全对BEM语法进行解析了,

## 使用gulp对css文件进行打包

首先全局安装gulp:

```js
npm install gulp -g
```

安装gulp解析BEM语法所需要的编译css需要的依赖

```js
npm install gulp-cssmin gulp-rename gulp-concat gulp-postcss -D
```

在packages目录下的nt-styles目录中新建,gulpfile.js来对css进行编译( 注释都给各位加上了 ):

```js
//gulp文件流：src表示源头->pipe表示管道->dest表示终点
gulp.task('css', function () {
    return gulp.src('./index.css')
        .pipe(concat('nature.css')) //通过concat将css文件拼接成一个叫做style.css的文件
        .pipe(
            postcss([
                require('autoprefixer'),
                require('postcss-salad')({
                    "browsers": [
                        "ie > 8",
                        "last 2 versions"
                    ],
                    "features": {
                        "bem": {
                            "shortcuts": {
                                "component": "b",
                                "descendent": "e",
                                "modifier": "m"
                            },
                            "separators": {
                                "descendent": "__",
                                "modifier": "_"
                            }
                        }
                    }
                })
            ])
        )
        .pipe(cssmin()) //通过cssmin将上一步骤生产出的style.css去掉中间的空白，使他变成压缩格式
        .pipe(rename({
            suffix: '.min' //rename只是给上一步骤产出的压缩的styles.css重命名为style.min.css
        }))
        .pipe(gulp.dest('../../lib/styles')) //dest方法把上一步骤产出的style.min.css输出到“./dist/css”目录下（gulp流的终点）
});
```

## 改造package.json

在package.json的scripts下,新增两条命令:

1. lib是为了打包所有的组件,打包成一个js,如果不出意外,执行后你的根目录会生成一个lib目录下边有一堆js和js.map文件,你只需要关心xxxxx.umd.min.js,比如我的就是nature-ui.umd.min.js
2. 第二条命令显而易见就是为了打包css

```js
// --target 后接的是你要打
"lib": "vue-cli-service build --target lib --dest lib packages/index.js",
 "lib-css": "npx gulp css --gulpfile ./packages/nt-styles/gulpfile.js"
```

测试css,

首先给上边的button加一个类,比如,nt-button_default;

在nt-styles目录的src下,新建button.css,内容为:

```
@b nt-button{
  @m default{
    background:red;
  }
}
```

在App.vue中引入这个css.如果看到按钮变为红色,那么,恭喜阁下,BEM解析已经生效了,

万事俱备了,现在先给你的UI库想一个温文尔雅的名字,然后发布到npm去先占一个坑位吧,不然可能等你写完了发现,名字已经被占用了,比如很多类名都是根据UI库名字来命名的,到时候就不好改喽~

现在分别执行:

```
npm run lib
npm run lib-css
```

所有的文件都已经在lib目录下生成了~

## 发布到npm.js

去[npm](https://www.npmjs.com/)先注册一个账号吧,有邮箱认证的,邮箱被填错

然后回到项目,在package.json下新增:

```js
 "main": "lib/nature-ui.umd.min.js",
```

这个的目的是为了指定你的UI库的入口,然后就是:

```js
npm login //回车输入用户名和密码
npm publish // 每次publish的版本号都要比上一次高
```


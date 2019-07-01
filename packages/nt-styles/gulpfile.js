const gulp = require('./node_modules/gulp')
const cssmin = require('./node_modules/gulp-cssmin')
const rename = require('./node_modules/gulp-rename')
const concat = require('./node_modules/gulp-concat')
var postcss = require('./node_modules/gulp-postcss');

//gulp文件流：src表示源头->pipe表示管道->dest表示终点
gulp.task('css', function () {
    return gulp.src('./index.css')
        .pipe(concat('nature.css')) //通过concat将css文件拼接成一个叫做style.css的文件
        .pipe(
            postcss([
                require('./node_modules/autoprefixer'),
                require('./node_modules/postcss-salad')({
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

// gulp.task('build', ['css'])
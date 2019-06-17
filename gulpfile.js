const gulp = require('gulp')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const concat = require('gulp-concat')

//gulp文件流：src表示源头->pipe表示管道->dest表示终点
gulp.task('css', function () {
    return gulp.src('./src/style/*.css') //需要打包的css文件目录（gulp流的源头）
        .pipe(concat('style.css')) //通过concat将css文件拼接成一个叫做style.css的文件
        .pipe(cssmin()) //通过cssmin将上一步骤生产出的style.css去掉中间的空白，使他变成压缩格式
        .pipe(rename({
            suffix: '.min' //rename只是给上一步骤产出的压缩的styles.css重命名为style.min.css
        }))
        .pipe(gulp.dest('./dist/css')) //dest方法把上一步骤产出的style.min.css输出到“./dist/css”目录下（gulp流的终点）
});
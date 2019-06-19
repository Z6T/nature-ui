const path = require("path");

module.exports = {
    pages: {
        index: {
            entry: "examples/main.js"
        }
    },
    chainWebpack: config => {
        // 設置別名
        config.resolve.alias
            .set("@", path.resolve("examples"))
            .set("~", path.resolve("packages"));

        config.module
            .rule('js')
            .include.add(/packages/).end()
            .include.add(/examples/).end()
            .use('babel')
            .loader('babel-loader')
            .tap(options => {
                return options
            })
    }
};

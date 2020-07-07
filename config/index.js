/*
 * @Author: hblvsjtu (hblvsjtu@163.com)
 * @Date: 2020-05-04 12:18:32
 * @Last Modified by: hblvsjtu (hblvsjtu@163.com)
 * @Last Modified time: 2020-06-28 02:04:31
 */

const path = require("path");

module.exports = {
    srcPath: path.resolve(__dirname, "../src"),
    distPath: path.resolve(__dirname, "../dist"),
    proxy: {
        "/api": {
            target: "http://127.0.0.1:3000",
            changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
            secure: false, // 如果是https接口，需要配置这个参数
        },
    },
    dllFileNames: ["lodash"],
};

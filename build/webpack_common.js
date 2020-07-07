/*
 * @Author: hblvsjtu (hblvsjtu@163.com)
 * @Date: 2020-05-04 12:20:05
 * @Last Modified by: hblvsjtu (hblvsjtu@163.com)
 * @Last Modified time: 2020-06-07 14:55:57
 */

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { srcPath, distPath } = require("../config");

module.exports = {
    entry: {
        main: path.join(srcPath, "index.tsx"),
    },
    output: {
        filename: "[name].[hash:8].js",
        path: distPath,
        library: "BindData",
        libraryTarget: "umd",
        libraryExport: "default",
    },
    resolve: {
        // 针对 Npm 中的第三方模块优先采用 jsnext:main 中指向的 ES6 模块化语法的文件
        mainFields: ["jsnext:main", "browser", "main"],
        extensions: [".ts", ".tsx", ".js", ".jsx"],
    },
    module: {
        rules: [
            // addition - add source-map support
            {
                enforce: "pre",
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "source-map-loader",
            },
            {
                test: /\.ts$/,
                enforce: "pre",
                use: [
                    {
                        loader: "tslint-loader",
                        options: {
                            formatter: "codeFrame",
                            enforce: "pre",
                            emitErrors: true,
                            typeCheck: true,
                            fix: false,
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 6 * 1024,
                            fallback: "file-loader",
                            outputPath: "img/",
                        },
                    },
                ],
                include: srcPath,
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: path.resolve(__dirname, "../index.html"),
            chunks: ["main", "vendor", "common"],
            inject: "body",
        }),
    ],
};

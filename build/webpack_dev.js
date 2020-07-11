/*
 * @Author: hblvsjtu (hblvsjtu@163.com)
 * @Date: 2020-05-04 12:20:05
 * @Last Modified by: hblvsjtu (hblvsjtu@163.com)
 * @Last Modified time: 2020-06-28 02:02:49
 */

const path = require("path");
const merge = require("webpack-merge");
const webpackCommon = require("./webpack_common");
const DllReferencePlugin = require("webpack/lib/DllReferencePlugin");
const HtmlWebpackTagsPlugin = require("html-webpack-tags-plugin");
const { proxy, srcPath, distPath, dllFileNames } = require("../config");

module.exports = merge(webpackCommon, {
    mode: "development",
    entry: {
        main: path.join(srcPath, "show.tsx"),
    },
    module: {
        rules: [
            {
                test: /\.(t|j)sx?$/,
                use: [
                    {
                        loader: "ts-loader",
                    },
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"],
                include: srcPath,
            },
        ],
    },
    plugins: [
        new DllReferencePlugin({
            manifest: require(path.join(
                distPath,
                `dllFileNames.manifest.json`
            )),
        }),
        new HtmlWebpackTagsPlugin({
            tags: ["dllFileNames.dll.js"],
            append: false, // false 表示排在前面，true表示排在后面
        }),
    ],
    devServer: {
        index: "index.html",
        compress: true,
        host: "127.0.0.1",
        port: 8081,
        progress: true,
        contentBase: distPath,
        open: true,
        hot: true,
        compress: true,
        proxy,
    },
    devtool: "source-map",
});

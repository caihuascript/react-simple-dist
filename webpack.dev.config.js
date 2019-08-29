var webpack = require("webpack");
var CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");
module.exports = {
    entry: "./index.js",
    output: {
        filename: "main.bundle.js",
    },
    devServer: {
        filename: "main.bundle.js",
        host: "localhost",
        port: 8000,
        clientLogLevel: "warning",
        https: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"],
                    plugins: ["@babel/plugin-proposal-class-properties", "@babel/plugin-transform-classes", "@babel/plugin-transform-arrow-functions"],
                },
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: {
                    loader: "file-loader",
                },
            },
        ],
    },
    plugins: [
        new CaseSensitivePathsPlugin(), //检查引用文件名字的大小写
    ],
};

var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    mode: "production",
    entry: "./index.js",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "index.js",
        libraryTarget: "umd",
    },
    module: {
        rules: [
            {
                test: /\.js|.jsx$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"],
                    plugins: ["@babel/plugin-proposal-class-properties", "@babel/plugin-transform-classes", "@babel/plugin-transform-arrow-functions"],
                },
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 10000,
                            name: "iconfont/[name].[hash:7].[ext]",
                        },
                    },
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                    },
                    { loader: "sass-loader" },
                ],
            },
            {
                test: /\.scss|.css$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: "file-loader",
            },
        ],
    },
    resolve: {
        modules: ["src", "node_modules"],
        extensions: [".json", ".js", ".jsx"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./dist.html",
            filename: "./index.html",
            hash: true,
        }),
    ],
};

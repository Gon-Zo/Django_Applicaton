const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "../build")
    },
    mode: "development",
    devServer: {
        contentBase: path.resolve(__dirname, "../build"),
        index: "index.html",
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: "/node_modules",
                use: ["babel-loader"]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },
            // file loader
            {
                // test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                test: /\.(pg|jpg|JPG|jpeg|png|gif|mp3|svg|ttf|woff2|woff|eot)$/,
                loader: 'file-loader'
            },
            // url loader
            {
                // test: /.(pg|JPG|jpeg|png|gif|mp3|svg|ttf|woff2|woff|eot)?$/,
                test: /\.(pg|jpg|JPG|jpeg|png|gif|mp3|svg|ttf|woff2|woff|eot)$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "style.css"
        }),
        new CleanWebpackPlugin()
    ]
};

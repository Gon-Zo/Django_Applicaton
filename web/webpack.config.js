const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname + "/build")
    },
    mode: "none",
    module: {

        // loaders: [{
        //     test: /\.jsx?$/,
        //     loader: 'babel',
        //     query:
        //         {
        //             presets: ['es2015', 'react']
        //         }
        // }],

        rules: [
            // html 로더
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {minimize: true}
                    }
                ]
            },
            // babel 로더
            {
                test: /\.(js|jsx)$/,
                exclude: "/node_modules",
                use: ['babel-loader'],
            },
            // css 로더
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            // scss 로더
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            }
        ]
    },
    plugins: [
        // html plugin
        new HtmlWebPackPlugin({
            template: './public/index.html', // public/index.html 파일을 읽는다.
            filename: 'index.html' // output으로 출력할 파일은 index.html 이다.
        }),
        // style plugin
        new MiniCssExtractPlugin({
            filename: 'style-test.css'
        }),
        // clean webpack plugin
        new CleanWebpackPlugin()
    ],

};

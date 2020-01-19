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
    resolve: {
        modules: ['node_modules'],
        alias: {
            public: path.join(__dirname, '/build')
        }
    },
    devServer: {
        contentBase: path.resolve(__dirname, "../build"),
        index: "index.html",
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'src/')
                ],
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            },
            {
                test: /\.(js|jsx)$/,
                exclude: "/node_modules",
                use: ["babel-loader"],
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {minimize: true}
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
            // {test: /.(png|jpg|woff|woff2|eot|ttf|svg|gif)$/, loader: 'url-loader?limit=1024000'},
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

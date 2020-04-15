const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


let outPath = __dirname.replace('web', 'api') + '/venv/bin/App/Apps'

module.exports = {

    entry: "./src/index.js",

    output: {
        filename: "bundle.js",
        publicPath: "/",
        path: outPath + "/templates",
    },

    resolve: {
        extensions: [".jsx", ".js", '.css', '.scss' , '.json']
    },

    devServer: {
        port: 7000,
        open : true,

        proxy : {
            '/api/' :{
                target : 'http://localhost:3030',
                changeOrigin : true
            }
        }

    },

    module: {
        rules: [
            // babel
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },

            // html
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            // file
            {
                test: /\.(png|jpg|svg|gif|jpeg|ico)$/,
                use: [
                    'file-loader'
                ],
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },

            // css 로더
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            // scss 로더
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },

        ]

    },
    plugins: [

        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        }),

        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),


        new BundleTracker({filename: './webpack-stats.json'})

    ]
};

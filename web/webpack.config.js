const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {

    entry: "./src/index.js",

    // output: {
    //     filename: "bundle.js",
    //     path: path.resolve(__dirname + "/build")
    // },

    resolve: {
        extensions: [".jsx", ".js", '.css', '.scss' , '.json']
    },

    devServer: {
        port: 7000
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

            // {
            //     test: /\.json$/,
            //     exclude: /node_modules/,
            //     use: [
            //         // 'file-loader?name=[name].[ext]&outputPath=portal/content/json'
            //         'file-loader?name=[name].[ext]'
            //     ]
            // },

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

    ]
};

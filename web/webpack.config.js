const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const PATH_SOURCE = path.join(__dirname, '/src');
const PATH_BUILD  = path.join(__dirname, '/dist');

module.exports = {

    entry: {
        index : PATH_SOURCE + '/index.js',
    },

    output: {
        path: PATH_BUILD,
        filename: '[name]/[name].js',
    },

    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react"
                        ]
                    }
                }]
            },
        ]
    },


    resolve: {
        modules: [path.join(__dirname, 'src'), 'node_modules'],
        extensions: ['.js', '.jsx', '.css', '.scss', '.json'],
    },

    devServer: {
        port: 3000,
        // host: '0.0.0.0',
        inline: true,
        hot: true,
        historyApiFallback: {
            index: '/src/index.html'
        },
        publicPath: '/src/index.html',
        contentBase: './'
    }

};

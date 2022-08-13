const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCss = require('mini-css-extract-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
              test: /\.vue$/,
              loader: 'vue-loader'
            },
            { test: /\.svg$/, use: 'svg-inline-loader' },
            { test: /\.scss$/, use: [
                miniCss.loader,
                'css-loader',
                'sass-loader',
             ]},
            { test: /\.(js)$/, use: 'babel-loader' }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: false,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),
        new miniCss({
            filename: 'style.css',
         }),
        new VueLoaderPlugin(),
    ],
}
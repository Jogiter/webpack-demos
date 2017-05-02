const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');

module.exports = {
    devtool: 'cheap-eval-source-map',
    entry: {
        app: ['./src/main.js']
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build'),
        publicPath: './'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            }
        }, {
            test: /\.css$/,
            use: [
                "style-loader",
                "css-loader"
            ]
        }, {
            test: /\.(png|jpg|gif|svg)$/,
            use: [{
                loader: "url-loader",
                options: {
                    limit: 10240
                }
            }]
        }, {
            test: /\.scss/,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader"
            ]
        }, {
            test: /\.vue/,
            loader: 'vue-loader'
        }, {
            test: /\.pug/,
            loader: 'pug-loader'
        }, {
            test: /\.html/,
            loader: 'html-loader'
        }, {
            test: /\.tpl/,
            loader: 'raw-loader'
        }, {
            test: require.resolve('zepto'),
            loader: 'exports-loader?window.Zepto!script-loader'
        }, {
            test: require.resolve('jquery'),
            loader: 'exports-loader?window.jQuery!script-loader'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            chunks: ['app'],
            hash: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'build'), // 和path对应
        publicPath: './',
        compress: true,
        hot: true,
        inline: true,
    }
}

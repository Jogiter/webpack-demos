var webpack = require('webpack'),
    path = require('path');
module.exports = {
    entry: {
        index: "./js/page1",
        test: ["./js/entry1", "./js/entry2"],
        commons: ['./bower_components/jquery/dist/jquery.min']
    },
    output: {
        path: path.resolve(__dirname, 'assets'),
        publicPath: './assets/',
        filename: "[name].js",
        // chunkFilename: "chunk[id].js"
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: "css"
        }, {
            test: /\.(png|jp(e)?g)$/,
            loader: 'url-loader?limit=18192'
        }, {
            test: /\.scss/,
            loader: 'style!css!sass'
        }, {
            test: /\.vue/,
            loader: 'vue'
        }, {
            test: /\.pug/,
            loader: 'pug'
        }]
    },
    plugins: [new webpack.optimize.CommonsChunkPlugin({
        name: "commons",
        // (the commons chunk name)
        filename: "commons.js",
        // (the filename of the commons chunk)

        // minChunks: 3,
        // (Modules must be shared between 3 entries)

        // chunks: ["pageA", "pageB"],
        // (Only use these entries)
    })]
};
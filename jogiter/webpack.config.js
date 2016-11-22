var webpack = require('webpack'),
    path = require('path');
module.exports = {
    entry: {
        index: "./js/page1",
        test: ["./js/entry1", "./js/entry2"],
        commons: ['./bower_components/jquery/jquery.js']
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
            loader: "style-loader!css-loader"
        }, {
            test: /\.(png|jp(e)?g)$/,
            loader: 'url-loader?limit=18192'
        }, {
            test: /\.scss/,
            loader: 'style-loader!css-loader!sass-loader'
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
            test: require.resolve('./bower_components/jquery/jquery.js'), // [全局定义jQuery](https://github.com/webpack/imports-loader)
            loader: 'imports-loader?this=>window'
        }]
    },
    plugins: [new webpack.optimize.CommonsChunkPlugin({
        name: "commons",
        // (the commons chunk name)
        filename: "[name].js",
        // (the filename of the commons chunk)

        // minChunks: 3,
        // (Modules must be shared between 3 entries)

        // chunks: ["pageA", "pageB"],
        // (Only use these entries)
    })]
};
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');
var compiler = webpack(config);

config.entry.app.unshift("webpack-dev-server/client?http://localhost:8080/");
var server = new WebpackDevServer(compiler, config.devServer);

server.listen(8080);

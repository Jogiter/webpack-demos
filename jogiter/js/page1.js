require('es5-shim');
var css = require('../sass/index.scss');

// require('../bower_components/jquery/jquery.js');
var a = require('../component/a/a.js');
console.log(a, a.msg);
a.sayHi();


// var test = require('imports-loader?$=../bower_components/jquery/jquery!./test.js');
var test = require('./jQplugin.js');
$('p').test();


$('.container p').css('color', 'yellow');

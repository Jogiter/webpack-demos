var css = require('../sass/index.scss');

// require.ensure(['../bower_components/zepto/zepto.min.js'], function($) {
// 	console.log('this is index page');
// 	$('body').css('color', 'yellow');
// });
require(['../bower_components/zepto/zepto.min.js'], function(require) {
	var $ = require('../bower_components/zepto/zepto.min.js');
	console.log('this is index page');
	$('body').css('color', 'yellow');
});
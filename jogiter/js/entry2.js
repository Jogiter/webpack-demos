// require.ensure(['../bower_components/zepto/zepto.min.js'], function($) {
// 	console.log('this is test page');
// 	$('body').css('color', 'green');
// });
require(['../bower_components/zepto/zepto.min.js'], function(require) {
	var $ = require('../bower_components/zepto/zepto.min.js');
	console.log('this is test page');
	$('body').css('color', 'green');
});
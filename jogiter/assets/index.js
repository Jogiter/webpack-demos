webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var css = __webpack_require__(1);

	// require.ensure(['../bower_components/zepto/zepto.min.js'], function($) {
	// 	console.log('this is index page');
	// 	$('body').css('color', 'yellow');
	// });
	__webpack_require__.e/* require */(1, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(6)]; (function(require) {
		var $ = __webpack_require__(6);
		console.log('this is index page');
		$('body').css('color', 'yellow');
	}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/.npminstall/css-loader/0.24.0/css-loader/index.js!./../node_modules/.npminstall/sass-loader/4.0.0/sass-loader/index.js!./index.scss", function() {
				var newContent = require("!!./../node_modules/.npminstall/css-loader/0.24.0/css-loader/index.js!./../node_modules/.npminstall/sass-loader/4.0.0/sass-loader/index.js!./index.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "body {\n  max-width: 750px;\n  margin: 0 auto;\n  background-color: #efe; }\n  body .container {\n    padding: 15px;\n    border: 1px solid #eee; }\n  body .container .img-list {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between; }\n  body .container .logo {\n    width: 100%;\n    height: 200px;\n    background: url(" + __webpack_require__(4) + ");\n    background-size: cover; }\n", ""]);

	// exports


/***/ },
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "9726b3e4de20196a1f7382ff32b61883.jpg";

/***/ }
]);
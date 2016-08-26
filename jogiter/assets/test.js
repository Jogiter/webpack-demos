webpackJsonp([2],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(7);
	module.exports = __webpack_require__(11);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var css = __webpack_require__(8);

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(9);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/.npminstall/css-loader/0.24.0/css-loader/index.js!./../node_modules/.npminstall/sass-loader/4.0.0/sass-loader/index.js!./test.scss", function() {
				var newContent = require("!!./../node_modules/.npminstall/css-loader/0.24.0/css-loader/index.js!./../node_modules/.npminstall/sass-loader/4.0.0/sass-loader/index.js!./test.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "body {\n  max-width: 750px;\n  margin: 0 auto;\n  background-color: yellow; }\n  body .container {\n    padding: 15px;\n    border: 1px solid #eee; }\n  body .container .img-list {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-around; }\n  body .container .logo {\n    width: 100%;\n    height: 200px;\n    background: url(" + __webpack_require__(10) + ");\n    background-size: contain; }\n", ""]);

	// exports


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "0fe185b409ab8053e1ad58930d6c880b.jpg";

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// require.ensure(['../bower_components/zepto/zepto.min.js'], function($) {
	// 	console.log('this is test page');
	// 	$('body').css('color', 'green');
	// });
	__webpack_require__.e/* require */(1/* duplicate */, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(6)]; (function(require) {
		var $ = __webpack_require__(6);
		console.log('this is test page');
		$('body').css('color', 'green');
	}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});

/***/ }
]);
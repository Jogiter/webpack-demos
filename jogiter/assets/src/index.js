webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3);
	var css = __webpack_require__(4);

	// require('../bower_components/jquery/jquery.js');
	var a = __webpack_require__(9);
	console.log(a, a.msg);
	a.sayHi();


	// var test = require('imports-loader?$=../bower_components/jquery/jquery!./test.js');
	var test = __webpack_require__(13);
	$('p').test();


	$('.container p').css('color', 'yellow');


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(5);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/.0.24.0@css-loader/index.js!./../node_modules/.4.0.2@sass-loader/index.js!./index.scss", function() {
				var newContent = require("!!./../node_modules/.0.24.0@css-loader/index.js!./../node_modules/.4.0.2@sass-loader/index.js!./index.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, "body {\n  max-width: 750px;\n  margin: 0 auto;\n  background-color: #efe; }\n  body .container {\n    padding: 15px;\n    border: 1px solid #eee; }\n  body .container .img-list {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between; }\n  body .container .logo {\n    width: 100%;\n    height: 200px;\n    background: url(" + __webpack_require__(7) + ");\n    background-size: cover; }\n", ""]);

	// exports


/***/ },
/* 6 */,
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "9726b3e4de20196a1f7382ff32b61883.jpg";

/***/ },
/* 8 */,
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var css = __webpack_require__(10);
	var html = __webpack_require__(12);

	$('body').append(html);

	module.exports = {
	    msg: 'this is a hello',
	    sayHi: function() {
	        alert(this.msg);
	    }
	};


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(11);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.0.24.0@css-loader/index.js!./../../node_modules/.4.0.2@sass-loader/index.js!./a.scss", function() {
				var newContent = require("!!./../../node_modules/.0.24.0@css-loader/index.js!./../../node_modules/.4.0.2@sass-loader/index.js!./a.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, ".a.hide {\n  display: none; }\n\n.a h2 {\n  color: red;\n  background-color: #efa; }\n\n.a p {\n  background-color: #000;\n  color: #fff; }\n", ""]);

	// exports


/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "<div class=\"a\">\n    <h2>this is component A</h2>\n    <hr>\n    <p>面代码中，输出的counter属性实际上是一个取值器函数。现在再执行main.js，就可以正确读取内部变量counter的变动了</p>\n</div>\n";

/***/ },
/* 13 */
/***/ function(module, exports) {

	;(function($) {
	    'use strict';

	    function test() {
	        console.log('this is jquery-plugin: test');
	    };

	    $.fn.test = function() {
	        return this.each(function() {
	            test();
	        });
	    };
	})(jQuery);

/***/ }
]);
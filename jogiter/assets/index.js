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
/***/ function(module, exports) {

	module.exports = "data:image/jpeg;base64,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"

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
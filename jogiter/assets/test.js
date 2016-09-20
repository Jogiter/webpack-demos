webpackJsonp([2],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(8);
	module.exports = __webpack_require__(12);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var css = __webpack_require__(9);

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(10);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "body {\n  max-width: 750px;\n  margin: 0 auto;\n  background-color: yellow; }\n  body .container {\n    padding: 15px;\n    border: 1px solid #eee; }\n  body .container .img-list {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-around; }\n  body .container .logo {\n    width: 100%;\n    height: 200px;\n    background: url(" + __webpack_require__(11) + ");\n    background-size: contain; }\n", ""]);

	// exports


/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCADcANwDASIAAhEBAxEB/8QAHAABAQACAwEBAAAAAAAAAAAAAAEEBwUGCAMC/8QAMhABAAEEAQIEBAQFBQAAAAAAAAECAwQFEQYSITFBUQcTFGEicYGRIzKhscEzQlNy8f/EABoBAQEAAwEBAAAAAAAAAAAAAAABAgMGBAX/xAAmEQEAAgIABQIHAAAAAAAAAAAAAQIDEQQFITFxEhMiQVFhkaHh/9oADAMBAAIRAxEAPwDfQDwswAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHC7fq3R6K78nYbC3bveH8KmJrqj84jnhJnTPHjvkn00jc/Zm7ba4ml1t7PzbnZYtRzPHjMz6REeszLX+q+LlrJ28WNhgU4uHcq7ab1Nyapt+01Rx5e8x5Pr8Stnj7bonHytbk28jEnLp+ZVbnnjwniJ9vH0n7NPNV7zE9HScq5Vhz4LWzR8UzMeP75eqIqiYiY8Yn1Xl13oXKuZnROqu3apqriz2TM+vbM0x/SIdhbYlzuXH7eS1J+UzH4Xk5QGvS8nKAaXk5QDS8nKAaXk5QDSgKgAAAAAAAAAA82dTY+TjdRZ1vLuzcv/OqmqqfXxekblyi1bquXK6aKKY5qqqniIj7y1n1hnfDnd5XOd1Hh2M63HbN7GuxXPHtVxExP92F6Tbs+ryjjqcJlmcnaWrsXPv4lnJsUVc2cmjsu26v5avWJ/OJ8YljREzVEREzVM8REesu66To/pvqTKrx9P1pi5VymO6bdNji5x79s1Rz+jkbvS2t6G6n0d7YZeRsPqsj5WNYt4kx3XvCKeaue2IiZ58fb14a/avvWnSW5zwVYm1LbnxPX9Nl9MayvT9M67Auf6lmzEVx7VT4z/WZcsDc4q95vabz3nqADAAAAAAAABQFQAAAAAAAAYe22eNptTlbLMr7MfGtVXbkx58RHlH3nyZjVPx62OXZ6NwtXgxcqv7LNptTbtxM1XKYiZ7YiPPme1axudI0R1x8Qdz1ts7t3LyLlrAir+BhUVz8u3T6cx/uq95n+zrNfP0lvt/k7p7v+3/n+WRkaPbYtc0ZGszbNUTxNNzHrpmP3h98LRb/ACKuMHVbG7M/8WNXVz+0PZGoYpqNnd0GywtpjfMozce7Tet1d3EcRP8AmOY49pex8y7rd1pdXsqpprsVZGLlY1Uz5VVVU9kx9/xcfq8j9OYdmz1zia3qPGuU2buR9Jl27v4a7ff+Dnx8qqZmJ+3DfvTHwn3el3OFRm9VXcvQa7I+oxcGKao5rjmae6JniOJnnw58fZqy6+qw2wA8zMAAAAAAAAABQFQAAAAAAAAaq+MfSvUnVGR0/ToMOb1OLcu3LtyL1Nv5cz2xTPjMe0+TaotZ1O0cfpI2dOlw6dxNqdjTappyJs1c0VVx4TMeXn5/qz/1n9wSZVpTqH4BVbXqS9sMLfzj2L92u/XTdszXcprqqmqeJiYiY5n18fzbpt01UWqKa6++qKYiauOOZ936Ftabd0AGLIAAAAAAAAABQFQAAAAAAAAABAEAAAAUAAAAAAAAABQFQAAAAAAAAABAEAAAAUAAAAAAAAABQFQAAAAAAAAABAEAAAAUAAAAAAAAABQFQAAAAAAAAABAEAAAAUAAAAAAAAABQFQAAAAAAAAABAEAAAAUAAAAAAAAAB//2Q=="

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	!/* require.ensure */(function(require) {
	    var c = __webpack_require__(1);
	    c('body').css('color', 'green');
	}(__webpack_require__));

/***/ }
]);
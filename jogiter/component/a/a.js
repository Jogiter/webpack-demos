var css = require('./a.scss');
var html = require('./a.html');

$('body').append(html);

module.exports = {
    msg: 'this is a hello',
    sayHi: function() {
        alert(this.msg);
    }
};

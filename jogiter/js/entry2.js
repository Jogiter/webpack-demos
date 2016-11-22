require.ensure(['../bower_components/jquery/jquery.js'], function(require) {
    var c = require('../bower_components/jquery/jquery.js');
    jQuery('body').css('color', 'green');
});
require.ensure(['../bower_components/jquery/dist/jquery.min'], function(require) {
    var c = require('../bower_components/jquery/dist/jquery.min');
    c('body').css('color', 'green');
});
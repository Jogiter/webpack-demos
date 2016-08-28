var css = require('../sass/index.scss');

require.ensure(['../bower_components/jquery/dist/jquery.min'], function(require) {
    var c = require('../bower_components/jquery/dist/jquery.min');
    c('body').css('color', 'yellow');
});
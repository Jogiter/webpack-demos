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
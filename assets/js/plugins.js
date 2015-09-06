// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function() {};
    var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
} ());

// Place any jQuery/helper plugins in here.

/* Scroll to top */
(function($) {
    $.fn.scrollToTop = function(options) {
        var config = {
            "speed": 400
        };

        if (options) {
            $.extend(config, {
                "speed": options
            });
        }

        return this.each(function() {

            var $this = $(this);
            var $parent = $this.parent();

            $parent.scroll(function() {
                if ($(this).scrollTop() > 100) {
                    $this.fadeIn();
                } else {
                    $this.fadeOut();
                }
            });

            $this.click(function(e) {
                e.preventDefault();
                $parent.animate({
                    scrollTop: 100
                },
                config.speed);
            });

        });
    };
})(jQuery);
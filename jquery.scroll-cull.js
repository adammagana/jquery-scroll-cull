/**
 * jQuery Plugin - Scroll Cull
 * 
 * @author Adam Magaña
 * @since March 1st, 2012
 * @see http://docs.jquery.com/Plugins/Authoring
 */
(function(window, $, undefined) {
    var pluginName = 'cull',
        defaults = {
            chunks:5,
            buffer:100,
            reveal:$.noop
        };

    $.fn[pluginName] = function(options) {
        // Merge defaults with user options into a settings object
        var settings = (typeof options === "object") ? $.extend({}, defaults, options) : defaults;

        // Calculate dimensions of scrollable area
        var elem = $(this),
            cullIndex = 0,
            dim = {
                width:elem.innerWidth(),
                height:elem.innerHeight(),
                scroll:elem.scrollTop(),
                contentHeight:0,
            };

        // Calculates the total height of all the children of `this`
        function getContentHeight() {
            var heightTotal = 0;
            elem.children().each(function(i) {
                heightTotal += $(this).outerHeight(true);
            });
            return heightTotal;
        }

        // Load initial, viewable content
        while(true) {
            if(getContentHeight() < dim.height) {
                var newDom = settings.reveal.apply(this, [cullIndex]);
                elem.append(newDom);
                cullIndex++;
            }else {
                break;
            }
        }

        // Bind scroll event to culling
        $(this).on('scroll', function() {
            // Grab scroll position
            var newScroll = $(this).scrollTop();

            // Detect scroll direction
            if(newScroll > dim.scroll) {
                // User scrolled down
                if((getContentHeight() - (newScroll + dim.height)) <= settings.buffer) {
                    for(var i = 0;i < settings.chunks;i++) {
                        var newDom = settings.reveal.apply(this, [cullIndex]);
                        elem.append(newDom);
                        cullIndex++;
                    }
                }
            }else {
                // User scrolled up
            }

            // Store new scroll position
            dim.scroll = newScroll;
        });

        // Detect window resize and handle accordingly
        $(window).resize(function() {
            dim = {
                width:elem.innerWidth(),
                height:elem.innerHeight(),
                scroll:elem.scrollTop()
            };
        });
    };
})(window, jQuery);
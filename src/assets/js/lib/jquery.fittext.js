/*global jQuery */
/*!
 * FitText.js 1.2
 *
 * Copyright 2011, Dave Rupert http://daverupert.com
 * Released under the WTFPL license
 * http://sam.zoy.org/wtfpl/
 *
 * Date: Thu May 05 14:23:00 2011 -0600
 */

(function($) {

    $.fn.fitText = function(kompressor, options) {

        // Setup options
        var compressor = kompressor || 1,
            settings = $.extend({
                'minFontSize': Number.NEGATIVE_INFINITY,
                'maxFontSize': Number.POSITIVE_INFINITY
            }, options);

        return this.each(function() {

            // Store the object
            var $this = $(this);

            // Resizer() resizes items based on the object width divided by the compressor * 10
            var resizer = function() {
                $this.css('font-size', Math.max(Math.min($this.width() / (compressor * 10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
            };

            // Call once to set.
            resizer();

            // Call on resize. Opera debounces their resize by default.
            $(window).on('resize.fittext orientationchange.fittext', resizer);

        });

    };

})(jQuery);

/* Lettering.JS 0.6.1 by Dave Rupert  - http://daverupert.com */
(function($) {
    function injector(t, splitter, klass, after) { var a = t.text().split(splitter),
            inject = ''; if (a.length) { $(a).each(function(i, item) { inject += '<span class="' + klass + (i + 1) + '">' + item + '</span>' + after });
            t.empty().append(inject) } } var methods = { init: function() { return this.each(function() { injector($(this), '', 'char', '') }) }, words: function() { return this.each(function() { injector($(this), ' ', 'word', ' ') }) }, lines: function() { return this.each(function() { var r = "eefec303079ad17405c889e092e105b0";
                injector($(this).children("br").replaceWith(r).end(), r, 'line', '') }) } };
    $.fn.lettering = function(method) { if (method && methods[method]) { return methods[method].apply(this, [].slice.call(arguments, 1)) } else if (method === 'letters' || !method) { return methods.init.apply(this, [].slice.call(arguments, 0)) }
        $.error('Method ' + method + ' does not exist on jQuery.lettering'); return this } })(jQuery);
/*
 * textillate.js 
 */

(function($) {
    "use strict";

    function isInEffect(effect) {
        return /In/.test(effect) || $.inArray(effect, $.fn.textillate.defaults.inEffects) >= 0;
    }

    function isOutEffect(effect) {
        return /Out/.test(effect) || $.inArray(effect, $.fn.textillate.defaults.outEffects) >= 0;
    }


    function stringToBoolean(str) {
        if (str !== "true" && str !== "false") return str;
        return (str === "true");
    }

    // custom get data api method
    function getData(node) {
        var attrs = node.attributes || [],
            data = {};

        if (!attrs.length) return data;

        $.each(attrs, function(i, attr) {
            var nodeName = attr.nodeName.replace(/delayscale/, 'delayScale');
            if (/^data-in-*/.test(nodeName)) {
                data.in = data.in || {};
                data.in[nodeName.replace(/data-in-/, '')] = stringToBoolean(attr.nodeValue);
            } else if (/^data-out-*/.test(nodeName)) {
                data.out = data.out || {};
                data.out[nodeName.replace(/data-out-/, '')] = stringToBoolean(attr.nodeValue);
            } else if (/^data-*/.test(nodeName)) {
                data[nodeName.replace(/data-/, '')] = stringToBoolean(attr.nodeValue);
            }
        })

        return data;
    }

    function shuffle(o) {
        for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    }

    function animate($t, effect, cb) {
        $t.addClass('animated ' + effect)
            .css('visibility', 'visible')
            .show();

        $t.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $t.removeClass('animated ' + effect);
            cb && cb();
        });
    }

    function animateTokens($tokens, options, cb) {
        var count = $tokens.length;

        if (!count) {
            cb && cb();
            return;
        }

        if (options.shuffle) $tokens = shuffle($tokens);
        if (options.reverse) $tokens = $tokens.toArray().reverse();

        $.each($tokens, function(i, t) {
            var $token = $(t);

            function complete() {
                if (isInEffect(options.effect)) {
                    $token.css('visibility', 'visible');
                } else if (isOutEffect(options.effect)) {
                    $token.css('visibility', 'hidden');
                }
                count -= 1;
                if (!count && cb) cb();
            }

            var delay = options.sync ? options.delay : options.delay * i * options.delayScale;

            $token.text() ?
                setTimeout(function() { animate($token, options.effect, complete) }, delay) :
                complete();
        });
    }

    var Textillate = function(element, options) {
        var base = this,
            $element = $(element);

        base.init = function() {
            base.$texts = $element.find(options.selector);

            if (!base.$texts.length) {
                base.$texts = $('<ul class="texts"><li>' + $element.html() + '</li></ul>');
                $element.html(base.$texts);
            }

            base.$texts.hide();

            base.$current = $('<span>')
                .html(base.$texts.find(':first-child').html())
                .prependTo($element);

            if (isInEffect(options.in.effect)) {
                base.$current.css('visibility', 'hidden');
            } else if (isOutEffect(options.out.effect)) {
                base.$current.css('visibility', 'visible');
            }

            base.setOptions(options);

            base.timeoutRun = null;

            setTimeout(function() {
                base.options.autoStart && base.start();
            }, base.options.initialDelay)
        };

        base.setOptions = function(options) {
            base.options = options;
        };

        base.triggerEvent = function(name) {
            var e = $.Event(name + '.tlt');
            $element.trigger(e, base);
            return e;
        };

        base.in = function(index, cb) {
            index = index || 0;

            var $elem = base.$texts.find(':nth-child(' + ((index || 0) + 1) + ')'),
                options = $.extend(true, {}, base.options, $elem.length ? getData($elem[0]) : {}),
                $tokens;

            $elem.addClass('current');

            base.triggerEvent('inAnimationBegin');
            $element.attr('data-active', $elem.data('id'));

            base.$current
                .html($elem.html())
                .lettering('words');

            // split words to individual characters if token type is set to 'char'
            if (base.options.type == "char") {
                base.$current.find('[class^="word"]')
                    .css({
                        'display': 'inline-block',
                        'color': '#330000',
                        // fix for poor ios performance
                        '-webkit-transform': 'translate3d(0,0,0)',
                        '-moz-transform': 'translate3d(0,0,0)',
                        '-o-transform': 'translate3d(0,0,0)',
                        'transform': 'translate3d(0,0,0)'
                    })
                    .each(function() { $(this).lettering() });
            }

            $tokens = base.$current
                .find('[class^="' + base.options.type + '"]')
                .css('display', 'inline-block');

            if (isInEffect(options.in.effect)) {
                $tokens.css('visibility', 'hidden');
            } else if (isOutEffect(options.in.effect)) {
                $tokens.css('visibility', 'visible');
            }

            base.currentIndex = index;

            animateTokens($tokens, options.in, function() {
                base.triggerEvent('inAnimationEnd');
                if (options.in.callback) options.in.callback();
                if (cb) cb(base);
            });
        };

        base.out = function(cb) {
            var $elem = base.$texts.find(':nth-child(' + ((base.currentIndex || 0) + 1) + ')'),
                $tokens = base.$current.find('[class^="' + base.options.type + '"]'),
                options = $.extend(true, {}, base.options, $elem.length ? getData($elem[0]) : {})

            base.triggerEvent('outAnimationBegin');

            animateTokens($tokens, options.out, function() {
                $elem.removeClass('current');
                base.triggerEvent('outAnimationEnd');
                $element.removeAttr('data-active');
                if (options.out.callback) options.out.callback();
                if (cb) cb(base);
            });
        };

        base.start = function(index) {
            setTimeout(function() {
                base.triggerEvent('start');

                (function run(index) {
                    base.in(index, function() {
                        var length = base.$texts.children().length;

                        index += 1;

                        if (!base.options.loop && index >= length) {
                            if (base.options.callback) base.options.callback();
                            base.triggerEvent('end');
                        } else {
                            index = index % length;

                            base.timeoutRun = setTimeout(function() {
                                base.out(function() {
                                    run(index)
                                });
                            }, base.options.minDisplayTime);
                        }
                    });
                }(index || 0));
            }, base.options.initialDelay);
        };

        base.stop = function() {
            if (base.timeoutRun) {
                clearInterval(base.timeoutRun);
                base.timeoutRun = null;
            }
        };

        base.init();
    }

    $.fn.textillate = function(settings, args) {
        return this.each(function() {
            var $this = $(this),
                data = $this.data('textillate'),
                options = $.extend(true, {}, $.fn.textillate.defaults, getData(this), typeof settings == 'object' && settings);

            if (!data) {
                $this.data('textillate', (data = new Textillate(this, options)));
            } else if (typeof settings == 'string') {
                data[settings].apply(data, [].concat(args));
            } else {
                data.setOptions.call(data, options);
            }
        })
    };

    $.fn.textillate.defaults = {
        selector: '.texts',
        loop: false,
        minDisplayTime: 2000,
        initialDelay: 0,
        in: {
            effect: 'fadeInLeftBig',
            delayScale: 1.5,
            delay: 50,
            sync: false,
            reverse: false,
            shuffle: false,
            callback: function() {}
        },
        out: {
            effect: 'hinge',
            delayScale: 1.5,
            delay: 50,
            sync: false,
            reverse: false,
            shuffle: false,
            callback: function() {}
        },
        autoStart: true,
        inEffects: [],
        outEffects: ['hinge'],
        callback: function() {},
        type: 'char'
    };

}(jQuery));
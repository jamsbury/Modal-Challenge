// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Modal Functionality (Vanilla JS)
$( document ).ready(function() {

    // multi-purpose click event trigger
    $('.trigger').click(function() {

        // toggle classes
        $('.modal-wrapper').toggleClass('open');
        $('.page-wrap').toggleClass('underlay');
        return false;
    });
  });

// Error check, if this prints everything is fine!
console.log(
    "Spill and heat consume both of the lights / They were flashing white and ecru pale / Gradually they lost our information / Sickly and ungracious, you turn to dirt"
    );
(function ($) {
    var headerHeight = 80;

    function smoothScrollTo(targetId) {
        var $target = $(targetId);
        if ($target.length) {
            $('html, body').animate({
                scrollTop: $target.offset().top - headerHeight
            }, 700);
        }
    }

    $('.scroll-btn').on('click', function (e) {
        e.preventDefault();
        var target = $(this).data('target') || $(this).attr('href');
        if (target && typeof target === 'string' && target.indexOf('#') === 0) {
            smoothScrollTo(target);
        }
    });

    $('.nav-link[href^="#"], .nav-link-footer[href^="#"]').on('click', function (e) {
        var href = $(this).attr('href');
        if (href && href !== '#') {
            e.preventDefault();
            smoothScrollTo(href);
            var $menu = $('#menu');
            if ($menu.hasClass('show')) {
                $menu.collapse('hide');
            }
        }
    });
})(jQuery);

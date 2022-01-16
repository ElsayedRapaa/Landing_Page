$(function() {

    let the_Header = $('.header'),
        bx_Slider = $('.bxslider'),
        up = $('.up'),
        the_Window = $('html, body');

    up.on('click', function() {

        the_Window.animate({
            scrollTop: 0,
        }, 1000);

    });


    the_Header.height($(window).height());

    $(window).on('resize', function() {

        the_Header.height($(window).height());

        bx_Slider.each(function() {

            $(this).css({
                paddingTop: ($(window).height() - $('.bxslider li').height()) / 2,
            });

        });

    });

    let the_Links = $('.links a');

    $(window).on('scroll', function() {

        let scrollTop = $(window).scrollTop();

        if (scrollTop > 300) {

            up.slideDown();

        } else {

            up.slideUp();

        };

    });

    the_Links.on('click', function(e) {

        e.preventDefault();

        $(this).addClass('active').siblings().removeClass('active');

        $(this).each(function() {

            the_Window.animate({
                scrollTop: $(`#${$(this).data('section')}`).offset().top,
            }, 1000);

        });

    });

    bx_Slider.each(function() {

        $(this).css({
            paddingTop: ($(window).height() - $('.bxslider li').height()) / 2,
        });

    });

    bx_Slider.bxSlider({
        pager: false,
    });

    $('.images .box').each(function() {

        $(this).hover(() => {

            $(this).find('.overlay').slideToggle(300);

        });

    });

    (function autoSlider() {

        $('.slider .active').each(function() {

            if (!$(this).is(':last-child')) {

                $(this).delay(3000).fadeOut(1000, function() {

                    $(this).removeClass('active').next().addClass('active').fadeIn();

                    autoSlider();

                });

            } else {

                $(this).delay(3000).fadeOut(1000, function() {

                    $(this).removeClass('active');

                    $('.slider div').eq(0).addClass('active').fadeIn();

                    autoSlider();

                });

            };

        });

    }());

    $('.gallary .box').each(function() {

        $(this).hover(() => {

            $(this).find('.overlay').slideToggle();

        });

    });

    $('.portfolio ul li').on('click', function() {

        $(this).addClass('active').siblings().removeClass('active');

    })

    $.autofilter({
        duration: '2000',
    });

    $("html").niceScroll({
        cursorcolor: up.css('backgroundColor'),
        cursorwidth: '12px',
        cursorborder: 'none',
        cursorborderradius: 0,
    });



});
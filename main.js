$(document).ready(function () {
    $('.menu-toggler').on('click', function(){
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', function(){
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });

    $('#up').on('click', function(){
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
    });

    $('[data-aos]').parent().addClass('hideOverflowOnMobile');

    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true
    });
});

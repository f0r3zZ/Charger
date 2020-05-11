(function($){
    $(window).on("load",function(){
        $(".charger__descr").mCustomScrollbar({
        });

        $('.review-slider').slick({
            slidesToShow: 1,
            prevArrow: $('.arrowLeft'),
            nextArrow: ('.arrowRight')
        });

        $('.burger').on('click', function() {
            $('.header__nav').toggleClass('menuShow');
        });
        $('.burger').on('click', function() {
            $('.burger').toggleClass('burgerTransform');
        });
    });
})(jQuery);
$(document).ready(function(){
    $('.bxslider').bxSlider({
        mode: 'horizontal',     // тип перехода между слайдами может быть 'horizontal', 'vertical', 'fade'
        controls: true,         // отображение стрелки - вперед, назад
        startSlide: 0,          // Показ начнется с заданного слайда
        infiniteLoop: true,     // показывать первый слайд за последним
        pager: true,            // показ номера страницы
        auto: true,            // сделать автоматический переход
        autoControls: false,    // показывает кнопку плей и стоп
        pause: 4000,            // время между сменой слайдов в м-сек
        speed: 1000,            // длительность перехода слайда в м-сек
        adaptiveHeight: true
    });


    $(".fa-bars").click(function() {
        $(".navbar-nav").slideToggle("slow");
    });

    $('input, textarea').placeholder();
});


jQuery(window).resize(function(){
    jQuery(".mobileMenu .navbar-nav").hide();
});
jQuery(window).resize();
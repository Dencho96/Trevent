$( ".header__phone-btn" ).click(function() {
    $( ".header__phone-drop" ).slideToggle(function() {
    });
  });

$( ".header__lang-current" ).click(function() {
    $( ".header__lang-drop" ).fadeToggle(function() {
    });
});

var heroSlider = new Swiper('.hero__slider', {
    speed: 400,
    spaceBetween: 100,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    }
});

var partnersSlider = new Swiper('.partners__slider', {
    speed: 400,
    spaceBetween: 100,
    slidesPerView: 4,
    loop: "true",
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    }
});
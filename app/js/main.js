$( ".header__phone-btn" ).click(function() {
    $( ".header__phone-drop" ).slideToggle(function() {
    });
  });

$( ".header__lang-current" ).click(function() {
    $( ".header__lang-drop" ).fadeToggle(function() {
    });
});

var mySwiper = new Swiper('.swiper-container', {
    speed: 400,
    spaceBetween: 100,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    }
});
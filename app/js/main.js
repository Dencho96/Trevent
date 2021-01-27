$(".header__phone-btn").click(function () {
    $(".header__phone-drop").slideToggle(function () {});
});

$(".header__lang-current").click(function () {
    $(".header__lang-drop").fadeToggle(function () {});
});

$(".header__search").click(function () {
    $(".header__search-form").slideToggle(function () {});
});

$(".header__menu").click(function () {
    $(".header__menu").toggleClass("is-active");
});

$('.header__menu').on('click', function () {
    $('.header__box').slideToggle();
    $('.header__box').css('display', 'flex');
});

var heroSlider = new Swiper('.hero__slider', {
    speed: 400,
    spaceBetween: 100,
    loop: "true",
    autoplay: {
        delay: 3000,
    },
    pagination: {
        el: '.hero__pagination',
        type: 'bullets',
    }
});

var partnersSlider = new Swiper('.partners__slider', {
    speed: 400,
    spaceBetween: 100,
    slidesPerView: 4,
    loop: "true",
    navigation: {
        nextEl: '.partners__btn--next',
        prevEl: '.partners__btn--prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1
        },
        576: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 3
        },
        992: {
            slidesPerView: 4
        }
    }
});

$(document).ready(function(){   
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.scroll-top').fadeIn();
        } else {
            $('.scroll-top').fadeOut();
        }
    });
    $('.scroll-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});
new Swiper('.swiper', {
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 3000,
    },
    navigation: {
        nextEl: '.slider__next',
        prevEl: '.slider__prev',
    },
    mousewheel: true,
    keyboard: true,
});

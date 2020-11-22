var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 0,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        50: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        425: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        }
    }
});
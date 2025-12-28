var swiper = new Swiper(".slider-wrapper", {
    spaceBetween: 30,
    grabCursor: true,
    speed: 1000,
    autoplay: {
        delay: 2000,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
    },
});
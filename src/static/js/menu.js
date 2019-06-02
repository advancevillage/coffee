var menu_swiper = new Swiper('.menu_swiper', {
    direction: 'vertical',
    slidesPerView: 1,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
});

var list_item_banner_swiper = new Swiper('.list_item_banner_swiper', {
    slidesPerView: 2,
    slidesPerGroup: 2,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.list_item_banner_pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.list_item_banner_next',
        prevEl: '.list_item_banner_prev',
    },
});

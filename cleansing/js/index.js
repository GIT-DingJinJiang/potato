//<!-- 导航栏 -->
var nav = document.querySelector(".list_rights");
// 节流阀
var flag = true;
nav.addEventListener('click', () => {
    if (flag) {
        nav.className = 'list_rights active';
        flag = false;
    } else {
        nav.className = 'list_rights';
        flag = true;
    }
})
// 轮播
window.addEventListener('load', function () {
    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigtion: {
            nextEl: 'swiper-button-next',
            prevEl: 'swiper-button-prev'
        }
    });
})








//无级变速
window.addEventListener('load', function () {
    var em = () => {
        let width = document.documentElement.clientWidth;/*获取设备的宽度*/
        // 16和640假定数据可随意更改
        let size = (16 * (width / 640) > 40 ? 40 + "px" : (16 * (width / 640) + "px"))
        document.documentElement.style.fontSize = size;
    }
    window.addEventListener("load", em);//初始化
    window.addEventListener("resize", em)/*屏幕发生改变时调佣函数*/
})
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








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





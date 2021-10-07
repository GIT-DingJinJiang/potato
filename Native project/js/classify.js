//1.先查找元素
//1.1;分类
//1.2：口味
var tabAll = document.querySelectorAll('.tabll dd a');
// 1.3:查找所有分类的ul
// 1.3:查找所有口味的ul
var listAll = document.querySelectorAll('.ul_itme');
//2.:给分类添加点击事件
//2.1:遍历classifdd 添加事件
for (var i = 0; i < tabAll.length; i++) {
  //2.2:设置index
  tabAll[i].setAttribute('index', i);
  //2.3：绑定事件
  tabAll[i].addEventListener('click', function () {
    //2.4：利用排他思想，先关闭所有的dd
    for (var i = 0; i < tabAll.length; i++) {
      tabAll[i].className = "";
    }
    //2.5：左后打开我自己
    this.className = 'active'
    //2.6:当前的index 位置
    var index = this.getAttribute('index')
    if (index < 7) {
      tabAll[7].style.color = '#BB9772'
    } else if (index > 7) {
      tabAll[7].style.color = '#684029'
      tabAll[1].className = 'active'
      if (index < 6) {
        tabAll[1].className = ''
      }
    }
    //2.9:如果当前index大于1并且小于7
    if (index > 1 && index < 7) {
      //如果不满足条件就禁用dd
      for (var i = 8; i < tabAll.length; i++) {
        tabAll[i].className = 'disabledflse'
      }
    }
    // if(this.innerHTML==="全部分类" || "蛋糕"){
    //   tabAll[7].style.color='yellow'
    // }else if(this.innerHTML!="全部分类" || "蛋糕"){
    //   tabAll[7].style.color='#684029'
    // }
    //2.7：利用排他思想先关闭所有的ul
    for (var i = 0; i < listAll.length; i++) {
      listAll[i].className = ''
    }
    //2.8：最后打开与dd当前index所对应的ul
    listAll[index].className = 'show'
  })
}
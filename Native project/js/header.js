window.addEventListener('load', function () {
  // 导航栏地区选择
  //1.查找元素
  //找到div ul 
  var Ul = document.querySelector('.selt ul');
  //找到Ul标签下的span
  var Span = document.querySelectorAll('.selt span');

  //找到selt ul li a
  var Li = document.querySelectorAll('.selt ul li a');
  //2.便利li a 
  for (var i = 0; i < Li.length; i++) {
    //给每个li a 绑定事件
    Li[i].addEventListener('click', function () {
      //3.要改变的元素 span
      //把当前的值复制给span
      var SpanHtml = Span[0].innerHTML;
      Span[0].innerHTML = this.innerHTML;
      this.innerHTML = SpanHtml
    })
  };
})
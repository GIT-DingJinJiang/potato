window.addEventListener('load', function () {
  var detailsLeft = document.querySelector('.detailsLeft');
  var detailsRight = document.querySelectorAll('.detailsRight ul li a img');
  var nav_logo = document.querySelector('.nav_logo');
  var nav_pricenown = document.querySelector('.nav_pricenown');
  var nav_price = document.querySelector('.nav_price');
  var fead_car = document.querySelector('.fead_car');
  var gouzi = document.querySelectorAll('.gouzi');
  // 购物车
  var btns = document.querySelectorAll('.shop button');
  var itme1Price = document.querySelector('.itme1 li:first-child')
  var text = document.querySelectorAll('.text li')
  var dd = document.querySelectorAll('dd')
  // 轮播
  for (var i = 0; i < detailsRight.length; i++) {
    detailsRight[0].style.border = '1px solid red';
    detailsRight[i].addEventListener('mouseenter', function () {
      for (var i = 0; i < detailsRight.length; i++) {
        detailsRight[i].style.border = '';
      }
      detailsLeft.src = this.src
      this.style.border = '1px solid red';
    });
  }
  // 隐藏头部
  nav_price.addEventListener('mouseover', function () {
    fead_car.style.display = 'block';
    fead_car.style.transition = 'all 2s';
  })
  nav_pricenown.addEventListener('mouseleave', function () {
    fead_car.style.display = 'none'
  })
  //1：获取元素滚动事件 scroll
  document.addEventListener('scroll', function () {
    //2：window.pageYOffset 页面被卷去的头部
    //3：当我们页面被卷去的头部大于等于了1000，此时显示影藏的头部
    if (window.pageYOffset >= 1000) {
      nav_logo.className = 'toubu block';
    } else if (window.pageYOffset <= 1000) {
      nav_logo.className = 'toubu show';
    }
  })
  //2：重量选择
  this.document.addEventListener('click', function () {

  })
  //购物车按钮
  //1.鼠标移入dd
  gouzi[0].style.display = 'block';
  gouzi[4].style.display = 'block';
  for (var i = 0; i < dd.length; i++) {
    dd[i].addEventListener('click', function () {
      for (var i = 0; i < dd.length; i++) {
        dd[i].style.border = '';

      }
      this.style.border = '0.5px solid red';
      if (i < 5) {

      gouzi[i].style.display = block;
      }
    })
  }
})
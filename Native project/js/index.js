window.addEventListener('load', function () {
  //banne 轮播图 start
  //1.获取元素
  //1.1左右按钮
  var arrowl = document.querySelector('.arrow-l');
  var arrowr = document.querySelector('.arrow-r');
  //1.2轮播图片
  var banner = document.querySelector('.banner')
  var imgList = document.querySelectorAll('.banner ul li');
  //1.3小圆圈
  var ol = banner.querySelector('ol');
  //2.设置一个全局的index，几率当前图片的位置
  var index = 0;
  //3.创建一个定时器
  var timer;
  //4.鼠标经过banner 就显示影藏左右按钮
  banner.addEventListener('mouseenter', function () {
    arrowl.style.opacity = 1;
    arrowr.style.opacity = 1;
    clearInterval(timer);
  })
  //5.鼠标经过时影藏
  banner.addEventListener('mouseleave', function () {
    arrowl.style.opacity = 0;
    arrowr.style.opacity = 0;
    play();
  })
  //6. 点击小圆圈切换图片，自动生成小圆圈
  for (var i = 0; i < imgList.length; i++) {
    //6.1每循环一次创建一个li
    var li = document.createElement('li');
    //6.2把每个li添加到ol里面
    ol.appendChild(li);
  }
  //7.把ol里面第一个li设置类名为on
  ol.children[0].className = 'on';
  //8.查找ol下的li，只能在上面自动创建ol li 之后查找，
  var list = document.querySelectorAll('.banner ol li');
  //9.图片
  function moveImg(list, index) {
    //9.遍历ul li的每一张图片
    for (var i = 0; i < list.length; i++) {
      //9.1排他思想，关闭所有类名为on
      if (list[i].className == 'opa-on') {
        //9.2清楚li的透明样式
        list[i].className = '';
      }
    }
    //9.3最后打开我自己
    list[index].className = 'opa-on';
  }
  //10.移动小圆圈
  function moveIndex(list, num) {//此处的num,也是index,因为全局有一个变量index，num是下面函数体内传进来的，函数体内的num（index）是和图片和小圆圈一样的，所以每次传进来的num(index)，会轮播，改用Index,只会播放到最后一张图片
    for (var i = 0; i < list.length; i++) {
      //10.1清楚li背景样式
      if (list[i].className == 'on') {
        list[i].className = '';
      }
    }
    //10.2显示当前小圆圈加上背景样式
    list[num].className = 'on'
  }
  //11.点击左右侧按钮，切换图片
  //声明一个变量，作为节流阀开关；
  var flag = true;
  arrowl.addEventListener('click', function () {
    if (flag) {
      flag = false;
      index--;
      if (index < 0) {
        index = imgList.length - 1
      }
      //11.1图片函数
      moveImg(imgList, index);
      //11.2 小圆圈函数
      moveIndex(list, index);
      //写一个定时器函数，让flag 一秒之后变为true;
      setTimeout(function () {
        flag = true;
      }, 1000)
    }
  })
  //12右侧按钮
  arrowr.addEventListener('click', function () {
    if (flag) {
      flag = false
      index++;
      if (index >= imgList.length) {
        index = 0
      }
      moveImg(imgList, index);
      moveIndex(list, index);
      setTimeout(function () {
        flag = true;
      }, 1000)
    }
  })
  //13.鼠标覆盖那个小圆圈，图片就移动到那个小圆圈，并停止
  for (var i = 0; i < list.length; i++) {
    list[i].index = i;
    //13.1鼠标移入
    list[i].onmouseover = function () {
      //13.2当前的index;
      var clickIndex = parseInt(this.index);
      //13.3变量的index等于当前的index
      index = clickIndex;
      moveImg(imgList, index);
      moveIndex(list, index);
      //13.4清楚定时器
      clearInterval(timer)
    };
    //13.5鼠标移出继续轮播
    // list[i].onmouseout = function () {
    //   //13.6自动轮播函数
    //   play();
    // };
  }
  //14,设置小圆圈
  var nextMove = function () {
    //14.1小圆圈和图片的位置加一
    index += 1;
    if (index >= imgList.length) {//动态获取图片个数，
      index = 0;
    }
    moveImg(imgList, index);
    moveIndex(list, index);
  };
  // 15.自动播放
  var play = function () {
    timer = setInterval(function () {
      nextMove();
    }, 3000)
  };
  play();
  //banne 轮播图 end

  //购物车
  //1.购物车显示影藏
  // 加入购物车
  var addBtn = document.querySelector('.addBtn');
  //点击影藏购无车
  var btns = document.querySelector('#d2');
  // 购物车 
  var add = document.querySelector('.add');
  addBtn.addEventListener('focus', function () {
    add.style.display = 'block'
  })
  btns.addEventListener('click', function () {
    add.style.display = 'none'
  })
  //2.勾选价格
  var prices = document.querySelector('.prices span');
  var li = document.querySelectorAll('.gouwuche li');
  var arr = [198, 298, 428, 698];
  // console.log(arr[0])
  for (var i = 0; i <= li.length; i++) {
    // console.log(li[i].children[0])
    li[i].addEventListener('click', function () {
      for (var i = 0; i < li.length; i++) {
        li[i].style.border = '1px solid #D0C3BB';
        li[i].children[2].className = 'gouzi show';
      }
      this.style.border = '0.5px solid red';
      this.children[2].className = 'gouzi block';
      prices.innerHTML = `￥${arr[0]}.00/${this.children[0].innerHTML}${this.children[1].innerHTML}`
      console.log(arr[index])
    })
  }
})
window.addEventListener('load', function () {
  // 添加购物车
  var btnr = document.querySelector('.btns .btnr');
  var addcart = document.querySelector('.addcart');
  var add = document.querySelector('.add');
  btnr.addEventListener('click', function () {
    addcart.className = 'addcart block';
    add.style.display = 'none'
    timerCart()
  })
  var timerCart = setInterval(
    function () {
      addcart.className = 'addcart show';
    }, 3000);
  // 添加购物车-end
  // 页面滚动事件，侧边栏
  //1.获取元素
  var aside = document.querySelector('.aside');
  //页面分类元素
  var newproductAll = document.querySelectorAll('.newproductAll');
  //获取页面的第一块滚动值
  var newproductAllTop = newproductAll[0].offsetTop
  var asideTop = aside.offsetTop - newproductAll[0]
  var goback = document.querySelector('.goback');
  var anchorGoback = document.querySelector('.anchorGoback');
  var anchorGobackTop = anchorGoback.offsetTop
  var li = document.querySelectorAll('.aside ul li');
  //2.页面滚动事件
  document.addEventListener('scroll', function () {
    //window.pageYOffset 页面被减去的头部+
    // console.log(window.pageYOffset)
    //3.当我们页面被滚动的头部大于等于172时，侧边栏纪要改为固定定位
    if (window.pageYOffset >= newproductAllTop) {
      aside.style.position = 'fixed';
      aside.style.top = asideTop+ "px";
    } else {
      aside.style.position = 'absolute';
      // li[0].className='active';
      li[4].className = '';
    }
    if (window.pageYOffset >= anchorGobackTop) {
      goback.style.display = 'block'
    } else {
      goback.style.display = 'none'
    }
  });
  //4.侧边栏切换事件
  for (var i = 0; i < li.length; i++) {
    li[i].addEventListener('click', function () {
      for (var i = 0; i <= li.length; i++) {
        if (li[i].className == 'active') {
          li[i].className = ''
        }
        this.className = 'active';
      }
    })
  }
})
window.addEventListener('load', function () {
  // 页面滚动事件，侧边栏-end
  var newproductAll = document.querySelectorAll('.newproductAll');
  var li = document.querySelectorAll('.aside ul li');
  document.addEventListener('scroll', function () {
    for (var i = 0; i <= newproductAll.length; i++) {
      if (window.pageYOffset >= newproductAll[i].offsetTop) {
        li[i].className = ''
      } else if (window.pageYOffset <= newproductAll[i].offsetTop) {
        li[i].className = 'active'
      }
      if (i >= 4) {
        li[4].className = ''
      }
    }
  });
})

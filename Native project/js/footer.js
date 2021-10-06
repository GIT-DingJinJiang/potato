//鼠标移入显示二维码
var weixiner=document.querySelector('.weixiner');
var weixiner1=document.querySelector('.weixiner1');
var APPer=document.querySelector('.APPer');
var weixiner2=document.querySelector('.weixiner2');
weixiner.addEventListener('mouseenter',function(){
  weixiner1.style.display='block'
})
//鼠标移出影藏二维码
weixiner.addEventListener('mouseleave',function(){
  weixiner1.style.display='none'
})
//鼠标移入显示二维码
APPer.addEventListener('mouseenter',function(){
  weixiner1.style.display='block'
})
//鼠标移出影藏二维码
APPer.addEventListener('mouseleave',function(){
  weixiner1.style.display='none'
})
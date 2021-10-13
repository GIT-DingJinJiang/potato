// 2：封装 obj目标对象， target 目标位置
function anmiates(obj, target, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        //步长值写到定时器里面
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step)
        if (obj.offsetLeft === target) {
            //停止动画 本质是停止定时器
            clearInterval(obj.timer)
            //回调函数写到定时器结束里面
            if (callback) {
                //调佣函数
                callback()
            }
        }
        //（目标值-现在位置）/ 10 做为每次移动的距离步长 step
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15);
}
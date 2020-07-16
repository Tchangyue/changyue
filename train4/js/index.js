//清屏：清除dm中的弹幕内容
$('#clear').click(function () {
    $('#dm').remove();
    //解决清屏时无法再次输入问题.
    window.location.reload();
});

// 创建弹幕
function createDm(text) {
    var dm = $("<div class='bullet'>" + text + "</div>");
    var fontColor = getRandomColor();
    var fontSize = Math.floor((Math.random() + 1) * 24) + "px";
    var right = $(".dm").width() + "px";
    var top = Math.floor(Math.random() * 500) + "px";
    top = parseInt(top) > 600 ? "600px" : top;
    dm.css({
        "position": 'absolute',
        "color": fontColor,
        "font-size": fontSize,
        "right": right,
        "top": top,
        "white-space": 'nowrap'
    });
    $(".dm").append(dm);
    $("#dmText").val("");
    return dm;
}

// Enter按钮监听
$("#dmText").on("keydown", function (event) {
    if (event.keyCode == 13) {
        // 创建弹幕
        var jqueryDom = createDm($("#dmText").val());
        // 添加定时器
        addInterval(jqueryDom);
    }
});


// 点击发送弹幕进行创建弹幕,并且为dm添加定时任务
$(".send").on("click", function () {
    // 创建弹幕m
    var dm = createDm($("#dmText").val());
    // 为弹幕添加定时任务
    addInterval(dm);
});

var isShow = true;// 开启弹幕和关闭弹幕的标识

// 监听关闭弹幕按钮
$(".close").on("click", function () {
    if (isShow) {
        $(".bullet").css("opacity", 0);
        isShow = false;
    } else {
        $(".bullet").css("opacity", 1);
        isShow = true;
    } m
});


//弹幕设置随机颜色
function getRandomColor() {
    return '#' + (function (h) {
        return new Array(7 - h.length).join("0") + h
    }
    )((Math.random() * 0x1000000 << 0).toString(16))
}

var timers = [];// 弹幕定时器

// 为弹幕添加定时任务
function addInterval(dm) {
    var i = 0;
    var speed = Math.floor(Math.random() * 6) + 1;
    var right = dm.offset().right - $(".dm").offset().right;
    var timer = setInterval(function () {
        right--;
        dm.css("right", (i += speed) + "px");
        if (dm.offset().right + dm.width() < $(".dm").offset().right) {
            dm.remove();
            clearInterval(timer);
        }
    }, 10);
    timers.push(timer);
}
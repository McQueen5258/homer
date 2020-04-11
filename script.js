$(".replyYes").click(function() {  
    $(".homers-reply").text("好呀，很好吃");
    // $("body").css("background-image","url(timg.jpeg");
    $("body").css({
    "background-image": "url(timg.jpeg)",
    "background-attachment":"fixed",

    "background-position": "center",
    "background-repeat": "no-repeat",
    "background-size": "cover"
        });
        $("img").attr("src","timg (1).jpeg");
        $("h1").text("吃完还是要运动！");
});

$(".replyNo").click(function() {  
    $(".homers-reply").text("不用了，谢谢");  
    $("body").css("background-color","red"); 
    $("h1").text("all right"); 
    $("img").css("width","300"); 
});


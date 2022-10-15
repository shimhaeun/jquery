$(function(){

    var img_width = $(".mask img").width();
    $("mask").width(img_width);
    var list_len = $(".mask li").length;
    $(".mask ul").width(img_width * list_len);





    $(".pager a").click(function(){
        var idx = $(this).index();

        $(".mask ul").animate({left:-img_width*idx});
    });
        

    $(".pager a:eq(0)").click(function(){
        $(".mask ul").animate({left:img_width*0});
    });
    $(".pager a:eq(1)").click(function(){
        $(".mask ul").animate({left:-img_width*1});
    });
    $(".pager a:eq(2)").click(function(){
        $(".mask ul").animate({left:-img_width*2});
    });
});
$(document).ready(function(){
    //사이트맵
    $("header nav .gnb>li").hover(function(){
        $(".sub").stop().slideDown();
       }, function(){$(".sub").stop().slideUp();
    });
});
    

$(document).ready(function(){
    $("nav .gnb>li").hover(function(){
        $(this).find(".sub").stop().slideDown(300);
    },function(){
        $(this).find(".sub").stop().slideUp(300);
    });
});
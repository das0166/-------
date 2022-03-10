$(document).ready(function(){
    //사이트 맵
    $("header nav .gnb>li").hover(function(){
        $(this).find(".sub").stop().slideDown(); 
    },function(){
        $(this).find(".sub").stop().slideUp(); 
    });
});
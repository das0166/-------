$(document).ready(function(){
    // 헤더
   $("header nav .gnb>li").mouseenter(function(){
    $(".nav_bg, .sub").stop().slideDown();
   });
   $("header nav .gnb>li").mouseleave(function(){
    $(".nav_bg, .sub").stop().slideUp();
   });
});
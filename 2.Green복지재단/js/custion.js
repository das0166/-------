$(document).ready(function(){
    //네이게이션
    $("header nav .gnb>li").mouseenter(function(){
        $(".nav_bg, .sub").stop().slideDown();
    });
    $("header nav .gnb>li").mouseleave(function(){
        $(".nav_bg, .sub").stop().slideUp();
    });
    //슬라이드
    var SlideI=0;
    setInterval(function(){
        if(SlideI<2){
            SlideI++;
        }else{
            SlideI=0;
        }
    $(".slide li").eq(SlideI).siblings().animate({left:"-1200px"},500);
    $(".slide li").eq(SlideI).animate({left:"0"},500);
    },3000);
}); //ready end
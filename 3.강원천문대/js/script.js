$(document).ready(function(){
    //사이트 맵
    $("header nav .gnb>li").hover(function(){
        $(this).find(".sub").stop().slideDown(); 
    },function(){
        $(this).find(".sub").stop().slideUp(); 
    });

    //슬라이더
    $(".slide .slide_pi>li").eq(0).siblings().hide();
    var slideI=0;
    setInterval(function(){
        if(slideI<2){
            slideI++;
        }else{
            slideI=0;
        }
    $(".slide .slide_pi>li").eq(slideI).siblings().fadeOut(500);
    $(".slide .slide_pi>li").eq(slideI).fadeIn(500);
    },3000);
});
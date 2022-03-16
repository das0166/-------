$(document).ready(function(){
    // 헤더
   $("header nav .gnb>li").mouseenter(function(){
    $(".nav_bg, .sub").stop().slideDown();
   });
   $("header nav .gnb>li").mouseleave(function(){
    $(".nav_bg, .sub").stop().slideUp();
   });
   // 스크립트
   $(".slide li").eq(0).siblings().hide();
   var slideI=0;
   setInterval(function(){
        if(slideI<2){
            slideI++;
        }else{
            slideI=0;
        }
    $(".slide li").eq(slideI).siblings().fadeOut(500);
    $(".slide li").eq(slideI).fadeIn(500);
   },3000);
   //패밀리사이트
   $("footer .fam p").click(function(){
        $("footer .fam ul").slideToggle();
   });
   //모달
   $(".contents .notice ul li").eq(0).click(function(){
        $(".modal").fadeIn();
   });
   $(".btn").click(function(){
        $(".modal").fadeOut();
   });
});
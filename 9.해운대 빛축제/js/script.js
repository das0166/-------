$(document).ready(function(){
    $("header nav .gnb>li").hover(function(){
        $(this).find(".sub").stop().slideDown();
    },function(){
        $(this).find(".sub").stop().slideUp();
    });
    $(".container .slide li").eq(0).siblings().hide();
    var slideI=0;
    setInterval(function(){
        if(slideI<2){
            slideI++;
        }else{
            slideI=0;
        }
        $(".container .slide li").eq(slideI).siblings().fadeOut();
        $(".container .slide li").eq(slideI).fadeIn();
    },3000);
});
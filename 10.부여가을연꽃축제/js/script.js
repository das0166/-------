$(document).ready(function(){
    $("header nav .gnb>li").hover(function(){
        $(this).find(".sub").stop().slideDown();
    },function(){
        $(this).find(".sub").stop().slideUp();
    });
    $(".slide>li").eq(0).siblings().hide();
    var slideI=0;
    setInterval(function(){
        if(slideI<2){
            slideI++;
        }else{
            slideI=0;
        }
        $(".slide>li").eq(slideI).siblings().fadeOut();
        $(".slide>li").eq(slideI).fadeIn();
    },3000);
    $("footer .left .fa h2").click(function(){
        $("footer .left .fa ul").stop().slideToggle();
    });
    $(".contents .notice ul li").eq(0).click(function(){
        $(".modal").fadeIn();
    });
    $(".btn").click(function(){
        $(".modal").fadeOut();
    });
});
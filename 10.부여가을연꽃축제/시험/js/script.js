$(document).ready(function(){
    $("header nav .gnb>li").hover(function(){
        $(this).find(".sub").stop().slideDown();
    },function(){
        $(this).find(".sub").stop().slideUp();
    });
    $(".slide>ul>li").eq(0).siblings().hide();
    var slideI=0;
    setInterval(function(){
        if(slideI<2){
            slideI++;
        } else{
            slideI=0;
        }
        $(".slide>ul>li").eq(slideI).siblings().fadeOut("slow");
        $(".slide>ul>li").eq(slideI).fadeIn("slow");
    },3000);
    $("footer .right .fo_fa h2").click(function(){
        $("footer .right .fo_fa ul").stop().slideToggle();
    });
    $(".contents .notice>ul>li").eq(0).click(function(){
        $(".modal").fadeIn();
    });
    $(".btn").click(function(){
        $(".modal").fadeOut();
    });
});
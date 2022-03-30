$(document).ready(function(){
    $("header nav .gnb>li").hover(function(){
        $(this).find(".sub").stop().slideDown();
    },function(){
        $(this).find(".sub").stop().slideUp();
    });
    $(".slide .slide_all>li").eq(0).siblings().hide();
    var slideI=0;
    setInterval(function(){
        if(slideI<2){
            slideI++;
        }else{
            slideI=0;
        }
        $(".slide .slide_all>li").eq(slideI).siblings().fadeOut(500);
        $(".slide .slide_all>li").eq(slideI).fadeIn(500);
    },3000);
   $(".contents .gal_no h2").click(function(){
        $(".contents .gal_no h2, .contents .gal_no ul").removeClass("on");
        $(this).addClass("on");
        $(this).next("ul").addClass("on");
   });
   $(".contents .gal_no .notice>li").eq(0).click(function(){
        $(".modal").fadeIn();
   });
   $(".btn").click(function(){
        $(".modal").fadeOut();
   });
});
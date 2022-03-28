$(document).ready(function(){
    $("header nav .gnb").hover(function(){
        $(this).find(".sub").stop().slideDown();
    },function(){
        $(this).find(".sub").stop().slideUp();
    });
   $(".slide .slide_all li").eq(0).siblings().css({"top":"-300px"});
   var slideI=0;
   setInterval(function(){
        if(slideI<2){
            slideI++;
        }else{
            slideI=0;
        }
        $(".slide .slide_all li").eq(slideI).siblings().animate({"top":"-300px"},500);
        $(".slide .slide_all li").eq(slideI).animate({"top":"0"},500);
    },3000);
   $(".contents .no_gal h2").click(function(){
        $(".contents .no_gal h2, .contents .no_gal ul").removeClass("on");
        $(this).addClass("on");
        $(this).next("ul").addClass("on");
   });
   $(".contents .no_gal .notice>li").eq(0).click(function(){
        $(".modal").fadeIn();
   });
   $(".btn").click(function(){
    $(".modal").fadeOut();
   });
});
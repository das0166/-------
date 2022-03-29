$(document).ready(function(){
    $("header nav .gnb>li").hover(function(){
        $("header nav .gnb_bg, header nav .gnb>li .sub").stop().slideDown();
    },function(){
        $("header nav .gnb_bg, header nav .gnb>li .sub").stop().slideUp();
    });
    $(".slide .slide_all>li").eq(0).siblings().css({"left":"-1200px"});
    var slideI=0;
    setInterval(function(){
        if(slideI<2){
            slideI++;
        }else{
            slideI=0;
        }
        $(".slide .slide_all>li").eq(slideI).siblings().animate({"left":"-1200px"},500);
        $(".slide .slide_all>li").eq(slideI).animate({"left":"0"},500);
    },3000);
    $("footer .fa h2").click(function(){
        $("footer .fa ul").slideToggle();
    });
    $(".contents .notice>ul>li").eq(0).click(function(){
        $(".modal").fadeIn();
    });
    $(".btn").click(function(){
        $(".modal").fadeOut();
    });
});
$(document).ready(function(){
    $("nav .gnb>li").hover(function(){
        $(this).find(".sub").stop().slideDown(300);
    },function(){
        $(this).find(".sub").stop().slideUp(300);
    });
    $(".slide .slide_all>li").eq(0).siblings().css({"left":"-800px"});
    var slideI=0;
    setInterval(function(){
        if(slideI<2){
            slideI++;
        }else{
            slideI=0;
        }
        $(".slide .slide_all>li").eq(slideI).siblings().animate({"left":"-800px"},500);
        $(".slide .slide_all>li").eq(slideI).animate({"left":"0"},500);
    },3000);
    $("footer .fa h2").click(function(){
        $("footer .fa ul").stop().slideToggle();
    });
    $(".contents .notice>ul>li").eq(0).click(function(){
        $(".modal").fadeIn();
    });
    $(".btn").click(function(){
        $(".modal").fadeOut();
    });
});
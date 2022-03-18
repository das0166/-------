$(document).ready(function(){
    $("header nav .gnb>li").mouseenter(function(){
        $(".nav.bg, .sub").stop().slideDown();    
    });
    $("header nav .gnb>li").mouseleave(function(){
        $(".nav.bg, .sub").stop().slideUp();    
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
    $(".contents .no_gal h2").click(function(){
        $(".contents .no_gal h2, .contents .no_gal ul").removeClass("on");
        $(this).addClass("on");
        $(this).next("ul").addClass("on");
    });
    $(".contents .no_gal .notice>li>a").eq(0).click(function(){
        $(".modal").fadeIn();
    });
    $(".btn").click(function(){
        $(".modal").fadeOut();
    });
    $("footer .snfa h3").click(function(){
        $("footer .snfa .fam").stop().slideToggle();
    });

});
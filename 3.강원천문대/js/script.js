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

    //공지사항, 갤러리
    $(".content .notice_gal h3").click(function(){
        $(".content .notice_gal h3, .content .notice_gal ul").removeClass("on");
        $(this).addClass("on");
        $(this).next("ul").addClass("on");
    });

    //공지사항 첫번째
    $(".notice li").eq(0).click(function(){
        $(".modal").fadeIn();
    });
    $(".btn").click(function(){
        $(".modal").fadeOut();
    });
});
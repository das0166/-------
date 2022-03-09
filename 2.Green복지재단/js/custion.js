$(document).ready(function(){
    //네이게이션
    $("header nav .gnb>li").mouseenter(function(){
        $(".nav_bg, .sub").stop().slideDown();
    });
    $("header nav .gnb>li").mouseleave(function(){
        $(".nav_bg, .sub").stop().slideUp();
    });
    //슬라이드
    var SlideI=0;
    setInterval(function(){
        if(SlideI<2){
            SlideI++;
        }else{
            SlideI=0;
        }
    $(".slide li").eq(SlideI).siblings().animate({left:"-1200px"},500);
    $(".slide li").eq(SlideI).animate({left:"0"},500);
    },3000);

    //패밀리 사이트
    $("footer .fam p").click(function(){
        $(this).toggleClass("on");
        $("footer .fam ul").stop().slideToggle();
    });

    //공지사항 첫번째 모달
    $(".contents .notice ul li").eq(0).click(function(){
        $(".modal").fadeIn();
    });
    $(".btn").click(function(){
        $(".modal").fadeOut();
    });
}); //ready end
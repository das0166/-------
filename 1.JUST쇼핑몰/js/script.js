$(document).ready(function(){

    //네비게이션
    $("header nav .gnb>li").hover(function(){
        $(".sub").stop().slideDown();
    },function(){
        $(".sub").stop().slideUp();
    })

    //메인슬라이드
    $(".slide .slide_all>li").eq(0).siblings().css("top","-300px");
    var slideI=0;
    setInterval(function(){
        if(slideI<2){
            slideI++;
        }else{
            slideI=0;
        }
    $(".slide .slide_all>li").eq(slideI).animate({"top":"-300px"},500);
    $(".slide .slide_all>li").eq(slideI).animate({"top":"0"},500);
    },3000);

    //탭메뉴 공지사항, 갤러리
    $(".content .notice_gal h3").click(function(){
        $(".content .notice_gal h3, .content .notice_gal ul").removeClass("on");
        $(this).addClass("on");
        $(this).next("ul").addClass("on");
    })

    //레이어 팝업
    $(".notice li").eq(0).click(function(){
        $(".modal").fadeIn();
    })
    $("button").click(function(){
        $(".modal").fadeOut();
    })

});
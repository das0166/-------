$(document).ready(function(){
    //사이트맵
    $("header nav .gnb>li").hover(function(){
        $(".sub").stop().slideDown();
       }, function(){$(".sub").stop().slideUp();
    });

    //슬라이더
    $(".slide .slide_all>li").eq(0).siblings().css({"left":"-1200px"});
    var slideI=0;
    setInterval(function(){
        if(slideI<2){
            slideI++;
        }else{
            slideI=0;
        }
    $(".slide .slide_all>li").eq(slideI).siblings().animate({"left":"-1200px"},500)
    $(".slide .slide_all>li").eq(slideI).animate({"left":"0"},500)
    },3000);
    
    //메뉴
    $(".contents .notice_gal h2").click(function(){
        $(".contents .notice_gal h2, .contents .notice_gal ul").removeClass("on");
        $(this).addClass("on");
        $(this).next("ul").addClass("on");
    });

    //공지사항 첫번째
    $(".contents .notice_gal .notice>li>a").eq(0).click(function(){
        $(".modal").fadeIn();
    });
   $(".btn").click(function(){
        $(".modal").fadeOut();
   });
});
    

$(document).ready(function(){
    $("header nav .gnb>li").mouseenter(function(){
        $(".nav.bg, .sub").stop().slideDown();    
    });
    $("header nav .gnb>li").mouseleave(function(){
        $(".nav.bg, .sub").stop().slideUp();    
    });
});
/**
 * Created by MLKG on 2016/9/29.
 */
/**
 * Created by zengguilin on 2016/9/25.
 */
$(document).ready(function () {
    $(".nav__item").click(function(){
        var $element = $(this);
        $element.siblings("div[class~='nav__item']").removeClass("active");
        if($element.hasClass("area")){
            $(".nav-two").removeClass("active").hide();
            $(".nav-three").removeClass("active").hide();
            if($element.hasClass("active")){
                $(".nav-one").removeClass("active").show();
                $("html").removeClass("overflow-hidden");
            }else{
                $(".nav-one").addClass("active").show();
                $("html").addClass("overflow-hidden");
            }
        }else if($element.hasClass("tag")){
            $(".nav-one").removeClass("active").hide();
            $(".nav-three").removeClass("active").hide();
            if($element.hasClass("active")){
                $(".nav-two").removeClass("active").show();
                $("html").removeClass("overflow-hidden");
            }else{
                $(".nav-two").addClass("active").show();
                $("html").addClass("overflow-hidden");
            }
        }else if($element.hasClass("order")){
            $(".nav-one").removeClass("active").hide();
            $(".nav-two").removeClass("active").hide();
            if($element.hasClass("active")){
                $(".nav-three").removeClass("active").show();
                $("html").removeClass("overflow-hidden");
            }else{
                $(".nav-three").addClass("active").show();
                $("html").addClass("overflow-hidden");
            }
        }

        if($element.hasClass("active")){
            $element.removeClass("active");
        }else{
            $element.addClass("active");
        }
    });

    function getScrollTop() {
        var scrollTop = 0;
        if (document.documentElement && document.documentElement.scrollTop) {
            scrollTop = document.documentElement.scrollTop;
        } else if (document.body) {
            scrollTop = document.body.scrollTop;
        }
        return scrollTop;
    }

    window.onscroll = function(){
        var navTop = $(".restaurant__header").height();
        //console.log(navTop);
        //console.log(getScrollTop());
        if(getScrollTop() >= navTop + 10){
            $(".nav").removeClass("nav__scroll").addClass("nav__scroll_fix");
        }else{
            $(".nav").addClass("nav__scroll").removeClass("nav__scroll_fix");
        }
    };
});

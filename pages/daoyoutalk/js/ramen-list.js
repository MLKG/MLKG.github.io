/**
 * Created by zengguilin on 2016/10/12.
 */
/**
 * Created by zengguilin on 2016/9/25.
 */
$(document).ready(function () {
    $(".nav__item").click(function(){
        var $element = $(this);
        $element.siblings("div[class~='nav__item']").removeClass("active");
        if($element.hasClass("tag")){
            $(".nav-three").removeClass("active").hide();
            if($element.hasClass("active")){
                $(".nav-two").removeClass("active").show();
                $("html").removeClass("overflow-hidden");
            }else{
                $(".nav-two").addClass("active").show();
                $("html").addClass("overflow-hidden");
            }
        }else if($element.hasClass("order")){
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
});
/**
 * Created by zengguilin on 2016/10/12.
 */

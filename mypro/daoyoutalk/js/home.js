/**
 * Created by MLKG on 2016/9/20.
 */

$(document).ready(function () {
    var swiper = new Swiper('.home__container', {
        pagination: '.home__pagination',
        paginationClickable: true,
        autoplay : 1800,
        loop : true
    });
});

function showChose(){
    $(".home-list__chose").show();
    $(".home-list__item").show();
}


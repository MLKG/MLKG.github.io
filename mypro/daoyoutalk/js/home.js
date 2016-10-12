/**
 * Created by MLKG on 2016/9/20.
 */

$(document).ready(function () {
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay : 1800,
        loop : true
    });
});

function showChose(){
    $(".home-list__chose").show();
    $(".home-list__item").show();
}

function goAttractions(){
    window.open("http://dalin.tech/mypro/daoyoutalk/template/attractions-list.html")
}

function goRestaurant(){
    window.open("http://dalin.tech/mypro/daoyoutalk/template/restaurant-list.html")
}

function goShopping(){
    window.open("http://dalin.tech/mypro/daoyoutalk/template/shopping-list.html")
}




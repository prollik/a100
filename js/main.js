// Мобильное меню
$('.header__btn-menu').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('btn__menu-active');
    $('.dropdown').toggleClass('menu-active');
});

// Карта, выпадающий списки филиалов
$("input:checkbox").on('click', function() {
    var $box = $(this);
    if ($box.is(":checked")) {

        var group = "input:checkbox[name='" + $box.attr("name") + "']";
        $(group).prop("checked", false);
        $box.prop("checked", true);
    } else {
        $box.prop("checked", false);
    }
});

// Слайдер, филиалы
if ( $(window).width() < 684 ) {

$('.contacts__box').slick({
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    infinite: true,
    dots:true,
});

}

var socket = io('http://localhost:3000');
socket.on('news',function (data) {
    console.log(data);
    socket.emit('my other event',{my:'data'});
});

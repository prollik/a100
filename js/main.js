$('.header__btn-menu').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('btn__menu-active');
    $('.dropdown').toggleClass('menu-active');
});

$('.news__btn').on('click', function (e) {
    e.preventDefault();
    $('.news__right-box').toggleClass('news__right-active');
});

var socket = io('http://localhost:3000');
socket.on('news',function (data) {
    console.log(data);
    socket.emit('my other event',{my:'data'});
});




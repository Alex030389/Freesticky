svg4everybody();

$('#main-select').selectric();


$('.hamburger').click(function () {
  if ($(window).width() < 992) {
    $('.overlay').removeClass('overlay_hidden');
    $('.menu').removeClass('menu_hidden');

    $('.overlay').fadeToggle(300);

    $('.menu').toggleClass('menu_visible-mobile');

    if($('.menu').hasClass('menu_visible-mobile')) {
      $('body').css('overflow-y', 'hidden');
    } else {
      $('body').css('overflow-y', 'visible');      
    }
    
  } else {
    $('.overlay').removeAttr('style');
    $('.menu').removeClass('menu_visible-mobile');

    $('.overlay').toggleClass('overlay_hidden');
    $('.menu').toggleClass('menu_hidden');
  };
});


$(document).scroll(function () {
  if ($(document).scrollTop() >= 200) {
    $('.header').addClass('header_small');
    $('.menu').addClass('menu_small-top');
  } else if ($(document).scrollTop() < 200 && $(window).width() >= 576) {
    $('.header').removeClass('header_small');
    $('.menu').removeClass('menu_small-top');
  }
});

$(window).resize(function() {
  if($(window).width() >= 992) {
    $('body').css('overflow-y', 'visible');
    $('.overlay').removeAttr('style');
  }
})


// preloader
// setInterval(function () {
//     var p = $(".preloader");
//     p.css("opacity", 0);
//     setInterval(function () {
//         p.remove();
//     }, 1000);
// }, 2000);

// scroll
// $("#menu").on("click", "a", function (event) {
//     event.preventDefault();
//     var id = $(this).attr('href'),
//         top = $(id).offset().top;
//     $('body,html').animate({
//         scrollTop: top
//     }, 600);
// });

// hamgurger;
// var hamburger = $(".hamburger");
// hamburger.click(function () {
//     hamburger.toggleClass("is-active");
//     $(".menu").fadeToggle(200);

// disable scrolling when the menu is active
// if (hamburger.hasClass("is-active")) {

//     var winScrollTop = $(window).scrollTop();
//     $(window).bind("scroll", function () {
//         $(window).scrollTop(winScrollTop);
//     });
// } else {
//     $(window).off("scroll");
// }
// });

// $(".menu__link").click(function () {
//     $(window).off("scroll");
//     hamburger.toggleClass("is-active");
//     $(".menu").fadeToggle(200);
// });


// flipClock

var taimer = $(".get-free-taimer__inner").FlipClock({
  //clockFace: "DailyCounter", // показывать дни
  autoStart: false, // не начинать отсчет заново
  // callbacks: { // запустить функции по истечению времени
  //   stop: function() {
  //     $(".message").html("Время прошло");
  //   }
  // } 
});

// чтобы время не сбрасывалось нужно привязать ко времени и к конечному времени
var dt = "April 27 2019 12:50:48"
var first = new Date(dt);
var last = Date.now();
var remaining = first - last;
remaining /= 1000; //переводит милисекунды в секунды

// время таймера 
// taimer.setTime(remaining);
taimer.setTime(5000);

// отсчет вперед или назад (true, false)
taimer.setCountdown(true);

taimer.start();
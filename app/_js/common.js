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
});

$('.btn-article-back').click(function() {
  window.history.back();
});


// $('.likedislike .up').click(function() {
//     setTimeout(function() {
//       if($('.likedislike').hasClass('user_voted')) {
//         $('.article-item__like').addClass('article-item__like_active');
//       };
//     }, 1000);    
// })



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
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

$('.search-btn').click(function() {
  $('.box-mobile-search-form').fadeToggle(1);
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



//like
$(window).load(function() {
  $('.article-item__like').has(".user_voted").addClass('article-item__like_active');
});

$('.likedislike .up').click(function() {
  like(); 
});

function like() {
  setTimeout(function() {
    $('.article-item__like').has(".user_voted").addClass('article-item__like_active');
  }, 800);
};
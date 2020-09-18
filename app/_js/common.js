svg4everybody();

$('#main-select').selectric();

// /////////////////////////////////////////// header toggle small
$(document).on('scroll', function () {
  if ($(document).scrollTop() >= 200) {
    $('.header').addClass('header_small');
    $('.menu').addClass('menu_small-top');
  } else if ($(document).scrollTop() < 200 && $(window).width() >= 576) {
    $('.header').removeClass('header_small');
    $('.menu').removeClass('menu_small-top');
  }
});


// //////////////////////////////////////////// hamburger
$('.hamburger').on('click', function () {
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


// /////////////////////////////////////////// mobile search
$(window).on('resize', function() {
  if($('.search-btn').is(":hidden")) {
    $('.box-mobile-search-form').hide();
  }
})

$('.search-btn').on('click', function() {
  $('.box-mobile-search-form').fadeToggle(50);
});



$(window).on('resize', function() {
  if($(window).width() >= 992) {
    $('body').css('overflow-y', 'visible');
    $('.overlay').removeAttr('style');
  }
});

// ////////////////////////////////////////// btn back article
// $('.btn-article-back').on('click', function() {
//   window.history.back();
// });


// ////////////////////////////////////////// like
// $(window).load(function() {
//   $('.article-item__like').has(".user_voted").addClass('article-item__like_active');
// });

// $('.likedislike .up').on('click', function() {
//   like(); 
// });

// function like() {
//   setTimeout(function() {
//     $('.article-item__like').has(".user_voted").addClass('article-item__like_active');
//   }, 800);
// };
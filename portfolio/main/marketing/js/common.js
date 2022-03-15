/* ==========================================================================
   placeholder
========================================================================== */
    $('input,textarea').focus(function(){
      $(this).data('placeholder',$(this).attr('placeholder'))
      $(this).attr('placeholder','');
    });
    $('input,textarea').blur(function(){
      $(this).attr('placeholder',$(this).data('placeholder'));
    });

// DM Top
  $(window).scroll(function(){
    if ($(this).scrollTop() > 1) {
      $('.dmtop').css({bottom:"25px"});
    } else {
      $('.dmtop').css({bottom:"-100px"});
    }
  });
  $('.dmtop').click(function(){
    $('html, body').animate({scrollTop: '0px'}, 800);
    return false;
  });

/////////////////////////////////////////////////////////////////////////
//PORTFOLIO (CASE)
/////////////////////////////////////////////////////////////////////////

$(document).ready(function() {
  portfolio_ms_setup();
});

$(window).on('resize', function() {
  portfolio_ms_setup();  
});

function portfolio_ms_setup() {
  $('.portfolio-box').isotope({
    itemSelector: '.item',
    transitionDuration: '0.60s',
    masonry: {
      percentPosition: true
    }
  });
  $('.portfolio-filter ul li').on('click', function(event) {
    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');
    event.preventDefault();
  });
  $('.portfolio-filter ul').on('click', 'a', function() {
    var filterElement = $(this).attr('data-filter');
    $(this).parents(".portfolio-filter").next().isotope({
      filter: filterElement
    });
  });
}

$(document).ready(function () {

/////////////////////////////////////////////////////////////////////////
//MODAL EXIT
/////////////////////////////////////////////////////////////////////////

var opened = false;
    $(document).on('mouseout', function(e) {
        if (e.clientY < 0) {
            $(document).trigger('pageOff');
        }
    });

    $(document).on('pageOff', function() {
        if (!opened) {
          $.magnificPopup.open({
            items: {src: '#modal-exit'},type: 'inline'
          });
          opened = true;
        }
    });

/////////////////////////////////////////////////////////////////////////
//NAVBAR end MENU
/////////////////////////////////////////////////////////////////////////

$(".navbar .navbar__burger").click(function () {
    $(this).parent().children('.navbar__menu').fadeToggle(300);
    $(this).toggleClass('open');
});

$('.navbar__menu li a[href^="#"]').click(function(){
    var scroll_el = $(this).attr("href")
    $('.navbar__menu').fadeToggle(300);
    $('.navbar__burger').removeClass('open');
    $('html, body').animate({scrollTop: $(scroll_el).offset().top}, 800);
    return false;
  });

$('.header__menu a[href^="#"]').click(function(){
    var scroll_el = $(this).attr('href');
    $('.header__menu > li').removeClass('active');
    $(this).parent('li').addClass('active');
    $('html, body').animate({scrollTop: $(scroll_el).offset().top}, 800);
    return false; 
    });


/////////////////////////////////////////////////////////////////////////
//SCROLL
/////////////////////////////////////////////////////////////////////////

$('a.scroll').click(function(){
  var target = $(this).attr('href');
  $('html, body').animate({
      scrollTop: $(target).offset().top - 0}, 800);
  return false; 
});

/////////////////////////////////////////////////////////////////////////
//BANNER
/////////////////////////////////////////////////////////////////////////
// setTimeout ("$('.banner').fadeIn('slow');",5000);

setTimeout(function(){
    $('.banner').fadeIn('500').animate({bottom:"0"});
  }, 5000);

$('.banner__close').click(function(){
  $('.banner').fadeIn('500').animate({bottom:"-350px"});
  return false; 
});

/////////////////////////////////////////////////////////////////////////
//Маска для телефона
/////////////////////////////////////////////////////////////////////////

$('input[type="tel"]').mask("+7 (999) 999-99-99");

/////////////////////////////////////////////////////////////////////////
//matchHeight (одинаковая высота блоков)
/////////////////////////////////////////////////////////////////////////

$('.case .case_item').matchHeight();

$('.advantages .advantages__item').matchHeight();

$('.vibor__content .vibor__item').matchHeight();

$('.digital .digital__item').matchHeight();

$('.reviews__content .reviews__item').matchHeight();

$('.reviews__video .reviews__item').matchHeight();

/* ==========================================================================
   SPOILER
========================================================================== */

$('.spoiler-box .more i').click(function(){
    $(this).parent().parent().children().children('.hidden').slideDown('300');
    $(this).parent().toggleClass('open');
    if($(this).parent().hasClass('open')) {
          // $(this).html('Свернуть');
      }
      else {
        $(this).parent().parent().children().children('.hidden').slideUp('300');
      }
      return false;
  });

$('.table .more').click(function(){
    $('.table .box').removeClass('hidden');
    $(this).toggleClass('opened');
    if($(this).hasClass('opened')) {
     $(this).html('<span>Показать меньше</span>');
      }
      else {
        $('.table .box').addClass('hidden');
        $(this).html('<span>Показать больше</span>');
      }
      return false;
  });

/* ==========================================================================
   magnificPopup
========================================================================== */
$(this).find('a.popup').magnificPopup({
  type: 'inline',
  preloader: false
});

$('.popup-youtube').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false
  });

$(document).on('click', '.modal-close', function (e) {
  e.preventDefault();
  $.magnificPopup.close();
});

/* ==========================================================================
   owl-carousel
========================================================================== */
$("#carousel").owlCarousel({
      loop:true,
      nav:true,
      dots:false,
      autoplay:true,
      autoplayTimeout:6000,
      margin:30,
      navText: ['', ''],
      responsive:{
        0:{
            items:1
        },
        420:{
            items:2
        },
        680:{
            items:3
        },
        991:{
            items:4
        },
        1170:{
            items:5
        }
      }
    });

});//end $(document).ready(function ()
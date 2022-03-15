/*
* Author: Наталья Ростовская
* Skype: moireceptik
* Date: 2017
* Site: http://natfolio.ru
*/

// DM Top
$(window).scroll(function(){
  if ($(this).scrollTop() > 1) {
    $('.dmtop').css({top:"100px"});
  } else {
    $('.dmtop').css({top:"-100px"});
  }
});
$('.dmtop').click(function(){
  $('html, body').animate({scrollTop: '0px'}, 800);
  return false;
});

/* ==========================================================================
 header scroll
 ========================================================================== */

$(window).scroll(function(){
  if ( $(this).scrollTop() > 1 ) {
    $('#header').addClass('affix');
  } else {
    $('#header').removeClass('affix');
  }
});

$(document).ready(function () {
"use strict";
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

/* ==========================================================================
 styler
 ========================================================================== */
$('input[type="file"], select').styler();

/* ==========================================================================
 URL
 ========================================================================== */
$(function(){
  $('[name="url"]').val(window.location);
});

/* ==========================================================================
 активная кнопка формы при клике на input
 ========================================================================== */

$('form.ajax_form input[type="checkbox"]').change(function () {
  if ($(this).is(":checked")) {
    $("form.ajax_form button[type='submit']").attr("disabled", false);
  }
  else {
    $("form.ajax_form button[type='submit']").attr("disabled", true);
  }
});

/* ==========================================================================
 изменение текста на input="file"
 ========================================================================== */

$(function(){
$(document).on('af_complete', function(event, response) {
  var form = response.form;
  // если ответ пришёл успешный
  if (response.success) {
    if ($(form).hasClass('ajaxform')) {
      $(form).find('.jq-file').removeClass('changed');
      $(form).find('.jq-file__name').text('Файлы для верстки');
    }
  }
});  
});
/////////////////////////////////////////////////////////////////////////
//Sticky
/////////////////////////////////////////////////////////////////////////

$(".navbar__burger").click(function () {
  $(".navbar__nav").fadeToggle(300);
  $(".navbar__burger").toggleClass('open');
});

/* ==========================================================================
 Спойлеры
========================================================================== */ 

$('.spoiler-grous').click(function(){
$(this).parent().children('.hidd').slideToggle('300');
$(this).toggleClass('opened');
return false;
});


$('.spoiler .more').click(function(){
  $(this).parent().children('.hidd').slideDown('300');
  $(this).toggleClass('opened');
  if($(this).hasClass('opened')) {
   $(this).html('<span>Скрыть</span>');
    }
    else {
      $(this).parent().children('.hidd').slideUp('300');
      $(this).html('<span>Показать еще</span>');
    }
    return false;
});

/////////////////////////////////////////////////////////////////////////
//Parallax
/////////////////////////////////////////////////////////////////////////
$.stellar({
horizontalScrolling: false,
responsive: true,
verticalOffset: 40
});
/////////////////////////////////////////////////////////////////////////
//matchHeight
/////////////////////////////////////////////////////////////////////////
$('.feature-box').matchHeight();

$('.work').matchHeight();

/* ==========================================================================
 magnificPopup
========================================================================== */
$('.popup').magnificPopup({
type: 'inline',
preloader: false
});

/////////////////////////////////////////////////////////////////////////
//Countup <span class="timer" data-from="0" data-to="356" data-speed="5000" data-refresh-interval="100">356</span>
/////////////////////////////////////////////////////////////////////////
$('.countup-box').appear(function() {
    $('.countup').easyPieChart({
      delay: 9000,
      size:144,
      barColor: '#02A8F4',
      trackColor: '#a5a5a5',
      scaleColor: false,
      lineWidth: 6,
      trackWidth: 6,
      lineCap: 'butt'
    });
  });

$('.countup-box').appear(function() {
    $('.timer').each( function(){
      $(this).countTo({
        speed: 1000,
        refreshInterval: 5,
        formatter: function (value, options) {
          return value.toFixed(options.decimals);
        }
      });
    });
  });
/////////////////////////////////////////////////////////////////////////
//Scroll (Самопис)
/////////////////////////////////////////////////////////////////////////
$('a.scroll').click(function(){
      var target = $(this).attr('href');
      $('html, body').animate({
          scrollTop: $(target).offset().top - 70}, 800); //70 замените на любое количество пикселей
      return false; 
});
$(".nav-h").click(function() {
  $(".nav-h .toggle-mnu").toggleClass("on");
  //return false;
});
/////////////////////////////////////////////////////////////////////////
//Галлерея (Документация http://isotope.metafizzy.co/)
/////////////////////////////////////////////////////////////////////////
$('.works').imagesLoaded( function() {
var $grid = $('.works__box').isotope({
  itemSelector: '.work'
});
$('#filter').on( 'click', 'li a', function(event) {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

$('#filter li').on('click', function (event) {
    $(this).siblings('.current').removeClass('current');
    $(this).addClass('current');
    event.preventDefault();
});
});



// $('.works__box').isotope({
//       itemSelector: '.work'
//   });

//   $('#filter a').click(function(){

//       $('#filter a').removeClass('current');
//       $(this).addClass('current');
//       var selector = $(this).attr('data-filter');

//       $('.works__box').isotope({
//           filter: selector,
//           animationOptions: {
//               duration: 1000,
//               easing: 'easeOutQuart',
//               queue: false
//           }
//       });
//       return false;
//   });
/////////////////////////////////////////////////////////////////////////
//OWL Карусель логотипов (Документация http://owlcarousel.owlgraphic.com/)
/////////////////////////////////////////////////////////////////////////    
  $("#carousel-1").owlCarousel({
    loop:true,
    //nav:true,
    margin:30,
    navText: ['', ''],
    responsive:{
      0:{
          items:1
      },
      992:{
          items:2
      }
    }
  });



});//end
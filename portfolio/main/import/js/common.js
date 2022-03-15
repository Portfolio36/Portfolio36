///////////////////////////////////////////////////////////////////////////////

$(document).ready(function(){

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
/************************
mask
*************************/
  
  $('input[name="tel"]').mask("+7 (999) 999-99-99");

/************************
календарь в поле input
*************************/  
var i = document.createElement("input");
i.setAttribute("type", "date");
if (i.type == "text") {
   //если нет встроенной поддержки выбора даты, подключаем скрипт...
  $('#date').daterangepicker({
    "singleDatePicker": true,
    "showWeekNumbers": false,
    "showISOWeekNumbers": false,
    "timePicker": false,
    "autoUpdateInput": true,
    //"startDate": "15.04.2016",
    //"endDate": "15.05.2016",
    "opens": "left"
  }, function(start, end, label) {
    console.log("New date range selected: ' + start.format('DD-MM-YYYY') + ' to ' + end.format('DD-MM-YYYY') + ' (predefined range: ' + label + ')");
  });
  //end
}
/* ==========================================================================
   волновой эффект при клике на кнопку
   ========================================================================== */
  window.onload = function(){
    Waves.init({
      duration: 500,
      delay: 200
    });
  };
  Waves.attach(".box", [
      "waves-block",
      "waves-float"
  ]);
/* ==========================================================================
   если кликнули на...
   ========================================================================== */
  $('.click').click(function() {
      if ($(".box-none").is(":hidden")) {
          $(".click").addClass('active');
          $(".box-none").show();
      } else {
          $(".click").removeClass('active');
          $(".box-none").hide();
    }
    return false;
  }); 
/* ==========================================================================
   preload img
   ========================================================================== */
    preload([
    'images/services/1-h.png',
    'images/services/2-h.png',
    'images/services/3-h.png',
    'images/services/4-h.png',
    'images/services/5-h.png',
    'images/services/6-h.png',
    'images/services/7-h.png'
    ]);

    function preload(images) {
        if (typeof document.body == "undefined") return;
        try {

            var div = document.createElement("div");
            var s = div.style;
            s.position = "absolute";
            s.top = s.left = 0;
            s.visibility = "hidden";
            document.body.appendChild(div);
        div.innerHTML = "<img src=\"" + images.join("\" /><img src=\"") + "\" />";
        var lastImg = div.lastChild;
        lastImg.onload = function() { document.body.removeChild(document.body.lastChild); };
       }
       catch(e) {
            // Error. Do nothing.
      }
    }
    
   /* ==========================================================================
   owlCarousel
   ========================================================================== */
   $(".owl-next, .owl-prev").backgroundImageTransition({
    "transition-duration": 800,
    "transition-timing-function": "swing",
    "transition-delay": 0,                    
    "pseudo-class": ":hover"
  });   

  var owl = $('.owl-carousel');
  owl.owlCarousel({
    stagePadding: 0,
    loop:true,
    margin:15,
    nav:true,
    autoplay:false,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        420:{
            items:1
        },
        600:{
            items:2
        },
        768:{
            items:2
        },
        1000:{
            items:2
        }
    }
  });

});

/* ==========================================================================
   центрирование модального окна bootstrap
   ========================================================================== */   
$(function(){
  
  var a = $('<div class="modal-measure-scrollbar"/>').prependTo($("body")),
      b = $('<div class="inner"/>').appendTo(a),
            c = a.width() - b.width();
      a.remove();
    
  $(document) .on('hidden.bs.modal', '.modal', function ()
  {
    $(document.body).css('padding-right','');
    $(window).unbind("resize.modalAlign");  
  }) 

  $(document) .on('show.bs.modal', function (e)
  {
      var thisDialog = $(e.target).find('.modal-dialog');
          $(e.target).css('display','block');

          $(window).bind("resize.modalAlign", function ()
          {
            thisDialog.css('margin-top', (thisDialog .outerHeight() < $(window).height()) ? (($(window).height() - thisDialog.outerHeight()) / 2 + 'px') : '')
          })
          
          .resize();
        
    if ($(window).height() < $(document).height())
        {
            $('body').css({'padding-right': c + 'px'});
    };
      })
})
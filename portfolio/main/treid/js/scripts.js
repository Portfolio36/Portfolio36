// JavaScript Document

$(document).ready(function () {
	
	/* page navigation */
	
	$('nav').singlePageNav();
	
	/* fixed navigation */
	
	var h_hght = 9;
	var h_mrg = 0;
  
    $(function() {
		$(window).on('load scroll',function (){ 
			var top = $(this).scrollTop();
			var elem = $('.navigation');
			if (top+h_mrg < h_hght) {
				elem.css('top', (h_hght-top));
				$(".navigation").removeClass("fixed");
			} else {
				elem.css('top', h_mrg);
				$(".navigation").addClass("fixed");
			}
		});
	});

	/* scroll content */
	
	$(".slider-1 .text-bottom").mCustomScrollbar({
	axis:"y",
	theme:"yatheme",
	scrollInertia:100,
	setHeight: 160,
	//setWidth: 300,
		scrollButtons:{ 
				enable: true,
		}
	});
	$(".slider-2 .text-bottom").mCustomScrollbar({
	axis:"y",
	theme:"yatheme",
	scrollInertia:100,
	setHeight: 212,
	//setWidth: 300,
		scrollButtons:{ 
				enable: true,
		}
	});
	
	/* slider */

      var owl = $("#owl-slider-1");
      owl.owlCarousel({
          itemsCustom : [
            [0, 1],
            [1600, 1]
          ],
          navigation : true
      });

      var owl = $("#owl-slider-2");
      owl.owlCarousel({
          itemsCustom : [
            [0, 1],
            [1600, 1]
          ],
          navigation : true
      });
     

	/* open modal*/ 
	$('#modal').click(function() {
		$('#Modal-1').arcticmodal({
			openEffect: { speed: 100 },
			closeEffect: { speed: 100 }
		});
	});

	$(".closs").click(function(){
		$('#Modal-1').arcticmodal('close');
	});
	
	/* open window */
	
	$(".btn").click(function(){
		var index = $(this).index(".btn");
		
		if (index == 0) {
			$("input[name='info']").val('кнопка Заказать звонок - раздел ГЛАВНАЯ');//
		}
		if (index == 1) {
			$("input[name='info']").val('кнопка Получить бесплатную консультацию - раздел МЫ В ЦИФРАХ');
		}
		if (index == 2) {
			$("input[name='info']").val('кнопка Заказать экспорт у нас - раздел ПЛЮСЫ');
		}
		if (index == 3) {
			$("input[name='info']").val('кнопка Узнать подробнее - раздел УСЛУГИ');
		}
		if (index == 4) {
			$("input[name='info']").val('кнопка Оставить заявку - раздел КОМУ ПОДХОДИТ');
		}
		if (index == 5) {
			$("input[name='info']").val('кнопка Оставить заявку - раздел ОТЗЫВЫ');
		}
		if (index == 6) {
			$("input[name='info']").val('кнопка Заказать услугу - раздел КАРТА');
		}
		if (index == 7) {
			$("input[name='info']").val('кнопка Заказать звонок - раздел КОНТАКТЫ');//
		}
		if (index == 8) {
			$("input[name='info']").val('кнопка Заказать экспорт - раздел О НАС (внутренняя страница)');
		}
		
	$("#callback").arcticmodal({
			openEffect: {
				type: "none"
			},
			closeEffect: {
				type: "none"
			}
		});
	});
	
	/* close windows */
	
	$(".close").click(function(){
		$.arcticmodal('close');
	});
	
	/* mask inputs */
	
	$.mask.definitions['~']='[+-]';
	$('input[name="phone"]').mask('+7 (999) 999-99-99');
	
	/* form validate */
	
	$("#screen_form").validate({
		rules: {
			name: {required: true},
			phone: {required: true}
		},
		messages: {
			name: {required: false},
			phone: {required: false}
		},
		submitHandler: function(form) {
			sendForm(form);
		}
	});
	
	$("#logistics_form").validate({
		rules: {
			city: {required: true},
			name: {required: true},
			phone: {required: true},
			email: {required: true}
		},
		messages: {
			city: {required: false},
			name: {required: false},
			phone: {required: false},
			email: {required: false}
		},
		submitHandler: function(form) {
			sendForm(form);
		}
	});

	$("#subscribe_form").validate({
		rules: {
			email: {required: true}
		},
		messages: {
			email: {required: false}
		},
		submitHandler: function(form) {
			sendForm(form);
		}
	});
	
	$("#contact_form").validate({
		rules: {
			name: {required: true},
			phone: {required: true}
		},
		messages: {
			name: {required: false},
			phone: {required: false}
		},
		submitHandler: function(form) {
			sendForm(form);
		}
	});

	$("#window_form").validate({
		rules: {
			name: {required: true},
			phone: {required: true}
		},
		messages: {
			name: {required: false},
			phone: {required: false}
		},
		submitHandler: function(form) {
			sendForm(form);
		}
	});

	
	
	
	

});
$(document).ready(function () {
	
	$('body').delegate('.warning-i .icon', 'mouseenter', function () {
		var t = $(this).siblings('.text');
		var textWidth = $(this).siblings('input,textarea').outerWidth() - 50;
		var textHeight = $(this).siblings('input,textarea').outerHeight() - 0;
		t.stop().animate({
			'width': textWidth,
			'height': textHeight,
			'padding': '10px 15px'
		}, 300, function () {
			$(this).find('em').show();
		});
	});
	$('body').delegate('.warning-i .icon', 'mouseleave', function () {
		var t = $(this).siblings('.text');
		t.find('em').hide();
		t.stop().animate({
			'width': '0',
			'padding': '10px 0'
		}, 300);
	});
	/* ==========================================================================
	   placeholder
	========================================================================== */
	$('input,textarea').focus(function () {
		$(this).data('placeholder', $(this).attr('placeholder'))
		$(this).attr('placeholder', '');
	});
	$('input,textarea').blur(function () {
		$(this).attr('placeholder', $(this).data('placeholder'));
	});
	/* ==========================================================================
	   маска телефона для поля input
	========================================================================== */
	$('input[type="tel"]').mask("+7 (999) 999-99-99");
	/* ==========================================================================
	   CLICK
	   ========================================================================== */
	//клик по иконке скролла
	$('.scroll').on('click', function () {
		$('html, body').stop().animate({
			scrollTop: $('.welcome').outerHeight()
		}, 500);
	});

	//клик по языковой панели
	$(".nav-languages").click(function () {
		if ($(".nav").is(":hidden")) {
			$(".nav").toggle();
		} else {
			$(".nav").toggle();
		}
	});
	$(document).on('click', function (e) {
		if (!$(e.target).closest(".nav-languages").length) {
			$('.nav').hide();
		}
		e.stopPropagation();
	});
	/* ==========================================================================
	   SLIDER
	   ========================================================================== */
	$.backstretch([
		"images/main-bg/1.jpg",
		"images/main-bg/2.jpg"
	], {
		duration: 6000,
		fade: 1250
	});
	/* ==========================================================================
	   FANCYBOX
	   ========================================================================== */
	$(".fancybox").fancybox({
		padding: 0,
		width: 580,
		autoHeight: true,
		autoSize: false,
		closeClick: false,
		openEffect: "fade",
		closeEffect: "fade"
	});
	$(".fancybox.w-860").fancybox({
		padding: 0,
		width: 860,
		autoHeight: true,
		autoSize: false,
		closeClick: false,
		openEffect: "fade",
		closeEffect: "fade"
	});
	$("a[rel=galery]").fancybox({
		padding: 0,
		'transitionIn': 'none',
		'transitionOut': 'none'
	});
	/* ==========================================================================
	   flexslider
	   ========================================================================== */
	$('#slider-1').flexslider({
		animation: 'fade',
		slideshow: true, //Включание автопроигрывания слайдшоу (true/false)
		slideshowSpeed: 6000,
		pauseOnHover: true
	});
	$('#slider-2').flexslider({
		animation: 'fade',
		slideshow: false, //Включание автопроигрывания слайдшоу (true/false)
		slideshowSpeed: 6000,
		pauseOnHover: true
	});

});

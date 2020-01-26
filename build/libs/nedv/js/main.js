$(document).ready( function(){

//скролл от кнопки на главном экране
	$(".mainScreen__btn_scroll").on('click', function(e) {
		e.preventDefault();

		var id = $(this).attr('href'),
			top = $(id).offset().top;

		$('body, html').animate({'scrollTop' : top}, 1500);
	});

//маска для телефона
	$(".phone").mask("+7 (999) 999-9999");

//слайдер для блока отзывы
	$(".reviews__slider").bxSlider({
		pager : false,
		prevSelector : '.reviews__slider_control_prev',
		nextSelector : '.reviews__slider_control_next',
		prevText : ' ',
		nextText : ' '

	});

//слайдер для блока достижения

	$(".achievements__slider").bxSlider({
		pager : false,
		prevSelector : '.achievements__slider_control_prev',
		nextSelector : '.achievements__slider_control_next',
		prevText : ' ',
		nextText : ' ',
		slideWidth: 217,
	    minSlides: 1,
	    maxSlides: 3,
	    moveSlides: 1,
	    slideMargin: 30
	});

//слайдер для блока сотрудничество
	$(".cooperation__slider").bxSlider({
		pager : false,
		prevSelector : '.cooperation__slider_control_prev',
		nextSelector : '.cooperation__slider_control_next',
		prevText : ' ',
		nextText : ' ',
		slideWidth: 217,
	    minSlides: 1,
	    maxSlides: 3,
	    moveSlides: 1,
	    slideMargin: 30
	});

//слайдер для блока сертификаты и свидетельства
	$(".certificates__slider").bxSlider({
		pager : false,
		prevSelector : '.certificates__slider_control_prev',
		nextSelector : '.certificates__slider_control_next',
		prevText : ' ',
		nextText : ' ',
		slideWidth: 211,
	    minSlides: 1,
	    maxSlides: 3,
	    moveSlides: 1,
	    slideMargin: 30
	});

//слайдер для блока отделения
	$(".offices__slider").bxSlider({
		pager : false,
		prevSelector : '.offices__slider_control_prev',
		nextSelector : '.offices__slider_control_next',
		prevText : ' ',
		nextText : ' ',
		slideWidth: 248,
	    minSlides: 1,
	    maxSlides: 3,
	    moveSlides: 1,
	    slideMargin: 45
	});

//клик для всплывания больших фото
	
	$(".show__foto").on('click', function(){
		var overlayFoto = $(".overlay__foto"),
			$this = $(this),
			id = $('#' + $this.attr('rel'));

			overlayFoto.fadeIn(500, function() {
				id.fadeIn(500);
			});
			//закрытие фото
			$(".overlay__foto, .close__btn").on('click', function(e) {
				e.preventDefault();

				id.fadeOut(500, function() {
					overlayFoto.fadeOut(500);
				});
			});
	});

//клик по кнопке вызова формы
	$(".show__popup").on('click', function(e) {
		e.preventDefault();
		var overlay = $('#fade'),
			$this = $(this),
			popup = $($this.attr('href')),
			popupThanks = $('.popup__thanks');

		overlay.fadeIn(500, function() {
			popup.css("left","0").animate({"opacity" : 1}, 500);
		});
		
		//закрытие popup
		$(".overlay, .popup__close").on('click', function(e) {
			e.preventDefault();
			popup.animate({"opacity" : 0}, 500, function() {
				$(this).css("left","-10000px");
				overlay.fadeOut(500);
			});
			popupThanks.css("display","none").animate({"opacity" : 0}, 500);
		});
	});

//клик по кнопке отправить
	$(".popup__form").submit(function(e) {
		e.preventDefault();

		var $this = $(this),
			popupThanks = $($this.children(".popup__btn").attr('rel'));

		$.ajax({
			url: $this.attr('action'),
			type: 'POST',
			data: $this.serialize(),
			success: function (data, textStatus, jqXHR) {
				$("#fade").fadeIn(500);
				$(".popup").css("left","-10000px").animate({"opacity" : 0}, 300,
					function() {
						popupThanks.css("display","block").animate({"opacity" : 1}, 300)
					});
			}
		});
	});

});

//карта
ymaps.ready(init);
    var myMap,
    	myPlacemark;

    function init(){     
        myMap = new ymaps.Map("map", {
            center: [59.958706,30.35071199999993],
            zoom: 14,
            controls: ['zoomControl']
        });
        myMap.behaviors
        	.disable('scrollZoom');
        //маркер на карте
        myPlacemark = new ymaps.Placemark([59.958706,30.35071199999993], 
        { 
            hintContent: 'Санкт-Петербург!', 
            balloonContent: 'Россия' 
        }, 
        {
        	iconLayout: 'default#image',
	        iconImageHref: 'images/mark.png',
	        iconImageSize: [42, 59],
	        iconImageOffset: [-20, -42]
        });

        myMap.geoObjects.add(myPlacemark);
    }
'use strict'

$(document).ready(function() {

	// Слайдер на главном экране

	(function() {

		var s = $(".mainScreen__slider");
		if(s.length) {
			$(".mainScreen__slider").slick({
				autoplay: true,
				autoplaySpeed: 4500,
				arrows: false,
				speed: 1000,
				dots: false,
				fade: true,
				pauseOnHover: false
			});
		}
	})();

	// инициализация слайдеров в блоке оборудования

	(function() {
		var s = $(".equipment__slider__wrap");

		if(s.length) {

			// Слайдер на блоке холодильное оборудование

			$("#equipment__slider-1").slick({
				autoplay: true,
				autoplaySpeed: 2000,
				arrows: false,
				speed: 1000,
				dots: false,
				pauseOnHover: false
			});

			// Слайдер на блоке тепловое оборудование

			$("#equipment__slider-2").slick({
				autoplay: true,
				autoplaySpeed: 2000,
				arrows: false,
				speed: 1000,
				dots: false,
				pauseOnHover: false
			});

			// Слайдер на блоке нейтральное оборудование

			$("#equipment__slider-3").slick({
				autoplay: true,
				autoplaySpeed: 2000,
				arrows: false,
				speed: 1000,
				dots: false,
				pauseOnHover: false
			});

		}

	})();

	// анимация элементов

	(function() {

		var m = $(".page__main");
		if(m.length) {
			var wow = new WOW(
		    	{
		        	offset:       100,          // default
		        	mobile:       false       // keep it on mobile
		      	}
			)
		   	wow.init();
		}

	})();
	

   	// мобильное меню и попапы
   	(function() {

   		var menu = $(".mobileMenu"),
   			overlay = $(".overlay"),
   			close = $(".overlay, .mobileMenu__close, .popup__close"),
   			burger = $(".burger"),
   			body = $("body"),
   			open = $(".open__popup"),
   			popup = $(".popup");

   		burger.click(function(evt) {
   			evt.preventDefault();

   			body.css("overflow","hidden");
   			overlay.addClass("active");
   			menu.addClass("active");
   		});

   		close.click(function(evt) {
   			evt.preventDefault();

   			body.css("overflow","auto");
   			overlay.removeClass("active");
   			menu.removeClass("active");
   			popup.removeClass("active");
   		});

   		open.click(function(evt) {
   			evt.preventDefault();

   			var id = $(this).attr("href");
   			overlay.addClass("active");
   			$(id).addClass("active");
   		});

   	})();

});


// Карта яндекса

	ymaps.ready(init);
	var myMap;
	function init () {
	  	myMap = new ymaps.Map('map', {
	    	center: [59.943075, 30.512231],
	    	controls: ['zoomControl'],
	    	zoom: 16
	  	}, {
	    	searchControlProvider: 'yandex#search'
	  	});

	  	myMap.behaviors
	  		.disable('scrollZoom');

      	//Добавление меток на карту
      	myMap.geoObjects
      		.add(new ymaps.Placemark([59.943075, 30.512231], {
        		balloonContent: 'Санкт-Петербург,<br/> ул. Заневский пост, 3 к1',
        		iconCaption: 'HappyChef'
      		}))

    	}
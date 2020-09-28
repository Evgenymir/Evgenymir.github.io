$(document).ready(function () {
	
	// открытие попапов и мобильного меню

	(function () {

		var open = $(".openPopup"),
			popup = $(".popup"),
			popupThanks = $(".popupThanks"),
			overlay = $(".overlay"),
			close = $(".popup__close, .overlay, .close__button"),
			body = $("body"),
			menu = $(".mobileMenu"),
			menuLink = $(".mobileMenu .menu__link-0"),
			burger = $(".burger");

		open.click(function(evt) {
			evt.preventDefault();

			var href = $(this).attr("href");
			overlay.addClass("active");
			$(href).addClass("active");
		});
		close.click(function(evt) {
			evt.preventDefault();
			popup.removeClass("active");
			overlay.removeClass("active");

		});
		menuLink.click(function(evt) {
			evt.preventDefault();

			burger.removeClass("active");
			menu.removeClass("active");
			overlay.removeClass("active");
		});

		burger.click(function(evt) {
			evt.preventDefault();

			burger.toggleClass("active");
			menu.toggleClass("active");
		})

	})();

	// планый переход по якорям в меню

	$(".menuScroll").on("click", "a", function(evt) {
		evt.preventDefault();

		var id = $(this).attr("href"),
			top = $(id).offset().top;
		$("body,html").animate({scrollTop: top}, 1500);
	});

	// клик по кнопке заказать звонок 
	// и кнопка вниз на главном экране
	// и кнопка вниз в портфолио
	// и кнопки начать сейчас

	$(".scroll").on("click", function(evt) {
		evt.preventDefault();
		var id = $(this).attr("href"),
			top = $(id).offset().top;
		$("body,html").animate({scrollTop: top}, 1000);
	});

	// маска для телефона

	$("input[type=tel]").mask("+7 (999) 999-99-99");


	// инициализация слайдера в портфолио
	$(".portfolio__slider").bxSlider({
		pager: false,
		prevText: "",
		nextText: "",
		prevSelector: $(".portfolio__controls__prev"),
		nextSelector: $(".portfolio__controls__next"),
		slideMargin: 20,
		easing: "ease-in",
		speed: 700
	});

	// инициализация слайдера для экрана наши клиенты
	$(".ourClient__slider").bxSlider({
		pager: false,
		prevText: "",
		nextText: "",
		prevSelector: $(".ourClient__slider__control__prev"),
		nextSelector: $(".ourClient__slider__control__next"),
		slideMargin: 20,
		easing: "ease-in",
		speed: 700
	});

	// добавление класса при скролле и расчет расстояния от верха окна браузера
	var mainScreen = $(".mainScreen").offset().top,       		// экран услуг
		serviceScreen = $(".services").offset().top - 50,       // экран услуг
		portfolioScreen = $(".portfolio").offset().top - 50,	// экран портфолио
		stepWorkScreen = $(".stepWorks").offset().top - 50,		// экран этапы работы
		feedBackScreen = $(".feedBack").offset().top - 50,		// экран обратная связь
		weWorkScreen = $(".weWork").offset().top - 50,			// экран как мы работаем
		ourClientScreen = $(".ourClient").offset().top - 50,	// экран наши клиенты
		contactScreen = $(".contact").offset().top - 50;		// экран контакты
		footerNextScreen = $(".footerNextScreen"),				// кнопка вниз на планшете и телефоне
		menuItem = $(".menu__item-0");							// ссылки в меню

		$(window).scroll(function() {

			// Определение экрана услуг и футер
			if($(this).scrollTop() >= mainScreen) {
				$(".footer").removeClass("textWhite");
				menuItem.removeClass("active");
				footerNextScreen.attr("href", "#services");
			}
			// Определение экрана услуги
			if($(this).scrollTop() >= serviceScreen ) {
				$(".footer").addClass("textWhite");
				menuItem.removeClass("active");
				menuItem.siblings(":nth-child(1)").addClass("active");
				footerNextScreen.attr("href", "#portfolio");
			}
			// Определение экрана портфолио
			if($(this).scrollTop() >= portfolioScreen) {
				menuItem.removeClass("active");
				menuItem.siblings(":nth-child(2)").addClass("active");
				footerNextScreen.attr("href", "#stepWork");
			}
			// Определение экрана этапы работы
			if($(this).scrollTop() >= stepWorkScreen) {
				menuItem.removeClass("active");
				menuItem.siblings(":nth-child(3)").addClass("active");
				footerNextScreen.attr("href", "#feedBack");
			}
			// Определение экрана обратная связь
			if($(this).scrollTop() >= feedBackScreen) {
				menuItem.removeClass("active");
				menuItem.siblings(":nth-child(4)").addClass("active");
				footerNextScreen.attr("href", "#weWork");
			}
			// Определение экрана как мы работаем
			if($(this).scrollTop() >= weWorkScreen) {
				menuItem.removeClass("active");
				menuItem.siblings(":nth-child(5)").addClass("active");
				footerNextScreen.attr("href", "#ourClient");
			}
			// Определение экрана наши клиенты
			if($(this).scrollTop() >= ourClientScreen) {
				menuItem.removeClass("active");
				menuItem.siblings(":nth-child(6)").addClass("active");
				footerNextScreen.attr("href", "#contact");
			}
			// Определение экрана контакты
			if($(this).scrollTop() >= contactScreen) {
				menuItem.removeClass("active");
				menuItem.siblings(":nth-child(7)").addClass("active");
				footerNextScreen.attr("href", "#mainScreen");
				footerNextScreen.addClass("footerNextScreenTop");
			}else {
				footerNextScreen.removeClass("footerNextScreenTop");
			}
		});

	// прокрутка страниц

	$(function() {
		$.scrollify({
			section : ".block__down",
		});
	});

	// Валидация формы

	var formValidator = function() {

	  	var init = function init(form) {
	    	validate(form);
	  	};

	  	var validate = function validate(form) {
	        form.on("submit", function (evt) {
	          	evt.preventDefault();
	          	var elements = form.find("input, textarea").not('input[type="file"], input[type="hidden"],  input[type="email"]');
	          	var valid = true;
	          	$.each(elements, function(index, value) {
	            	var element = $(value);
	            	var val = element.val();
		            if (val.length === 0) {
		              	element.addClass("input-error");
		              	valid = false;
		            }else {
		              	element.removeClass("input-error");
		              	element.addClass('input-success');
		            }
	          	});
	          	if (valid === true) {
	            	var formData = form.serialize();
		            $.ajax({
		              	url: $(this).attr('action'),
		              	type: 'POST',
		              	data: formData,
		              	success: function (data) {
		                	$(".overlay").addClass("active");
		                	$(".popupThanks").addClass("active");
		              	}
		            });
	          	}
	        });

	        form.on("change", function (evt) {
	          	evt.preventDefault();
	          	var elements = form.find("input, textarea").not('input[type="file"], input[type="hidden"], input[type="email"]');
	          	var valid = true;
				$.each(elements, function(index, value) {
					var element = $(value);
					var val = element.val();
					if (val.length === 0) {
					  	element.addClass("input-error");
					  	element.removeClass('input-success');
					  	valid = false;
					}else {
					  	element.removeClass("input-error");
					  	element.addClass('input-success');
					}
				});
	        });
	  	};

		return {
			init: init
		};

	}();
	if ($('.feedBack__form').length) {
	    formValidator.init($('.feedBack__form'));
	}



}); // document ready end

//карта yandex
	ymaps.ready(init);
	var myMap;
	var centerCord,
		iconSize,
		iconOffset;
	if($(window).width() > 480) {
		centerCord = [60.03475862377825,30.408040518524153];
		iconSize = [87, 110];
		iconOffset = [-50, -100];
	}
	if($(window).width() <= 480) {
		centerCord = [60.034896689111584,30.40468360052484];
		iconSize = [50, 60];
		iconOffset = [-25, -40];
	}
	if($(window).height() <= 450) {
		centerCord = [60.03332313048367,30.408468474469895];
		iconSize = [50, 60];
		iconOffset = [-25, -40];
	}
	function init () {
  	myMap = new ymaps.Map('map', {
    	center: centerCord,
    	controls: ['zoomControl'],
    	zoom: 16
  	}, {
    	searchControlProvider: 'yandex#search'
  	});

  	myMap.behaviors
  	.disable('scrollZoom');

	//Добавление меток на карту
	myMap.geoObjects
		.add(new ymaps.Placemark([60.03292278832391,30.40482186770628], {
			balloonContent: 'Текст метки',
			iconCaption: 'Текст метки',
			
		},
		{
			iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/mark.png',
            // Размеры метки.
            iconImageSize: iconSize,
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: iconOffset
		}))

    }
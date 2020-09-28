$(document).ready(function() {

	//липкая шапка
	$(window).scroll(function() {
		if($(this).scrollTop() >= 450) {
			$(".header").addClass("scroll");
		}else {
			$(".header").removeClass("scroll");
		}
	});
 
	// Открытие попапов и меню мобильное

	(function() {
		var openPopup = $(".open"),
			popup = $(".popup"),
			close = $(".popup__close, .overlay, .mobileMenu__close"),
			overlay = $(".overlay"),
			mobileMenu = $(".mobileMenu"),
			burger = $(".burger");

		openPopup.click(function(evt) {
			evt.preventDefault();
			var div = $(this).attr("href");
			
			overlay.addClass("active");
			mobileMenu.removeClass("active");
			$(div).addClass("active");
		});

		burger.click(function() {
			overlay.addClass("active");
			mobileMenu.addClass("active");
		});

		close.click(function(evt) {
			evt.preventDefault();

			popup.removeClass("active");
			mobileMenu.removeClass("active");
			overlay.removeClass("active");
		});

	})();

	// слайдер на главном экране
	(function() {
		var slider = $(".mainScreen__wrap");
		if(slider.length) {
			$(".mainScreen__slider").bxSlider({
				mode: "fade",
				speed: "300",
				pager: false,
				auto: true,
				prevText: "",
				nextText: "",
				prevSelector: $(".mainScreen__controls__prev"),
				nextSelector: $(".mainScreen__controls__next")
			});
		}
	})();

	// табы первые как это работает

	$(".howItWorks__tabs__item").on("click", function(evt) {
		evt.preventDefault();

		var item = $(this),
			container = item.closest(".howItWorks__tabs__wrap"),
			content = container.find(".howItWorks__tabs__content__item"),
			ndx = item.index(),
			reqItem = content.eq(ndx),
			activeItem = content.filter('.active');

		item.addClass("active")
			.siblings()
			.removeClass("active");

		activeItem.fadeOut(100, function() {
			reqItem.fadeIn(100, function() {
				$(this).addClass("active")
					   .siblings()
					   .removeClass("active");
			});
		});
	});

	// Внутренние табы первых как это работает

	$(".howItWorks__tabsTwo__item").on("click", function(evt) {
		evt.preventDefault();

		var item = $(this),
			container = item.closest(".howItWorks__tabsTwo__wrap"),
			content = container.find(".howItWorks__tabsTwo__content__item"),
			ndx = item.index(),
			reqItem = content.eq(ndx),
			activeItem = content.filter('.active');

		item.addClass("active")
			.siblings()
			.removeClass("active");

		activeItem.fadeOut(100, function() {
			reqItem.fadeIn(100, function() {
				$(this).addClass("active")
					   .siblings()
					   .removeClass("active");
			});
		});
	});

	// табы вторые как это работает

	$(".howItWorksBottom__tabs__item").on("click", function(evt) {
		evt.preventDefault();

		var item = $(this),
			container = item.closest(".howItWorksBottom__tabs__wrap"),
			content = container.find(".howItWorksBottom__tabs__content__item"),
			ndx = item.index(),
			reqItem = content.eq(ndx),
			activeItem = content.filter('.active');

		item.addClass("active")
			.siblings()
			.removeClass("active");

		activeItem.fadeOut(100, function() {
			reqItem.fadeIn(100, function() {
				$(this).addClass("active")
					   .siblings()
					   .removeClass("active");
			});
		});
	});

	// Cлайдер благодарные клиенты

	(function() {
		var slider = $(".gratefulClient__wrap");
		if(slider.length) {

			$(".gratefulClient__slider").bxSlider({
				pager: false,
				minSlides: 1,
				maxSlides: 5,
				moveSlides: 1,
				slideWidth: 225,
				slideMargin: 100,
				prevText: "",
				nextText: "",
				prevSelector: $(".gratefulClient__slider__controls__prev"),
				nextSelector: $(".gratefulClient__slider__controls__next")
			});
			
		}
	})();
	
	// слайдер в карточке продукции
	(function() {
		var slider = $(".productCard__sliderWrap");
		if(slider.length) {

			$(".productCard__slider__content").bxSlider({
				speed: 1000,
				pagerCustom: '#productCard__slider__pager',
				nextText: '',
				prevText: '',
				prevSelector: '.productCard__slider__controls__prev',
				nextSelector: '.productCard__slider__controls__next',
			});
		}
	})();

	//Анимация wow эффекта
	(function() {
		var w = $(".wow")
		if(w.length) {
			new WOW().init();
		}
	})();

	// Валидация формы

	var formValidator = function() {

		var init = function init(form) {
			validate(form);
		};

		var validate = function validate(form) {
			form.on("submit", function( evt ) {
				evt.preventDefault();
				var elements = form.find("input, textarea").not('input[type="file"], input[type="hidden"]'),
					valid = true;
				$.each(elements, function(index, value) {
					var element = $(value),
						val = element.val();
					if(val.length === 0) {
						element.addClass("input-error");
						valid = false;
					}else {
						element.removeClass("input-error");
						element.addClass("input-success");
					}
				});

				if( valid === true) {
					var formData = form.serialize();
		            $.ajax({
		              url: $(this).attr('action'),
		              type: 'POST',
		              data: formData,
		              success: function (data) {
		                $(".fade").fadeIn(500, function() {
		                  $(".popap__thanks").fadeIn(500);
		                });
		              }
		            });
				}
			});

			form.on("change", function( evt ) {
				evt.preventDefault();
				var elements = form.find("input, textarea").not('input[type="file"], input[type="hidden"]'),
					valid = true;
				$.each(elements, function(index, value) {
					var element = $(value),
						val = element.val();
					if(val.length === 0) {
						element.addClass("input-error");
						element.removeClass("input-success");
						valid = false;
					}else {
						element.removeClass("input-error");
						element.addClass("input-success");
					}
				});
			});
		};

		return {
			init: init
		};

	}();

	if($(".formCallBack").length) {
		formValidator.init($(".formCallBack"));
	}
	if($(".formOrder").length) {
		formValidator.init($(".formOrder"));
	}
	if($(".contactPageContent__form").length) {
		formValidator.init($(".contactPageContent__form"));
	}

	// Маска для поля с телефоном
	$("input[type=tel]").mask("+7 (999) 999-99-99");


});  // Закончился $(document).ready();

// карта

	(function() {
		var map = $(".map");
		if(map.length) {

			ymaps.ready(init);
			var myMap;

			function init () {
			myMap = new ymaps.Map('map', {
			    center: [59.94979406413906,30.351827499999956],
			    controls: ['zoomControl'],
			    zoom: 14
			}, {
			    searchControlProvider: 'yandex#search'
			});

			myMap.behaviors
			.disable('scrollZoom');

		      //Добавление меток на карту
		    myMap.geoObjects
		      .add(new ymaps.Placemark([59.94979406413906,30.351827499999956], {
		        balloonContent: 'Воскресенская набережная, 30',
		        iconCaption: 'Воскресенская набережная, 30'
		      }))

		    }
		}

	})();
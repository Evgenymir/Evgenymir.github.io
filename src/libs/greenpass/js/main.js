ymaps.ready(init);
    var myMap,
    	myPlacemark;

    function init(){     
        myMap = new ymaps.Map("map", {
            center: [59.93565442943564,30.371203623437562],
            zoom: 14,
            controls: ['zoomControl']
        });
        myMap.behaviors
        	.disable('scrollZoom');

/* ===============================================
	для маркера карты
   ===============================================*/
        myPlacemark = new ymaps.Placemark([59.933167064158646,30.371060499999977], 
        { 
            hintContent: 'Санкт-Петербург!', 
            balloonContent: 'Россия' 
        }, 
        {
        	iconLayout: 'default#image'
        });

        myMap.geoObjects.add(myPlacemark);

    }

$(function() {
	$(window).scroll(function() {
		if($(this).scrollTop()) {
			$(".header").addClass("fixed");
		} else {
			$(".header").removeClass("fixed");
		}
	});
});


$(document).ready(function() {

	//Плавный переход от кнопки узнать больше на главном экране
	$("#mainScreen__topContent__more__wrap").on('click', 'a', function(e) {
		e.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;

		$("body,html").animate({scrollTop: top}, 1500);
	});


	//Клик по кнопке меню
	$(".header__right__menu__click").on('click', function() {
		$(".fixedMenu").animate({"top":"0"}, 500);
	});
	$(".fixedMenu__close").on('click', function() {
		$(".fixedMenu").animate({"top":"-102%"}, 500);
	});

	//Слайдер на главном экране
	(function ($) {
	    var slider1 = $('.mainScreen__slider__wrapper');
	    if (slider1.children('.mainScreen__slider').length) {
	    	$(".mainScreen__slider").bxSlider({
				mode: "fade",
				pager: false,
				controls: false,
				auto: true
			});
	    }
	})(jQuery);

	//Второй слайдер
	(function ($) {
    var slider2 = $('.transportation__slider__wrap');
	    if (slider2.children('.transportation__slider').length) {
	    	$(".transportation__slider").bxSlider({
				nextText: "",
				prevText: "",
				prevSelector: ".transportation__slider__controls__prev",
				nextSelector: ".transportation__slider__controls__next"
			});
	    }
	})(jQuery);

	// Клик по кнопке подробнее
	$(".transportation__link").on('click', function(e) {
		e.preventDefault();
		var $this = $(this),
			item = $this.prev(".transportation__content__hide_desc");

		if(item.hasClass("active")) {
			item.removeClass('active').slideUp(500);
			$this.removeClass('top').html("Подробнее");
		}else {
			item.addClass('active').slideDown(500);
			$this.addClass('top').html("Закрыть");
		}
	});

	//Маска для телефона
	$("input[name=phone]").mask("+7 (999) 999-99-99");

	//Попапы

	$(".header__button").on('click', function(e) {
		e.preventDefault();

		var popup = $("#form__collBack"),
			fade = $(".overlay"),
			close = $(".form__wrap__close");

		fade.animate({"height" : "100%"}, 500, function() {
			popup.animate({"left":"50%"}, 400);

			fade.click(function() {
				popup.animate({"left":"-120%"}, 500, function() {
					fade.animate({"height":"0"});
				})
			});

			close.click(function() {
				popup.animate({"left":"-120%"}, 500, function() {
					fade.animate({"height":"0"});
				})
			});
		});
	});

	$(".popup__open2").on('click', function(e) {
		e.preventDefault();

		var popup = $("#form__checkout"),
			fade = $(".overlay"),
			close = $(".form__wrap__close");

		fade.animate({"height" : "100%"}, 500, function() {
			popup.animate({"left":"50%"}, 400);

			fade.click(function() {
				popup.animate({"left":"-120%"}, 500, function() {
					fade.animate({"height":"0"});
				})
			});

			close.click(function() {
				popup.animate({"left":"-120%"}, 500, function() {
					fade.animate({"height":"0"});
				})
			});
		});
	});

	// Валидация форм
	var formValidator = function() {

	  	var init = function init(form) {
	    	validate(form);
	  	};

	  	var validate = function validate(form) {
	        form.on("submit", function (evt) {
	          	evt.preventDefault();
	          	var elements = form.find("input").not('input[type="file"], input[type="email"], input[type="hidden"]');
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
		                	$(".fade").fadeIn(500, function() {
		                  		$(".popap__thanks").fadeIn(500);
		                	});
		              	}
		            });
	          	}
	        });

	        form.on("change", function (evt) {
	          	evt.preventDefault();
	          	var elements = form.find("input, textarea").not('input[type="file"], input[type="hidden"]');
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
	if ($('form[name="callBack"]').length) {
	    formValidator.init($('form[name="callBack"]'));
	}
	if ($('form[name="order"]').length) {
	    formValidator.init($('form[name="order"]'));
	}
	if ($('form[name="consultation__order"]').length) {
	    formValidator.init($('form[name="consultation__order"]'));
	}

});
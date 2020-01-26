$(document).ready(function() {

	//Инициализируем доводчик страниц
	scrolliFy();

	//Открытие и закрытие попапов
	(function() {
		
		var show = $(".openPopup"),
			close = $(".popup__close, .overlay"),
			overlay = $(".overlay"),
			modal = $(".popup");

		show.click(function(evt) {
			evt.preventDefault();

			//Закрытие мобильного меню
			$(".mobileMenu").removeClass("active");

			// Открытие попапа
			var div = $(this).attr("href");
			overlay.addClass("active");
			$(div).addClass("active");
		});

			// Закрытие попапов
		close.click(function(evt) {
			modal.removeClass("active");
			overlay.removeClass("active");
		});

	})();

	// Мобильное меню

	(function() {

		var burger = $(".burger"),
			overlay = $(".overlay"),
			menu = $(".mobileMenu"),
			close = $(".menu__close, .overlay");

		burger.click(function() {
			overlay.addClass("active");
			menu.addClass("active");
		});

		close.click(function() {
			menu.removeClass("active");
			overlay.removeClass("active");
		});

	})();

	//Маска для телефона
	$("input[type=tel]").mask("+7 (999) 999-99-99");

	//Плавный переход по якорям
	(function() {

		//Клик по меню

		$(".menu").on("click", "a", function(evt) {
			evt.preventDefault();

			var div = $(this).attr("href"),
				top = $(div).offset().top;

			$("body, html").animate({scrollTop: top}, 1500);

		});

		//Клик по лого

		$(".logoWrap").on("click", "a", function(evt) {
			evt.preventDefault();

			var div = $(this).attr("href"),
				top = $(div).offset().top;

			$("body, html").animate({scrollTop: top}, 1500);

		});

		//Клик по меню мобильному

		$(".menu__list").on("click", "a", function(evt) {
			evt.preventDefault();

			var div = $(this).attr("href"),
				top = $(div).offset().top,
				overlay = $(".overlay"),
				mobileMenu = $(".mobileMenu");

			$("body, html").animate({scrollTop: top}, 1500);

			mobileMenu.removeClass("active");
			overlay.removeClass("active");

		});

	})();

	//Инициализация слайдера

	$(".sliderBlock__list").bxSlider({
		pager: false,
		prevText: "",
		nextText: "",
		prevSelector: $(".sliderBlock__controls__prev"),
		nextSelector: $(".sliderBlock__controls__next"),
		auto: true,
		speed: 700
	});

	// Валидация формы
	
    var formValidator = function() {

      	var init = function init(form) {
        	validate(form);
      	};

      	var validate = function validate(form) {
	        form.on("submit", function (evt) {
	          	evt.preventDefault();
	          	var elements = form.find("input, textarea").not('input[type="file"], input[type="email"], input[type="hidden"]');
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
	          	var elements = form.find("input, textarea").not('input[type="file"], input[type="email"], input[type="hidden"]');
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
    // форма заказать звонок
    if ($('.form[name="callBack"]').length) {
        formValidator.init($('.form[name="callBack"]'));
    }
    // форма заказа
    if ($('.form[name="order"]').length) {
        formValidator.init($('.form[name="order"]'));
    }

});

(function() {
	$(window).scroll(function() {

		if($(this).scrollTop() >= 400) {
			$(".header").addClass("scroll");
		}else {
			$(".header").removeClass("scroll");
		}

	});
})();

$(window).resize(function() {
	scrolliFy();
});

//Прокрутка страниц
function scrolliFy () {
	if($(window).width() >= 769) {
		$(function() {
	      $.scrollify({
	        section : ".block__down",
	      });
	    });
	}
}

		




		
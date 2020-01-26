$(document).ready(function() {

	//Открыти меню
	(function() {
		var burger = document.querySelector(".burger");
		var mobileMenu = document.querySelector(".header__left");
		var overlay = document.querySelector(".overlay");
		var close = document.querySelector(".menuClose");
		var body = document.querySelector("body");

		var openMenu = function() {
			overlay.classList.add("active");
			body.style.overflow = "hidden";
			mobileMenu.classList.add("active");
		};
		var closeMenu = function() {
			mobileMenu.classList.remove("active");
			body.style.overflow = "auto";
			overlay.classList.remove("active");
		};
		burger.addEventListener("click", function() {
			openMenu();
		});
		close.addEventListener("click", function() {
			closeMenu();
		});
		overlay.addEventListener("click", function() {
			closeMenu();
		});
	})();


	(function() {
		var slider = $(".projectSlider");
		if(slider.length) {
			//Слайдер проектов
			$(".projectSlider").bxSlider({
				pager: false,
				prevText: "",
				nextText: "",
				prevSelector: ".projectSlider__control__prev",
				nextSelector: ".projectSlider__control__next"
			});
		}

	})();

	//Слайдшоу картинок в карточке товара
	(function() {
		var slideShow = $(".slideshow");
		if(slideShow.length) {
			$(".slideshow__nav_link").on('click', function(e) {
				e.preventDefault();

				var
					$this = $(this),
					container = $this.closest('.slideshow'),
					display = container.find('.slideshow__display'),
					item = $this.closest('.slideshow__nav_item'),
					path = $this.attr('href'),
					duration = 400,
					preloader = $('.slideshow__preloader');

				if(!item.hasClass('active')){

					preloader.show();

					display.fadeOut(duration, function() {
						$(this).attr('src', path).fadeIn(function(){
							$(this).fadeIn(duration);
							preloader.hide();
						});
					});

					item.addClass('active')
						.siblings()
						.removeClass('active');
				}
			});
		}
	})();

	//Открытие попапов

	(function() {

		var openPopup = $(".popupOpen");
		var popup = $(".popup");
		var overlay = $(".overlay");
		var close = $(".popup__close, .overlay");
		var mobileMenu = $(".header__left");
		var body = $("body");

		openPopup.click(function(evt) {
			evt.preventDefault();
			var href = $(this).attr('href');

			body.css("overflow","hidden");
			mobileMenu.removeClass("active");
			overlay.addClass("active");
			$(href).addClass("active");
		});

		close.click(function(evt) {
			evt.preventDefault();

			body.css("overflow","auto");
			popup.removeClass("active");
			overlay.removeClass("active");
		});

	})();

	// Валидация форм

	var formValidator = function(){

		var init = function init(form) {
			validate(form);
		};

		var validate = function validate(form) {
			form.on("submit", function (evt) {
				evt.preventDefault();
				var elements = form.find("input, textarea").not('input[type="file"], input[type="email"], input[type="hidden"]'),
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
				if(valid === true) {
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
				var elements = form.find("input, textarea").not('input[type="file"], input[type="email"], input[type="hidden"]'),
					valid = true;
				$.each(elements, function(index, value) {
					var element = $(value),
						val = element.val();
					if(val.length === 0) {
						element.removeClass("input-success");
						element.addClass("input-error");
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
		}

	}();

	// форма обратного звонка
	if($("form[name='callBack']").length) {
		formValidator.init($("form[name='callBack']"));
	}
	// форма заказать проект
	if($("form[name='orderProject']").length) {
		formValidator.init($("form[name='orderProject']"));
	}
	// форма заказать услугу
	if($("form[name='orderServices']").length) {
		formValidator.init($("form[name='orderServices']"));
	}
		


});
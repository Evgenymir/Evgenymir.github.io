$(document).ready(function() {

	(function() {
		
		//Инициализация слайдера главный экран

		$(".mainScreen__slider").bxSlider({
			pager: false,
			prevText: '',
			nextText: '',
			prevSelector: $(".mainScreen__slider__control__prev"),
			nextSelector: $(".mainScreen__slider__control__next")
		});

		//Инициализация слайдера лучшие предложения
		sliderResize();

		//Инициализация слайдера все предложения
		$(".viewOffer__slider").bxSlider({
			minSlides: 1,
			maxSlides: 3,
			moveSlides: 1,
			slideWidth: 600,
			slideMargin: 30,
			prevText: '',
			nextText: '',
			prevSelector: $(".viewOffer__slider__control__prev"),
			nextSelector: $(".viewOffer__slider__control__next")
		});

		//мобильное меню

		var menu = $(".menu"),
			overlay = $(".overlay"),
			close = $(".menu__close, .overlay");

		$(".burger").on("click", function(evt) {
			evt.preventDefault();

			menu.addClass("active");
			overlay.addClass("active");
			$("body").css("overflow","hidden");
		});

		close.click(function() {
			menu.removeClass("active");
			overlay.removeClass("active");
			$("body").css("overflow","auto");
		});

		//переход по якорям

		$(".menu").on("click", "a", function(evt) {
			evt.preventDefault();
			var id = $(this).attr("href"),
				top = $(id).offset().top;
			$('body,html').animate({scrollTop: top}, 1500);

			menu.removeClass("active");
			overlay.removeClass("active");
			$("body").css("overflow","auto");

		});

		$(".viewOffer__arrowDown").on("click", "a", function(evt) {
			evt.preventDefault();
			var id = $(this).attr("href"),
				top = $(id).offset().top;
			$('body,html').animate({scrollTop: top}, 1500);

		});

	})();

	// Валидация формы

	var formValidator = function() {
		var init = function init(form){
			validate(form);
		};

		var validate = function validate(form) {
			form.on("submit", function(evt) {

				evt.preventDefault();
				var elements = form.find("input, textarea").not('input[type="file"], input[type="hidden"], input[name="contact__form__comment"]'),
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
						url: $(this).attr("action"),
						type: "POST",
						data: formData,
						success: function (data) {
							$(".overlay").addClass("active");
							$(".popup__thanks").addClass("active");
						}
					});
				}

			});

			form.on("change", function(evt) {

				evt.preventDefault();
				var elements = form.find("input, textarea").not('input[type="file"], input[type="hidden"], input[name="contact__form__comment"]'),
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

	if($(".bestOffer__order__form").length) {
		formValidator.init($("form[name='bestOffer__form']"));
	}
	if($(".contact__form").length) {
		formValidator.init($("form[name='contact__form']"));
	}

});

$(window).resize(function(){
  sliderResize();
});

function sliderResize() {
	var slider = $(".bestOffer__list");
	if($(window).width() <= 768 ) {
		slider.bxSlider({
			prevText: '',
			nextText: ''
		});
	}
}
$(document).ready(function() {

	//Вызов мобильного меню
	$(".burger").on('click', function() {
		var $this = $(this),
			menu = $(".mobileMenu"),
			overlay = $(".overlay");

		if($this.hasClass('click')) {
			$this.removeClass('click');
			$("body").css("overflow","auto");
			menu.animate({"left" : "-100%"}, 500, function() {
				overlay.fadeOut(500);
			});
		}else {
			$("body").css("overflow","hidden");
			overlay.fadeIn(500, function() {
				$this.addClass('click');
				menu.animate({"left" : "0"}, 500, function() {
					overlay.click(function() {
						$("body").css("overflow","auto");
						$this.removeClass('click');
						menu.animate({"left" : "-100%"}, 500, function() {
							overlay.fadeOut(500);
						});
					});
				});
			});
		}
	});

	//Вызов формы

	$(".popup__open").on('click', function(e) {
		e.preventDefault();

		var popup = $(".popup__theatre"),
			overlay = $(".overlayBlack"),
			close = $(".popup__close");

		$("body").css("overflow","hidden");
		overlay.fadeIn(400, function() {
			popup.animate({"left":"50%"}, 400, function() {
				$(".overlayBlack, .popup__close").on('click', function() {
					$("body").css("overflow","auto");
					popup.animate({"left":"-3000px"}, 400, function() {
						overlay.fadeOut(400);
					});
				});
			});
		});
	});

	$(".popup__open2").on('click', function(e) {
		e.preventDefault();

		var popup = $(".popup__tour"),
			overlay = $(".overlayBlack"),
			close = $(".popup__close");

		$("body").css("overflow","hidden");
		overlay.fadeIn(400, function() {
			popup.animate({"left":"50%"}, 400, function() {
				$(".overlayBlack, .popup__close").on('click', function() {
					$("body").css("overflow","auto");
					popup.animate({"left":"-3000px"}, 400, function() {
						overlay.fadeOut(400);
					});
				});
			});
		});
	});

	//Маска для телефона
	(function() {
		var m = $("input[type=phone]");
		if(m.length) {
			$("input[type=phone]").mask("+7 (999) 999-99-99");
		}
	})();


});
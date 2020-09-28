(function($) {
	var map = $(".treatmentOnMap");
	if(map.length) {
		ymaps.ready(init);
	    var myMap,
	    	myPlacemark;

	    function init(){     
	        myMap = new ymaps.Map("treatmentOnMap", {
	            center: [59.925420858884536,30.341136413832842],
	            zoom: 13,
	            controls: ['zoomControl']
	        });
	        myMap.behaviors
	        	.disable('scrollZoom');

	/* ===============================================
		для нескольких маркеров
	   ===============================================*/
	        var coords = [
				[59.920442619922234,30.354473854492145], 
				[59.91043994821003,30.309162281425163], 
				[59.93696558515404,30.316932159682448]
			],
			myCollection = new ymaps.GeoObjectCollection({}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/mark_red.png',
				iconImageSize: [13, 13],
				iconImageOffset: [0, 0]
		    });

		    coords.forEach(function(item) {
		    	myCollection.add(new ymaps.Placemark(item));
		    });

		    myMap.geoObjects.add(myCollection);


	    }
	}

})(jQuery);

$(document).ready(function() {
	//троеточие в новостях 
    var size = 600,
    newsContent= $('.news__content__text p'),
    newsText = newsContent.text();
    
    if(newsText.length > size){
      newsContent.text(newsText.slice(0, size) + ' ...');
    }
    //троеточие в обращениях 
    var size = 500,
    newsContent= $('.treatment__content__text__desc'),
    newsText = newsContent.text();
    
    if(newsText.length > size){
      newsContent.text(newsText.slice(0, size) + ' ...');
    }

    //клик по кнопке ВОЙТИ
	    $(".entry").on('click', function(e) {
	    	e.preventDefault();
	    	var $this = $(this),
	    		fade = $(".overlay"),
	    		form = $(".popup__entry");

	    	fade.fadeIn(400, function() {
	    		form.animate({'left': '0px'}, 500, function() {

	    		});
	    	});
	    });
	//клик по темной подложке и кнопке закрыть попап
	    $(".overlay, .close").on('click', function() {
	    	var $this = $(this),
	    		fade = $(".overlay"),
	    		form = $(".popup__entry");

	    	form.animate({'left':'-3000px'},500, function() {
	    		fade.fadeOut(400);
	    	});
	    });
	//На странице обращения селект выбора
		$(".treatmentForm__select").on('click', function(e) {
			e.stopPropagation();
			$('body').off('click');

			var $this = $(this),
				list = $(".treatmentForm__select__list");
			if($this.hasClass('open')){
				$this.removeClass('open');
				list.slideUp(500);
			}else {
				$this.addClass('open');
				list.slideDown(500);
				$('body').on('click', function() {
					$this.removeClass('open');
					list.slideUp(500);
				});
			}
		});
		$('.treatmentForm__select__list__item').click(function(){
		    $(this)
		        .parents('.treatmentForm__select')
		        .find('.treatmentForm__select__selected')
		        .text($(this).text());
		});
	//На странице добавление проблемы на карту
		$(".treatmentAdd__form__select").on('click', function(e) {
			e.stopPropagation();
			$('body').off('click');

			var $this = $(this),
				list = $this.find($(".treatmentAdd__form__select__list"));
			if($this.hasClass('open')){
				$this.removeClass('open');
				list.slideUp(500);
			}else {
				$this.addClass('open');
				list.slideDown(500);
				$('body').on('click', function() {
					$this.removeClass('open');
					list.slideUp(500);
				});
			}
		});
		$('.treatmentAdd__form__select__list__item').click(function(){
		    $(this)
		        .parents('.treatmentAdd__form__select')
		        .find('.treatmentAdd__form__select__selected')
		        .text($(this).text());
		});
	//Клик в карточке обращения по ссылке комментария
		$(".click__comment__treatment").on('click', function(e) {
			e.preventDefault();

			var id = $(this).attr('href'),
				top = $(id).offset().top;
			$('body, html').animate({scrollTop: top}, 1000);

		});

	//Маска для телефона
	(function($) {
		var mask = $(".contacts__form");
		if(mask.length) {
			$("input[name=phone]").mask("+7 (999) 999-99-99");
		}
	})(jQuery);
	(function($) {
		var mask = $(".privateOffice__form");
		if(mask.length) {
			$("input[name=phone]").mask("+7 (999) 999-99-99");
		}
	})(jQuery);
	(function($) {
		var mask = $(".registration__form");
		if(mask.length) {
			$("input[name=phone]").mask("+7 (999) 999-99-99");
		}
	})(jQuery);
});


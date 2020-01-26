
	//карта
	(function ($) {
	    var m = $('.culturalPlace');
	    if (m.children().hasClass('map')) {

	        $(document).ready(function () {
	            

	        	ymaps.ready(init);
			    var myMap,
			    	myPlacemark;

			    function init(){     
			        myMap = new ymaps.Map("map", {
			            center: [59.90752203550794,30.24894483325197],
			            zoom: 13,
			            controls: ['zoomControl']
			        });
			        myMap.behaviors
			        	.disable('scrollZoom');

			/* ===============================================
				для маркера карты
			   ===============================================*/
			        myPlacemark = new ymaps.Placemark([59.9124090642299,30.259759500000005], 
			        { 
			            hintContent: 'Гостинница Аннушка', 
			            balloonContent: 'Санкт-Петербург, ул. Гапсальская, 2' 
			        }, 
			        {
			        	iconLayout: 'default#image'
			        });

			        myMap.geoObjects.add(myPlacemark);
			    }


			    $(".map__bg").on('click', function() {

			    	$(this).animate({"width":"0"}, 500);
			    });



	        });
	    }
	})(jQuery);



	//слайдер на странице номера
	(function($){

		var s = $('.slideshow');

		if(s.children().hasClass('slideshow__fullsize')){
			$(document).ready(function() {

				$(".slideshow__nav_link").on('click', function(e) {
					e.preventDefault();

					var
						$this = $(this),
						container = $this.closest('.slideshow'),
						display = container.find('.slideshow__display'),
						item = $this.closest('.slideshow__nav_item'),
						path = $this.attr('href'),
						duration = 400,
						preloader = container.find('.slideshow__preloader');

					if(!item.hasClass('active')){

						preloader.show();

						display.fadeOut(duration, function() {
							$(this).attr('src', path).load(function(){
								$(this).fadeIn(duration);
								preloader.hide();
							});
						});

						item.addClass('active')
							.siblings()
							.removeClass('active');
						}
					
				});


			});
		}

		


	}(jQuery));

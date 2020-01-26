$(document).ready(function(){

			// Для всплывающих форм
				var overlay = $('#fade'); // пoдлoжкa, дoлжнa быть oднa нa стрaнице
			    var open_modal = $('.open_modal'); // все ссылки, кoтoрые будут oткрывaть oкнa
			    var open_modal_thanks = $('.open_modal_thanks'); // все ссылки, кoтoрые будут oткрывaть oкнa
			    var close = $('.close_btn, #fade'); // все, чтo зaкрывaет мoдaльнoе oкнo, т.е. крестик и oверлэй-пoдлoжкa
			    var modal = $('.popup, .popup_thanks'); // все скрытые мoдaльные oкнa

			     open_modal.click( function(event){ // лoвим клик пo ссылке с клaссoм open_modal

			         var div = $(this).attr('href'); // вoзьмем стрoку с селектoрoм у кликнутoй ссылки
			         overlay.fadeIn(400, //пoкaзывaем oверлэй
			             function(){ // пoсле oкoнчaния пoкaзывaния oверлэя
			                 $(div) // берем стрoку с селектoрoм и делaем из нее jquery oбъект
			                     .css('display', 'block') 
			                     .animate({opacity: 1}, 400); // плaвнo пoкaзывaем
			         });
			     });

			     close.click( function(){ // лoвим клик пo крестику или oверлэю
			            modal // все мoдaльные oкнa
			             .animate({opacity: 0}, 400, // плaвнo прячем
			                 function(){ // пoсле этoгo
			                     $(this).css('display', 'none');
			                     overlay.fadeOut(400); // прячем пoдлoжку
			                 }
			             );
			     });

			    // Для кнопки отпраки
				$('.form').submit(function(e){
				        e.preventDefault();
				        $.ajax({
				            url: $(this).attr('action'),
				            type: 'POST',
				            data: $(this).serialize(),
				            success: function (data, textStatus, jqXHR) {
				                $('#fade').fadeIn(400, function(){
				                    $('.popup').animate({opacity: 0}, 200,
				                        function () {
				                            $(this).css({'display': 'none'});
				                            $('.popup_thanks').css({'display': 'block'}).animate({opacity: 1}, 200);
				                        });
				                });
				            }
				        });
				    });





	$('.bxslider').bxSlider({
		auto: true,
		controls: false
	});

	

	$('.main_about_hotel_slider').bxSlider({
		buildPager: function(slideIndex){
		    switch(slideIndex){
		      case 0:
		        return '<img src="images/about_hotel/img_slide1_small_1.jpg" alt="slide">';
		      case 1:
		        return '<img src="images/about_hotel/img_slide1_small_1.jpg" alt="slide">';
		      case 2:
		        return '<img src="images/about_hotel/img_slide1_small_1.jpg" alt="slide">';
		      case 3:
		        return '<img src="images/about_hotel/img_slide1_small_1.jpg" alt="slide">';
		      case 4:
		        return '<img src="images/about_hotel/img_slide1_small_1.jpg" alt="slide">';
		      case 5:
		        return '<img src="images/about_hotel/img_slide1_small_1.jpg" alt="slide">';
		      case 6:
		        return '<img src="images/about_hotel/img_slide1_small_1.jpg" alt="slide">';
		      case 7:
		        return '<img src="images/about_hotel/img_slide1_small_1.jpg" alt="slide">';
		      case 8:
		        return '<img src="images/about_hotel/img_slide1_small_1.jpg" alt="slide">';
		      case 9:
		        return '<img src="images/about_hotel/img_slide1_small_1.jpg" alt="slide">';
		      case 10:
		        return '<img src="images/about_hotel/img_slide1_small_1.jpg" alt="slide">';
		    }
		  }
	});
	$('.about_china_slide').bxSlider();
	$('.slider4').bxSlider({
		slideWidth: 205,
		minSlides: 2,
		maxSlides: 4,
		moveSlides: 1
	});

	// Слайдер маленький на странице about_hotel.html
	$('.content_rooms_bxslider').bxSlider({
		buildPager: function(slideIndex){
		    switch(slideIndex){
		      case 0:
		        return '<img src="images/about_hotel/small_img_slide1_small.jpg">';
		      case 1:
		        return '<img src="images/about_hotel/small_img_slide2_small.jpg">';
		      case 2:
		        return '<img src="images/about_hotel/small_img_slide3_small.jpg">';
		      case 3:
		        return '<img src="images/about_hotel/small_img_slide4_small.jpg">';
		      case 4:
		        return '<img src="images/about_hotel/small_img_slide5_small.jpg">';
		    }
		  }
	});


	$(".header_menu").on('click', function(e){
		e.stopPropagation();
		$('body').off('click');

		if($(this).hasClass('active')) {
			$(this).removeClass('active');
			$('.header_menu_content').fadeOut(500);
		}else {
			$(this).addClass('active');
			$('.header_menu_content').fadeIn(500);
			$('body').on('click', function(){
				$('.header_menu').removeClass('active');
				$('.header_menu_content').fadeOut(500);
			});
		}
	});


	// Клик по кнопке НАПРАВЛЕНИЯ
	$(".click_nav").on('click', function(e){
		e.stopPropagation();
		$('body').off('click');

		if($(this).hasClass('active')) {
			$(this).removeClass('active');
			$('.click_nav_country').fadeOut(500);
		}else {
			$(this).addClass('active');
			$('.click_nav_country').fadeIn(500);
			$('body').on('click', function(){
				$('.click_nav').removeClass('active');
				$('.click_nav_country').fadeOut(500);
			});
		}
	});
		


	// Выпадающий список
	$('.select').on('click', function(e){
	    e.stopPropagation();
	    $('body').off('click');

	    if($(this).hasClass('open')) {
	        $(this).removeClass('open');
	    } else {
	        $('.select').removeClass('open');
	        $(this).addClass('open');
	        $('body').on('click', function(){
	            $('.select').removeClass('open');
	        });
	    }
	});


	$('.select-list__item').click(function(){
	    $(this)
	        .parents('.select')
	        .find('.select__selected')
	        .text($(this).text());
	});
	// Закончился выпадающий список



	// Календарь
	$( "#datepicker" ).datepicker();
	$( ".datepicker" ).datepicker();

	// Русификация каленрдаря
	jQuery(function($){
		$.datepicker.regional['ru'] = {
		monthNames: ['Яварь', 'Февраль', 'Март', 'Апрель',
		'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь',
		'Октябрь', 'Ноябрь', 'Декабрь'],
		dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
		firstDay: 1,
		};
		$.datepicker.setDefaults($.datepicker.regional['ru']);
	});
	
	// При нажитии на кнопку об отеле появляется контент
		$(".china_button_about_hotel").click(function(){

			var hotelItem = $(this).parent().parent().parent().children(".click_tour_apartament");
			var about_hotel_btn = $(this).parent().parent().parent().children(".click_tour_hotel_item");
			if(about_hotel_btn.hasClass('active')){
	    		about_hotel_btn.removeClass('active');
	    		$(".click_tour_hotel_item").slideUp(400);
	    		
	    	}else {
	    		$(".tour_hotel_item.active").removeClass('active');
	    		about_hotel_btn.addClass('active');
	    		$('.china_button').removeClass('active');
	    		hotelItem.removeClass('active');
	    		$(".click_tour_apartament").slideUp(400);
	    		$(".click_tour_hotel_item.active").slideDown(400);
	    	}
	    	
		});


	// При нажитии на кнопку Номера появляется контент
	$(".china_button").click(function(){

		var about_hotel_btn = $(this).parent().parent().parent().children(".click_tour_hotel_item");
		var hotelItem = $(this).parent().parent().parent().children(".click_tour_apartament");
		var china_button = $(this);
		if(hotelItem.hasClass('active')){
    		hotelItem.removeClass('active');
    		$(".click_tour_apartament").slideUp(400);
    	}else {
    		$(".click_tour_apartament.active").removeClass('active');
    		hotelItem.addClass('active');
    		about_hotel_btn.removeClass('active');
    		$(".click_tour_hotel_item").slideUp(400);
    		$(".click_tour_apartament.active").slideDown(400);
    	}
    	
    	if(china_button.hasClass('active')){
    		china_button.removeClass('active');
    	}else {
    		$(".china_button.active").removeClass('active');
    		china_button.addClass('active');
    	}
	});


	//Ползунки для выбора цены

 	$("#slider_range").slider({
	    min: 50000,
	    max: 300000,
	    values: [50000,300000],
	    range: true,
	    stop: function(event, ui) {
        $("input#minCost").val($("#slider_range").slider("values",0));
        $("input#maxCost").val($("#slider_range").slider("values",1));
    },
    	slide: function(event, ui){
        $("input#minCost").val($("#slider_range").slider("values",0));
        $("input#maxCost").val($("#slider_range").slider("values",1));
    }

	});

	$("input#minCost").change(function(){
	    var value1=$("input#minCost").val();
	    var value2=$("input#maxCost").val();
	    if(parseInt(value1) > parseInt(value2)){
	        value1 = value2;
	        $("input#minCost").val(value1);
	    }
	    $("#slider_range").slider("values",0,value1);    
	});

	$("input#maxCost").change(function(){
	    var value1=$("input#minCost").val();
	    var value2=$("input#maxCost").val();
	     
	    if (value2 > 300000) { value2 = 300000; $("input#maxCost").val(300000)}
	 
	    if(parseInt(value1) > parseInt(value2)){
	        value2 = value1;
	        $("input#maxCost").val(value2);
	    }
	    $("#slider_range").slider("values",1,value2);
	});
	//закончился скрипт для ползунка выбора цены

	// Для сайд бара в about_china открытие меню
	$('.about_china_aside_section__desc').on('click', function(){
        var question = $(this).parent();
        if(question.hasClass('active')) {
            question.removeClass('active');
            question.find('.about_china_aside_section_answer').slideUp();
        } else {
            $('.about_china_aside_section.active .about_china_aside_section_answer').slideUp();
            $('.about_china_aside_section.active').removeClass('active');
            question.addClass('active');
            question.find('.about_china_aside_section_answer').slideDown();
        }
    });//end on click

    //Для сайд бара в about_china открытие под-меню
    $('.about_china_aside_section_answer__content_ul_1 li a').click(function(){
        var submenu = $(this).parent();
        if(submenu.hasClass('active')) {
            submenu.removeClass('active');
            $('.about_china_aside_section_answer__content_ul_1 li .about_china_aside_section_answer__content_ul_2').slideUp();
        } else {
            $('.about_china_aside_section_answer__content_ul_1 li.active .about_china_aside_section_answer__content_ul_2').removeClass('active');
            submenu.addClass('active');
            $('.about_china_aside_section_answer__content_ul_1 li.active .about_china_aside_section_answer__content_ul_2').slideDown();
        }
    });//end on click


  // Открытие и закрытие блоков на странице about_hotel.html
  $('.about_hotel_content_rooms_card_item__inner').on('click', function(){
        var click_hotel = $(this).parent();
        if(click_hotel.hasClass('active_list_hotel')) {
            click_hotel.removeClass('active_list_hotel');
            click_hotel.find('.about_hotel_content_rooms_card_item__inner_desc').slideUp();
        } else {
            $('.about_hotel_content_rooms_card_item.active_list_hotel .about_hotel_content_rooms_card_item__inner_desc').slideUp();
            $('.about_hotel_content_rooms_card_item.active_list_hotel').removeClass('active_list_hotel');
            click_hotel.addClass('active_list_hotel');
            click_hotel.find('.about_hotel_content_rooms_card_item__inner_desc').slideDown();
        }
    });//end on click

  	//Показ доп переключения на слайдере на странице about_hotel.html
  	$(".main_about_hotel_slider_top").hover(function(){
  		$('.main_about_hotel_slider_top .bx-wrapper .bx-pager').fadeToggle();
  	});


  	//Карта на странице about_hotel.html
  	function initMap() {
	    // Create a map object and specify the DOM element for display.
	    var map = new google.maps.Map(document.getElementById('map'), {
	        center: {lat: 18.955943, lng: 109.696795},
	        scrollwheel: false,
	        zoom: 10
	    });
	}

	initMap();

	$(".content_rooms_bxslider a.fancybox").fancybox({});

	

});//end ready

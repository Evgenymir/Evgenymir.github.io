$(document).ready(function(){
	
	$("a.fancybox").fancybox({});
	initMap();

//для попапов
    var overlay = $('#fade');
    var open_modal = $('.open_modal');
    var open_modal_thanks = $('.open_modal_thanks');
    var close = $('.close_btn, .closes, #fade');
    var modal = $('.popap, .popap_thanks');

    open_modal.click( function(event){
        event.preventDefault();
        var div = $(this).attr('href');
        overlay.fadeIn(400, function(){
                $(div).css('display', 'block').animate({opacity: 1}, 400);
        });
     });

     close.click( function(){
        modal.animate({opacity: 0}, 400, function(){
                $(this).css('display', 'none');
                overlay.fadeOut(400);
            }
        );
     });

//Для отправки формы
	$('form').submit(function(e){
        e.preventDefault();
        $.ajax({
            url: $(this).attr('action'),
            type: 'POST',
            data: $(this).serialize(),
            success: function () {
            	$('#fade').fadeIn(400, function(){
                    $('.popap').animate({opacity: 0}, 200, function () {
                        $(this).css({'display': 'none'});
                        $(this).data('thanks').css({'display': 'block'}).animate({opacity: 1}, 200);
                    });
                });  
            }
        });
    });

//Карта Google		
	function initMap() {
	    var map = new google.maps.Map(document.getElementById('map'), {
	        center: {lat: 59.889658, lng: 30.278705},
	        scrollwheel: false,
	        zoom: 15
	    }); 

	    var marker = new google.maps.Marker({
	        map: map,
	        position: {lat:59.889658, lng:30.278705},
	        icon: 'images/map_icon.png'
	    });
	}

});

//Для ресайза попапов
$(window).resize(function(){

	$('.popap').css({
		left: ($(document).width() - $('.popap').outerWidth())/2
	});
	$('.popap_thanks').css({
		left: ($(document).width() - $('.popap_thanks').outerWidth())/2
	});

});

$(window).resize();
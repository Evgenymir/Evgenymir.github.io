$(document).ready(function() {

	//Меню мобильное
	$(".munu__burger").on('click', function() {
		var menu = $(".menu"),
			overlay = $(".overlay");
		$("body").css("overflow","hidden");
		overlay.fadeIn(400, function() {
			menu.animate({"left":"0"}, 400, function() {
				$(".overlay, .menu__close").on('click', function() {
					$("body").css("overflow","auto");
					menu.animate({"left":"-150%"}, 400, function() {
						overlay.fadeOut(400);
					});
				});
			});
		});
	});

	//Карта в контактах
	$(".map").on('click', function() {
		$(this).addClass('width');
	});

	//Блок цитат на странице О нас
	(function() {
		var t = $(".quote__wrap");
		if(t.length) {
			var text = [
			    {
			      text : "Шоколад - это не вопрос жизни и смерти, это гораздо важнее!",
			     //author : "Benjamin Franklin"
			    },
			    {
			      text : "Шоколад, словно символ легкой, искрометной подлинной жизни, которую нельзя обуздать никакими запретами",
			     // author : "Oscar Wilde"
			    },
			    {
			      text : "Когда мужчина любит шоколад - это хорошо. Сладости и вкусности, по идее, должны любить только хорошие люди",
			     // author : "Jim Rohn"
			    },
			    {
			      text : "Слишком много шоколада - это ровно столько, сколько надо!",
			     // author : "Bo Bennett"
			    },
			    {
			      text : "После двадцати лет в браке я, кажется, начал понимать, чего хочет женщина.Ответ на вопрос лежит где-то между диалогом и шоколадом",
			     // author : "Benjamin Franklin"
			    },
			    {
			      text : "Никогда не рано и никому не поздно полюбить шоколад",
			     // author : "Mark Twain"
			    },
			    {
			      text : "Жизнь как коробка шоколадных конфет: никогда не знаешь, что тебе попадется",
			     // author : "Confucius"
			    },
			    {
			      text : "Есть люди, у которых даже черные и белые полосы жизни сделаны из шоколада",
			     // author : "Ronald Reagan"
			    },
				{
			      text : "Шоколад - это не привилегия, это право",
			     // author : "Confucius"
			    },
				{
			      text : "Ты можешь дарить без любви, но ты не можешь любить, ничего не отдавая, и шоколад - лучшее доказательство любви из всех, что только может быть",
			     // author : "Confucius"
			    },
				{
			      text : "На свете нет более искренней любви, чем любовь к шоколаду",
			     // author : "Confucius"
			    },
				{
			      text : "Зачем мне рай, если в нем нет шоколада?",
			     // author : "Confucius"
			    },
				{
			      text : "Чем отличается любовь к шоколаду от любви к человеку? Если меня покинет любимый человек, я буду грустить. А шоколад меня не покинет никогда",
			     // author : "Confucius"
			    },
				{
			      text : "Не шоколад заменяет любовь, а любовь заменяет шоколад",
			     // author : "Confucius"
			    },
				{
			      text : "Настоящие аристократы всегда начинают свой день с порции шоколада.",
			     // author : "Confucius"
			    },
				
				{
			      text : "— Что вы исповедуете? — Шоколад!",
			     // author : "Confucius"
			    }
			  ],
			  textBox = $('#textbox');
			  function generate() {
			    randElem = Math.floor(Math.random()*text.length);
			    phraseText = text[randElem].text;
			    //phraseAuthor = text[randElem].author;
    			//textBox.html("<h2>"+phraseText+"</h2><p><em>&mdash;&nbsp;"+phraseAuthor+"</em></p>");
			    textBox.html("<div class='quote__block wow flipInX'><p>"+phraseText+"</p></div>");
			  }
			  $('#nextprase').click(function(e){
			    e.preventDefault();
			    generate();
			  });
			  generate();
		}
	})();

	//Анимация wow эффекта
	(function() {
		var w = $(".wow")
		if(w.length) {
			new WOW().init();
		}
	})();
		  
});



//Инициализация карты
(function() {
	var m = $(".map");
	if(m.length) {
		ymaps.ready(init);
	    var myMap,
	    	myPlacemark;

	    function init(){     
	        myMap = new ymaps.Map("map", {
	            center: [59.91047356419377,30.285945499999986],
	            zoom: 11,
	            controls: ['zoomControl']
	        });
	        myMap.behaviors
	        	.disable('scrollZoom');

	/* ===============================================
		для маркера карты
	   ===============================================*/
	        myPlacemark = new ymaps.Placemark([59.91047356419377,30.285945499999986], 
	        { 
	            hintContent: 'Санкт-Петербург!', 
	            balloonContent: 'БЦ"Обводный Двор"' 
	        }, 
	        {
	        	iconLayout: 'default#image'
	        });

	        myMap.geoObjects.add(myPlacemark);
		}
	}

})();
import $ from 'jquery';
import Inview from 'jquery-inview';

const runSkills = () => {
	const block = $('.j-progress__list');
	const blockItem = $('.j-progress__item');

	block.on('inview', function(event, visible, visiblePartX, visiblePartY) {
		if (visible) {
			blockItem.addClass('active');
			$(this).find('.j-progress-number').each(function() {
              	var $this = $(this);
              	$({
                	Counter: 0
            	}).animate({
                	Counter: $this.text()
            	}, {
                	duration: 4000,
                	easing: 'swing',
                	step: function() {
                    	$this.text(Math.ceil(this.Counter));
               		}
            	});
          	});
          	$(this).off('inview');
		}
	});
};

export default runSkills;
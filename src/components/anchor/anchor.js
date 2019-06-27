import $ from 'jquery';

const clickAnchor = () => {
	const anchor = document.querySelector('.j-anchor');

	anchor.addEventListener('click', function(e) {
		e.preventDefault();

		let anchorItem = $(this).attr('href'),
			anchorScroll = $(anchorItem).offset().top;

		$('body, html').animate({scrollTop: anchorScroll}, 1000);

	});
};

export default clickAnchor;
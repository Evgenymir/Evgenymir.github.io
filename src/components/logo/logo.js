import $ from 'jquery';

const clickLogo = () => {

	const logo = $('.j-logo__link');

	logo.on('click', function(e) {
		e.preventDefault();

		let href = $(this).attr('href'),
			scroll = $(href).offset().top;

		$('body, html').animate({scrollTop: scroll}, 1000);
	});

};

export default clickLogo;
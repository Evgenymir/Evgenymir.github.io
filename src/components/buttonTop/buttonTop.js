import $ from 'jquery'

const clickButtonTop = () => {

	const buttonTop = document.querySelector('.j-buttonTop');

	buttonTop.addEventListener('click', function(e) {
		e.preventDefault();

		let buttonTopItem = $(this).attr('href'),
			buttonTopScroll = $(buttonTopItem).offset().top;

		$('body, html').animate({scrollTop: buttonTopScroll}, 1000);

	});

};

export default clickButtonTop;
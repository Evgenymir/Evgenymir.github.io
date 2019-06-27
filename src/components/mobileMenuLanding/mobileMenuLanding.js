import $ from 'jquery';

const clickMobileMenu = () => {

	const mobileMenu = document.querySelector('.j-mobileMenu');
	const mobileMenuList = $('.j-mobileMenu__list');
	const burger = document.querySelector('.j-burger');
	const close = document.querySelector('.j-mobileMenu__close');

	const removeClass = () => {
		burger.classList.remove('active');
		mobileMenu.classList.remove('active');
	};

	close.addEventListener('click', () => {
		removeClass();
	});

	mobileMenuList.on('click', 'a', function(e) {
		e.preventDefault();

		let href = $(this).attr('href'),
			scroll = $(href).offset().top;

		removeClass();
		$('body, html').animate({scrollTop: scroll}, 1000);
	});

};

export default clickMobileMenu;
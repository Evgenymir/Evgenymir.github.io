import $ from 'jquery';

const clickMenu = () => {

	const menuList = $('.j-menu__list');

	menuList.on('click', 'a', function(e) {
		e.preventDefault();

		let href = $(this).attr('href'),
			scroll = $(href).offset().top;

		$('body, html').animate({scrollTop: scroll}, 1000);
	});

};

export default clickMenu;
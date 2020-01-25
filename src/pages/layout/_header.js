import $ from 'jquery';

const scrollPage = () => {

	const header = document.querySelector('.j-header');

	$(window).scroll(() => {
		if($(window).scrollTop() >= 70) {
			header.classList.add('j-header-scroll');
		}else {
			header.classList.remove('j-header-scroll');
		}
	});

};

export default scrollPage;
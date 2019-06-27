// Клик по бургеру

const clickBurger = () => {
	const burger = document.querySelector('.j-burger');
	const mobileMenu = document.querySelector('.j-mobileMenu');
	// const overlay = document.querySelector('.j-overlay');

	burger.addEventListener('click', function(e) {
		e.preventDefault();

		// Берем координаты страницы
		// let x = window.scrollX;
		// let y = window.scrollY;

		if(!this.classList.contains('active')) {
			this.classList.add('active');
			mobileMenu.classList.add('active');
			// overlay.classList.add('active');
			
			// window.onscroll = function() {
			// 	window.scrollTo(x, y);
			// };

		} else {
			this.classList.remove('active');
			mobileMenu.classList.remove('active');
			// overlay.classList.remove('active');
			// window.onscroll = function() {};
		}
		
	});
};

export default clickBurger;
// Клик по бургеру

const clickBurgerToggle = () => {
	const burger = document.querySelector('.j-burgerToggle');
	const mobileMenu = document.querySelector('.j-mobileMenu');
	const overlay = document.querySelector('.j-overlay');

	burger.addEventListener('click', function(e) {
		e.preventDefault();

		// Берем координаты страницы
		let x = window.scrollX;
		let y = window.scrollY;

		this.classList.toggle('active');

		if(this.classList.contains('active')) {
			mobileMenu.classList.add('active');
			overlay.classList.add('active');
			
			window.onscroll = function() {
				window.scrollTo(x, y);
			};

		} else {
			mobileMenu.classList.remove('active');
			overlay.classList.remove('active');
			window.onscroll = function() {};
		}
		
	});
};

export default clickBurgerToggle;
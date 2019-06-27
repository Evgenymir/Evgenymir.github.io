import mixitup from 'mixitup';

const tabSort = () => {

	// добавляем класс на кнопки
	const tabItem = Array.from(document.querySelectorAll('.j-tabSort__item'));
	const tabLink = Array.from(document.querySelectorAll('.j-tabSort__link'));

	tabLink.forEach((elem) => {
		elem.addEventListener('click', (e) => {
			e.preventDefault();

			let elemParent = elem.parentElement;

			if(!elemParent.classList.contains('active')) {
				tabItem.forEach((elem) => {
					elem.classList.remove('active');
				});

				elemParent.classList.add('active');
			}
		});
	});

	// сортировка элементов
	const containerEl = document.querySelector('.j-tabSort-content-sort');
	const mix = mixitup(containerEl);

};

export default tabSort;
import Preloader from '../components/preloader/preloader.js';
import Header from '../pages/layout/_header.js';
import Logo from '../components/logo/logo.js';
import Menu from '../components/menuLanding/menuLanding.js';
import Burger from '../components/burger/burger.js';
import Anchor from '../components/anchor/anchor.js';
import ProgressBar from '../components/progressBarRadial/progressBarRadial.js';
import TabSort from '../components/tabSort/tabSort.js';
import Map from '../components/map/map.js';
import ButtonTop from '../components/buttonTop/buttonTop.js';
import MobileMenu from '../components/mobileMenuLanding/mobileMenuLanding.js';


window.onload = () => {

	/* Подключаем прелоадер */
	const preloaderItem = document.querySelector('.j-preloader');

	if(preloaderItem) {
		
			Preloader();
		
	}

	/* Добавление класса шапке при скролле */
	const headerItem = document.querySelector('.j-header');
	if(headerItem) {
		Header();
	}

	/* Подключаем клик по лого */
	const logoItem = document.querySelector('.j-logo__link');
	if(logoItem) {
		Logo();
	}

	/* Подключаем меню основное */
	const menuItem = document.querySelector('.j-menu__list');
	if(menuItem) {
		Menu();
	}

	/* подключаем клик по бургеру */

	const burgerItem = document.querySelector('.j-burger');

	if(burgerItem) {
		Burger();
	}

	/* подключаем клик по якорю на главном экране */

	const anchorItem = document.querySelector('.j-anchor');

	if(anchorItem) {
		Anchor();
	}

	/* Добавляем класс в навыках при его видимости 
	   и инициализируем счетчик */

	const ProgressBarItem = document.querySelector('.j-progress__list');
	if(ProgressBarItem) {
		ProgressBar();
	}

	/* Подключаем табы с сортировкий контента */

	const tabSortBlock = document.querySelector('.j-tabSort');
	if(tabSortBlock) {
		TabSort();
	}

	/* Подключаем карту Яндекс */
	const mapItem = document.querySelector('.j-map');
	if(mapItem) {
		Map();
	}

	/* Подключаем кнопку на верх */
	const buttonTopItem = document.querySelector('.j-buttonTop');
	if(buttonTopItem) {
		ButtonTop();
	}

	/* Подключаем мобильное меню */
	const mobileMenuItem = document.querySelector('.j-mobileMenu');
	if(mobileMenuItem) {
		MobileMenu();
	}

}; // => Закончился window.onload
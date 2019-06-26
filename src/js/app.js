import Preloader from '../components/preloader/preloader.js';


/* Подключаем прелоадер */
const preloaderItem = document.querySelector('.j-preloader');

if(preloaderItem) {
	window.onload = () => {
		Preloader();
	};
}

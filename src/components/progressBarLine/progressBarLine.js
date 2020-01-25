const progressBarLine = () => {
	const bar = document.querySelector('.j-progress-bar');
	const documentyHeight = document.documentElement.scrollHeight;
	const windowHeight = window.innerHeight;

	window.onscroll = () => {
		let scroll = window.pageYOffset;
		let value = (scroll / (documentyHeight - windowHeight)) * 100;

		bar.style.width = value + '%';
	}
};

export default progressBarLine;
// preloader

const preloader = () => {
	setTimeout(function() {
        const preloader = document.querySelector('.j-preloader');
        if( !preloader.classList.contains("done") ) {
            preloader.classList.add("done");
            document.body.classList.add("page__active");
        }
    }, 1000);
};

export default preloader;
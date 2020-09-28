// eslint-disable-next-line consistent-return
export const scrollToSection = (hash) => {
    const targetElement = document.querySelector(hash);
    const isSmoothScrollSupported = 'scrollBehavior' in document.documentElement.style;
    const scrollOptions = {
        top: targetElement.offsetTop,
        behavior: 'smooth',
    };

    if (!targetElement || targetElement === null) {
        return false;
    }
    if (isSmoothScrollSupported) {
        window.scroll(scrollOptions);
    } else {
        document.documentElement.scrollTop = scrollOptions.top;
    }
};

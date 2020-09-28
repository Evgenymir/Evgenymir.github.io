import React from 'react';
import { scrollToSection } from '../../assets/js/helpers';
import './Logo.scss';

const Logo = ({ text, href }) => {
    const handleClickLogo = (e) => {
        e.preventDefault();
        scrollToSection(href);
    };

    return (
        <div className="b-logo">
            <a className="b-logo__link" href={href} onClick={handleClickLogo}>{text}</a>
        </div>
    );
};
export default Logo;

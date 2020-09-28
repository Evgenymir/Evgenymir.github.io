import React from 'react';
import { scrollToSection } from '../../assets/js/helpers';
import './Button-top.scss';

const ButtonTop = ({ href }) => {
    const handleClickButton = (e) => {
        e.preventDefault();
        scrollToSection(href);
    };
    return (
        <a className="b-buttonTop" href={href} onClick={handleClickButton} />
    );
};

export default ButtonTop;

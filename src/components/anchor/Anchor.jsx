import React from 'react';
import { scrollToSection } from '../../assets/js/helpers';
import './Anchor.scss';

const anchor = ({ text, href }) => {
    const handleClickAnchor = (e) => {
        e.preventDefault();
        scrollToSection(href);
    };
    return (
        <a className="b-anchor" href={href} onClick={handleClickAnchor}>
            <span>{text}</span>
        </a>
    );
};

export default anchor;

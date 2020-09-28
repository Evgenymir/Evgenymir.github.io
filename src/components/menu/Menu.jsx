import React from 'react';
import { scrollToSection } from '../../assets/js/helpers';
import './Menu.scss';

const Menu = ({ items }) => {
    const handlerClickLink = (href) => (e) => {
        e.preventDefault();
        scrollToSection(href);
    };

    return (
        <nav className="b-menu">
            <ul className="b-menu__list">
                { items.map(({ link, text }) => (
                    <li className="b-menu__item" key={text}>
                        <a
                            className="b-menu__link"
                            href={link}
                            data-hover={text}
                            onClick={handlerClickLink(link)}
                        >
                            <span>{text}</span>
                        </a>
                    </li>
                )) }
            </ul>
        </nav>
    );
};

export default Menu;

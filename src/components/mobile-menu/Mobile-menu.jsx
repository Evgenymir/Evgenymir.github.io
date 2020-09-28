import React from 'react';
import { scrollToSection } from '../../assets/js/helpers';
import './Mobile-menu.scss';
import Burger from '../burger/Burger.jsx';

class MobileMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenMenu: false,
        };
    }

    handleCloseMenu = (e) => {
        e.preventDefault();
        this.setState({ isOpenMenu: false });
    };

    handleClickLink = (href) => (e) => {
        e.preventDefault();
        this.setState({ isOpenMenu: false });
        scrollToSection(href);
    };

    handleClickBurger = () => {
        this.setState({ isOpenMenu: true });
    };

    renderMenu(isOpen) {
        const { items } = this.props;
        return (
            <nav className={`b-mobileMenu ${isOpen && 'is-active'}`}>
                <div className="b-mobileMenu__close" onClick={this.handleCloseMenu}>
                    <div className="b-mobileMenu__close-line" />
                    <div className="b-mobileMenu__close-line" />
                </div>
                <ul className="b-mobileMenu__list">
                    { items.map(({ link, text }) => (
                        <li className="b-mobileMenu__item" key={text}>
                            <a className="b-mobileMenu__link" href={link} onClick={this.handleClickLink(link)}>
                                {text}
                            </a>
                        </li>
                    )) }
                </ul>
            </nav>
        );
    }

    render() {
        const { isOpenMenu } = this.state;

        return (
            <>
                <Burger handleClick={this.handleClickBurger} />
                { isOpenMenu && this.renderMenu(isOpenMenu) }
            </>
        );
    }
};

export default MobileMenu;

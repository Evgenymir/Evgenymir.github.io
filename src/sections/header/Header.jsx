import React from 'react';
import Logo from '../../components/logo/Logo.jsx';
import Menu from '../../components/menu/Menu.jsx';
import MobileMenu from '../../components/mobile-menu/Mobile-menu.jsx';
import './Header.scss';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isScroll: false,
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            const isScroll = window.pageYOffset >= 70;
            this.setState({ isScroll });
        });
    }

    render() {
        const { isScroll } = this.state;
        const { logo, menu } = this.props;
        return (
            <header className={`l-header ${isScroll ? 'header-scroll' : ''}`}>
                <div className="b-container b-header">
                    <div className="b-header__left">
                        <Logo text={logo} href="#b-mainScreen" />
                    </div>
                    <div className="b-header__right">
                        <Menu items={menu} />
                        <MobileMenu items={menu} />
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;

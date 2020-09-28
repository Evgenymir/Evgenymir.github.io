import React from 'react';
import './App.scss';
import AppData from '../../AppData';
import Preloader from '../preloader/Preloader.jsx';
import ProgressLine from '../progress-line/Progress-line.jsx';
import Header from '../../sections/header/Header.jsx';
import MainScreen from '../../sections/main-screen/main-screen.jsx';
import About from '../../sections/about/About.jsx';
import Works from '../../sections/works/Works.jsx';
import Contacts from '../../sections/contacts/Contact.jsx';
import Footer from '../../sections/footer/footer.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageLoad: false,
        };
    }

    componentDidMount() {
        document.addEventListener("DOMContentLoaded", (event) => {
            const body = document.querySelector('body');
            body.classList.add('page__active');
            this.setState({ pageLoad: true });
        });
    }

    render() {
        const { pageLoad } = this.state;
        return (
            <>
                <Preloader done={pageLoad} text={AppData.authorLastName} />
                <ProgressLine />
                <Header logo={AppData.authorLastName} menu={AppData.menu} />
                <main className="l-content">
                    <MainScreen data={AppData.mainScreen} />
                    <About data={AppData.about} />
                    <Works data={AppData.works} />
                    <Contacts data={AppData.contacts} />
                </main>
                <Footer
                    copyRight={AppData.copyRight}
                    buttonTop={AppData.buttonTopLink}
                    mapData={AppData.mapCoords}
                />
            </>
        );
    }
}

export default App;

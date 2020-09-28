import React from 'react';
import './main-screen.scss';
import _ from 'lodash';
import Anchor from '../../components/anchor/Anchor.jsx';

const MainScreen = ({ data }) => {
    const {
        image,
        title,
        authorName,
        authorLastName,
        profession,
        anchor,
        anchorLink,
    } = data;

    const professionItems = profession.split('');

    return (
        <div className="b-mainScreen" id="b-mainScreen" style={{ backgroundImage: `url("${image}")` }}>
            <div className="b-container">
                <h1 className="b-mainScreen__title">{title}</h1>
                <div className="b-mainScreen__name">
                    <span>{authorLastName}</span>
                    <span>{authorName}</span>
                </div>
                <div className="b-mainScreen__text">
                    { professionItems.map((letter) => <span key={_.uniqueId(`${letter}_`)}>{letter}</span>) }
                </div>
                <Anchor text={anchor} href={anchorLink} />
            </div>
        </div>
    );
};

export default MainScreen;

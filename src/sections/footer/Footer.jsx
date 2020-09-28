import React from 'react';
import Map from '../../components/map/Map.jsx';
import ButtonTop from '../../components/button-top/Button-top.jsx';
import './Footer.scss';

const Footer = ({ copyRight, buttonTop, mapData }) => (
    <footer className="l-footer b-footer b-section">
        <div className="b-container">
            <div className="b-footer__block">
                <Map data={mapData} />
                <div className="b-footer__text">
                    <p dangerouslySetInnerHTML={{ __html: copyRight }} />
                </div>
                <ButtonTop href={buttonTop} />
            </div>
        </div>
    </footer>
);

export default Footer;

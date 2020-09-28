import React from 'react';
import './Preloader.scss';

const Preloader = ({ done, text }) => (
    <div className={`b-preloader ${done === true ? 'done' : ''}`}>
        <div className="b-preloader__logo">
            {text}
        </div>
        <div className="b-preloader__item">
            <div className="b-preloader__item-line" />
        </div>
    </div>
);

export default Preloader;

import React from 'react';
import './Burger.scss';

const Burger = ({ handleClick }) => (
    <div className="b-burger" onClick={handleClick}>
        <div className="b-burger__line" />
        <div className="b-burger__line" />
        <div className="b-burger__line" />
    </div>
);

export default Burger;

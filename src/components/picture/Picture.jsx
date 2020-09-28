import React from 'react';
import Picturefill from 'picturefill';

class Picture extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        Picturefill();
    }

    render() {
        const { desktop, tablets, phone } = this.props;
        return (
            <picture className="b-about__img">
                <source srcSet={desktop} media="(min-width: 769px)" />
                <source srcSet={tablets} media="(min-width: 481px)" />
                <source srcSet={phone} media="(min-width: 200px)" />
                <source srcSet={desktop} />
                <img src={desktop} alt="Беспалов Евгений" title="Беспалов Евгений" />
            </picture>
        );
    }
}

export default Picture;

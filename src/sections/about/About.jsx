import React from 'react';
import { uniqueId } from 'lodash';
import Picture from '../../components/picture/Picture.jsx';
import './About.scss';

const About = ({ data }) => {
    const {
        title, picture, skills, descOne, descTwo,
    } = data;

    return (
        <section className="b-about b-section" id="b-about">
            <div className="b-container">
                <div className="b-about__title b-title">
                    <h2>{title}</h2>
                </div>
                <div className="b-about__block">
                    <div className="b-about__left">
                        <Picture
                            desktop={picture.desktop}
                            tablets={picture.tablets}
                            phone={picture.phone}
                        />
                    </div>
                    <div className="b-about__right">
                        <div className="b-about__text">
                            <p dangerouslySetInnerHTML={{ __html: descOne }} />
                            <ul>
                                { skills.map((item) => (
                                    <li key={uniqueId()}>
                                        <span>{item}</span>
                                    </li>
                                )) }
                            </ul>
                            <p>{descTwo}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

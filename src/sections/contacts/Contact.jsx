import React, { useEffect, useState } from 'react';
import './Contacts.scss';

const Contacts = ({ data }) => {
    const {
        bgDesktop, bgMobile, title, socials,
    } = data;

    const [contactBg, setContactBg] = useState(window.innerWidth <= 768 ? bgMobile : bgDesktop);

    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth <= 768) {
                setContactBg(bgMobile);
            } else {
                setContactBg(bgDesktop);
            }
        });
    }, []);

    return (
        <section
            className="b-contact b-section"
            id="b-contact"
            style={{ backgroundImage: `url(${contactBg})` }}
        >
            <div className="b-container">
                <div className="b-contact__title b-title">
                    <h2>{title}</h2>
                </div>
            </div>
            <div className="b-container">
                <div className="b-contact__list">
                    { socials.map((item) => (
                        <div className="b-contact__list-item" key={item.text}>
                            { item.href && (
                                <a href={item.href}>
                                    {item.icon}
                                    <span>{item.text}</span>
                                </a>
                            ) }

                            { !item.href && (
                                <>
                                    {item.icon}
                                    <span>{item.text}</span>
                                </>
                            )}
                        </div>
                    )) }
                </div>
            </div>
        </section>
    );
};

export default Contacts;

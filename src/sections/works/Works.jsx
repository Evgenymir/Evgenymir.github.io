import React from 'react';
import TabsSort from '../../components/tab-sort/Tab-sort.jsx';

const Works = ({ data }) => {
    const {
        title, tabs, contentItems,
    } = data;

    return (
        <section className="b-works b-section" id="b-works">
            <div className="b-container">
                <div className="b-works__title b-title">
                    <h2>{title}</h2>
                </div>
                <TabsSort tabs={tabs} contentItems={contentItems} />
            </div>
        </section>
    );
};

export default Works;

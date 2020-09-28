/* eslint-disable no-param-reassign */
import React from 'react';
import cn from 'classnames';
import './Tabs-sort.scss';

export default class TabSort extends React.Component {
    constructor(props) {
        super(props);
        const { tabs, contentItems } = this.props;
        contentItems.map((elem) => {
            elem.isVisible = true;
            return elem;
        });
        this.state = {
            tabs,
            contentItems,
        };
    }

    handleClickTab = (filterName) => (e) => {
        e.preventDefault();

        const { tabs, contentItems } = this.state;
        const newTabs = tabs.map((tab) => {
            if (tab.filter === filterName) {
                tab.isActive = true;
                return tab;
            }

            tab.isActive = false;
            return tab;
        });
        const newContentItems = contentItems.map((contentItem) => {
            if (filterName === 'all' || contentItem.category === filterName) {
                contentItem.isVisible = true;
                return contentItem;
            }

            contentItem.isVisible = false;
            return contentItem;
        });

        this.setState({ tabs: newTabs, contentItems: newContentItems });
    };

    renderTabs() {
        const { tabs } = this.state;

        return (
            <ul className="b-tabSort j-tabSort">
                { tabs.map((item) => (
                    <li
                        className={cn('b-tabSort__item j-tabSort__item', { active: item.isActive })}
                        key={item.text}
                    >
                        <a
                            className="b-tabSort__link j-tabSort__link"
                            href={item.href}
                            data-filter={item.filter}
                            onClick={this.handleClickTab(item.filter)}
                        >
                            {item.text}
                        </a>
                    </li>
                )) }
            </ul>
        );
    }

    renderContent() {
        const { contentItems } = this.state;

        const filterContentItems = contentItems.filter((item) => item.isVisible);
        return (
            <div className="b-tabSort-content j-tabSort-content-sort">
                { filterContentItems.map((item) => (
                    <a
                        key={item.title}
                        className={`b-tabSort-content__item mix ${item.category}`}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        style={{ backgroundImage: `url(${item.img})` }}
                    >
                        <span className="b-tabSort-content__site">{item.name}</span>
                        <span className="b-tabSort-content__block">
                            <span className="b-tabSort-content__block-title">{item.name}</span>
                            <span className="b-tabSort-content__block-line" />
                        </span>
                    </a>
                )) }
            </div>
        );
    }

    render() {
        return (
            <>
                { this.renderTabs() }
                { this.renderContent() }
            </>
        );
    }
}

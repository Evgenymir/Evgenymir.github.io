import React from 'react';
import IconEmail from './assets/icon/icon-email.jsx';
import IconPhone from './assets/icon/icon-phone.jsx';
import IconMark from './assets/icon/icon-placemark.jsx';
import IconSkype from './assets/icon/icon-skype.jsx';

const AppData = {
    authorLastName: 'Bespalov',
    menu: [
        {
            link: '#b-about',
            text: 'Обо мне',
        }, {
            link: '#b-works',
            text: 'Мои работы',
        }, {
            link: '#b-contact',
            text: 'Контакты',
        },
    ],
    mainScreen: {
        image: './img/mainscreen.jpg',
        title: 'Сайт-Портфолио',
        authorName: 'Евгений',
        authorLastName: 'Беспалов ',
        profession: 'Front-end\u00A0разработчик',
        anchor: 'Scroll',
        anchorLink: '#b-about',
    },
    about: {
        title: 'Обо мне',
        picture: {
            desktop: './img/I.jpg',
            tablets: './img/tablets/I_tablets.jpg',
            phone: './img/phone/I_phone.jpg',
        },
        skills: [
            'Html / html5',
            'Css / css3',
            'Препроцессор Sass (scss)',
            'Шаблонизатор Pug',
            'Flex / Grid',
            'Animation / SVG',
            'Javascript / jQuery',
            'Gulp / Webpack / Babel',
            'Vue / React / Redux',
        ],
        descOne: 'Здравствуйте, меня зовут Евгений. Занимаюсь разработкой современных, функциональных веб-сайтов и интерфейсов с нуля. Делаю адаптивную верстку без фреймворка Bootstrap. <br /><br /> В работе использую такие технологии как:',
        descTwo: 'Любой начатый проект верстаю кроссбраузерно, валидно, на выходе получается чистый и легко поддерживаемый код. Постоянно совершенствую свой профессиональный уровень.',
    },
    works: {
        title: 'Работы',
        tabs: [
            {
                href: '#',
                filter: 'all',
                text: 'Все',
                isActive: true,
            }, {
                href: '#',
                filter: 'category-1',
                text: 'Landing page',
                isActive: false,
            }, {
                href: '#',
                filter: 'category-2',
                text: 'Интернет-магазин',
                isActive: false,
            }, {
                href: '#',
                filter: 'category-3',
                text: 'Сайт-компании',
                isActive: false,
            },
        ],
        contentItems: [
            {
                href: 'https://www.spbsez.ru/',
                img: './img/works/oez.jpg',
                category: 'category-3',
                name: 'Сайт компании',
                title: 'Особая экономическая зона «Санкт-Петербург»',
            },
            {
                href: 'http://startdevelop.com/',
                img: './img/works/startDevelopment.jpg',
                category: 'category-3',
                name: 'Сайт компании',
                title: 'Девелоперская компания',
            },
            {
                href: 'https://www.crpp.ru/',
                img: './img/works/crpp.jpg',
                category: 'category-3',
                name: 'Сайт компании',
                title: 'Единый центр предпринимательства',
            },
            {
                href: 'libs/irline/index.html',
                img: './img/works/irline.jpg',
                category: 'category-3',
                name: 'Сайт компании',
                title: 'Перегородки Ирлайн',
            },
            {
                href: 'libs/proweb/index.html',
                img: './img/works/proweb.jpg',
                category: 'category-1',
                name: 'Одностраничный сайт',
                title: 'Маркетинговая компания PROWEB',
            },
            {
                href: 'libs/nordline/index.html',
                img: './img/works/nordline.jpg',
                category: 'category-3',
                name: 'Сайт компании',
                title: 'Экспедиторская компания',
            },
            {
                href: 'libs/happyChif/index.html',
                img: './img/works/happyChif.jpg',
                category: 'category-3',
                name: 'Сайт компании',
                title: 'Кухонное оборудование',
            },
            {
                href: 'libs/mebell/index.html',
                img: './img/works/pallet.jpg',
                category: 'category-1',
                name: 'Одностраничный сайт',
                title: 'Мебель из паллет',
            },
            {
                href: 'libs/azure/index.html',
                img: './img/works/azure.jpg',
                category: 'category-1',
                name: 'Одностраничный сайт',
                title: 'Апартаменты в Манхеттене',
            },
            {
                href: 'libs/cruiseEurope/index.html',
                img: './img/works/cruise.jpg',
                category: 'category-3',
                name: 'Сайт компании',
                title: 'Конференция 2018',
            },
            {
                href: 'libs/chocolate/index.html',
                img: './img/works/amazing.jpg',
                category: 'category-2',
                name: 'Интернет магазин',
                title: 'Интернет магазин шоколада',
            },
            {
                href: 'libs/zamerzaem/index.html',
                img: './img/works/zamerzaem.jpg',
                category: 'category-3',
                name: 'Сайт компании',
                title: 'Портал замерзаем',
            },
            {
                href: 'libs/ann/index.html',
                img: './img/works/ann.jpg',
                category: 'category-3',
                name: 'Сайт компании',
                title: 'Гостиница Аннушка',
            },
            {
                href: 'libs/greenpass/index.html',
                img: './img/works/greenpass.jpg',
                category: 'category-3',
                name: 'Сайт компании',
                title: 'Транспортировка грузов',
            },
            {
                href: 'libs/tour/index.html',
                img: './img/works/rusTour.jpg',
                category: 'category-3',
                name: 'Сайт компании',
                title: 'Туроператор Русь-Тур',
            },
            {
                href: 'libs/nedv/index.html',
                img: './img/works/nedv.jpg',
                category: 'category-1',
                name: 'Одностраничный сайт',
                title: 'Александр Недвижимость',
            },
            {
                href: 'libs/otis/index.html',
                img: './img/works/otis.jpg',
                category: 'category-1',
                name: 'Одностраничный сайт',
                title: 'Отис',
            },
        ],
    },
    contacts: {
        bgDesktop: './img/contact.jpg',
        bgMobile: './img/tablets/contact.jpg',
        title: 'Контакты',
        socials: [
            {
                href: 'skype:desh19863',
                // eslint-disable-next-line react/jsx-filename-extension
                icon: <IconSkype />,
                text: 'desh19863',
            }, {
                href: 'tel:+79643704121',
                icon: <IconPhone />,
                text: '+7 964 370 41 21',
            }, {
                href: 'mailto:bespalove.mir@gmail.com',
                icon: <IconEmail />,
                text: 'bespalove.mir@gmail.com',
            }, {
                href: null,
                icon: <IconMark />,
                text: 'Россия, Санкт-Петербург',
            },
        ],
    },
    copyRight: 'Все права защищены &copy; 2020',
    buttonTopLink: '#b-mainScreen',
    mapCoords: {
        center: [60.008549, 30.258663],
        zoom: 11,
        content: 'Россия, Санкт-Петербург',
        iconTitle: 'Санкт-Петербург',
    },
};

export default AppData;

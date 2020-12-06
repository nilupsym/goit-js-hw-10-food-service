import menu from './menu.json';

import itemsTemplate from './menu.hbs';

const menuRef = document.querySelector('.js-menu');

const markup = itemsTemplate(menu);

menuRef.insertAdjacentHTML('beforeend', markup);
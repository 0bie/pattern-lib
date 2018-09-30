import Icon from '../icon/template';
import {addClassNames, getShape} from '../utils';

export default renderMenu;
export const menuMarkup = template;

/**
 * Render a menu
 * @param {array} items - The menu items
 * @param {string} title - The menu title (Optional)
 * @param {array} classArr - Additional classNames
 * @param {boolean} rounded - The menu shape (Optional)
 * @returns {string} Markup for menu component
 */

function renderMenu({title, items, classArr, rounded}) {

  if (!items || items.length === 0) {
    throw new Error('renderMenu method requires `items` as an array');
  }
  return (
    /* eslint-disable indent */
    `<nav class="${addClassNames(classArr)}">
      <ul class="menu ${getShape(rounded)}">
        ${title ? `<li class="menu-header">
            <span class="menu-title pl--xs pr--xs">${title}</span>
          </li>`
        : ''}
        ${items.map(renderMenuItem).join('')}
      </ul>
    </nav>`
    /* eslint-enable indent */
  );

}

/**
 * Render a menu item
 * @param {string} content - The item content
 * @param {object} icon - Icon properties (Optional)
 * @param {array} classArr - Additional classNames (Optional)
 * @returns {string} Markup for menu item
 */

function renderMenuItem({content, icon, classArr}) {

  return (
    `<li class="menu-item ${addClassNames(classArr)}">
      ${icon ? Icon(icon) : ''}
      ${content}
    </li>`
  );

}

/**
 * Menu template
 * @returns {string} menu markup
 */

function template() {

  return (
    `<div class="constrain mb--md">${renderMenu(menu)}</div>
    <div class="constrain">${renderMenu(menu_rounded)}</div>`
  );

}

/**
 * Menu properties
 */

const menuIcon = {
  id: 'menu',
  size: 'md',
  title: 'Menu icon',
  classArr: ['vert--mid']
};

const inboxIcon = {
  size: 'md',
  id: 'inbox1',
  title: 'Inbox',
  classArr: ['vert--mid']
};

const cartIcon = {
  size: 'md',
  id: 'cart3',
  title: 'Shopping cart',
  classArr: ['vert--mid'],
  descripition: 'Items in your cart',
};

const favoriteIcon = {
  size: 'md',
  id: 'heart',
  title: 'Favorites',
  classArr: ['vert--mid'],
  description: 'Your favorite items',
};

const settingsIcon = {
  id: 'cog',
  size: 'md',
  title: 'Settings',
  classArr: ['vert--mid'],
  description: 'Adjust your email preferences',
};

const statisticsIcon = {
  size: 'md',
  id: 'graph1',
  title: 'Statistics',
  classArr: ['vert--mid'],
  descriptions: 'Review your shopping history',
};

const calendarIcon = {
  size: 'md',
  id: 'calendar2',
  title: 'Calendar',
  classArr: ['vert--mid'],
  description: 'Organize scheduled shopping',
};

const menu = {
  title: 'Go to',
  items: [
    {content: '<a href="#">Item 1</a>'},
    {content: '<a href="#">Item 2</a>'},
    {content: '<a href="#">Item 3</a>'},
    {content: '<div class="divider"></div>'},
    {content: '<a href="#">Item 4</a>'},
    {content: '<a href="#">Item 5</a>'}
  ]
};

const menu_rounded = {
  rounded: true,
  items: [
    {
      icon: menuIcon,
      content: '<h4 class="menu-title vert--mid">Menu</h4>'
    },
    {content: '<div class="divider"></div>'},
    {
      icon: inboxIcon,
      classArr: ['ptb--xxs'],
      content: '<a href="#" title="Check your inbox">Inbox</a>'
    },
    {
      icon: cartIcon,
      classArr: ['ptb--xxs'],
      content: '<a href="#" title="Items in your cart">My Bag</a>'
    },
    {
      icon: favoriteIcon,
      classArr: ['ptb--xxs'],
      content: '<a href="#" title="Your favorite items">My Favorites</a>'
    },
    {
      icon: settingsIcon,
      classArr: ['ptb--xxs'],
      content: '<a href="#" title="Adjust your email preferences">Settings</a>'
    },
    {
      icon: statisticsIcon,
      classArr: ['ptb--xxs'],
      content: '<a href="#" title="Review your shopping history">Statistics</a>'
    },
    {
      icon: calendarIcon,
      classArr: ['ptb--xxs'],
      content: '<a href="#" title="Organize scheduled shopping">My Calendar</a>'
    }
  ]
};


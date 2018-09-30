import Icon from '../icon/template';
import {addClassNames, getShape} from '../utils';

export default renderMenu;

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

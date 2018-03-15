import Icon from '../icon';

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
  const classNames = classArr ? classArr.join(' ') : '';
  const menuShape = rounded ? 'rounded' : '';
  return (
    /* eslint-disable indent */
    `<nav class="${classNames}">
      <ul class="menu ${menuShape}">
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

  const classNames = classArr ? classArr.join(' ') : '';
  return (
    `<li class="menu-item ${classNames}">
      ${icon ? Icon(icon) : ''}
      ${content}
    </li>`
  );

}

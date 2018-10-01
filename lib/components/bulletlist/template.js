import {addClassNames} from '../utils';

export default renderBulletlist;

/**
 * Render a bulletlist
 * @param {array} items - The bulletlist items
 * @param {array} classArr - Additional classnames (Optional)
 * @returns {string} Markup for bulletlist component
 */

function renderBulletlist({items, classArr}) {

  if (!items) {
    throw new Error('renderBulletlist method requires `items` as an array');
  }
  return (
    `<ul class="bulletlist ${addClassNames(classArr)}">
      ${items.map(renderBulletlistItem).join('')}
    </ul>`
  );

}

/**
 * Render a bulletlist item
 * @param {string} text - The item text
 * @param {array} classArr - AdditionalClassnames (Optional)
 * @returns {string} Markup for bulletlist item
 */

function renderBulletlistItem({text, classArr}) {

  if (!text) {
    throw new Error('renderBulletlistItems method requires `text` as a string');
  }
  return (
    `<li class="bulletlist-item ${addClassNames(classArr)}">
      <span class="bulletlist-text">${text}</span>
    </li>`
  );

}

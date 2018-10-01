import {addClassNames, getShape} from '../utils';

export default renderList;

/**
 * Render a list
 * @param {array} items - The list items
 * @param {boolean} rounded - The list shape (Optional)
 * @param {array} classArr - Additional Class names (Optional)
 * @returns {string} Markup for list component
 */

function renderList({items, rounded, classArr}) {

  if (!items) {
    throw new Error('renderList method requires `items` as an array');
  }
  return (
    `<ul class="list ${getShape(rounded)} ${addClassNames(classArr)}">
      ${items.map(renderListItem).join('')}
    </ul>`
  );

}

/**
 * Render a list item
 * @param {string} text - The item text
 * @param {array} classArr - AdditionalClassnames (Optional)
 * @returns {string} Markup for bulletlist item
 */

function renderListItem({text, classArr}) {

  if (!text) {
    throw new Error('renderBulletlistItem method requires `text` as a string');
  }
  return `<li class="list-item ${addClassNames(classArr)}">${text}</li>`;

}

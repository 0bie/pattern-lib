import {addClassNames, getShape} from '../utils';

export default renderList;
export const listMarkup = template;

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

/**
 * List template
 * @returns {string} - list markup
 */

function template() {
  return (
    `<div class="constrain mb--md">${renderList(list)}</div>
    <div class="constrain">${renderList(list_rounded)}</div>`
  );
}

/**
 * List properties
 */

const list = {
  items: [
    {text: 'Item 1'},
    {text: 'Item 2'},
    {text: 'Item 3'},
    {text: 'Item 4'},
    {text: 'Item 5'},
    {text: 'Item 6'}
  ]
};

const list_rounded = Object.assign({}, list, {
  classArr: ['rounded']
});

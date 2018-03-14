export default renderBulletlist;
export const bulletlistMarkup = template;

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
  const classNames = classArr ? classArr.join(' ') : '';
  return (
    `<ul class="bulletlist ${classNames}">
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
  const classNames = classArr ? classArr.join(' ') : '';
  return (
    `<li class="bulletlist-item ${classNames}">
      <span class="bulletlist-text">${text}</span>
    </li>`
  );

}

/**
 * Bulletlist template
 * @returns {string} - bulletlist markup
 */

function template() {
  return `<div class="constrain">${renderBulletlist(list)}</div>`;
}

const list = {
  items: [
    {
      text: 'Item 1',
      classArr: ['mb--xs']
    },
    {
      text: 'Item 2',
      classArr: ['mb--xs']
    },
    {
      text: 'Item 3'
    },
    {
      text: 'Item 4',
      classArr: ['mb--xs']
    },
    {
      text: 'Item 5',
      classArr: ['mb--xs']
    },
    {
      text: 'Item 6'
    }
  ]
};

export default renderList;

/**
 * Render a list
 * @param {array} items - The list items
 * @param {array} classArr - Additional Class names (Optional)
 * @returns {string} Markup for list component
 */

function renderList({items, classArr}) {

  if (!items) {
    throw new Error('renderList method requires `items` as an array');
  }
  const classNames = classArr ? classArr.join(' ') : '';
  return (
    `<ul class="list ${classNames}">
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
  const classNames = classArr ? classArr.join(' ') : '';
  return `<li class="list-item ${classNames}">${text}</li>`;

}

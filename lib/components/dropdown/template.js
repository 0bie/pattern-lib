import Icon from '../icon/template';

export default renderDropdown;

/**
 * Render a dropdown
 * @param {object} dropdown - The dropdown properties
 * @param {string} [dropdown].id - The dropdown `id`
 * @param {string} [dropdown].label - The dropdown label
 * @param {object} [dropdown].labelIcon - A toggle icon (Optional)
 * @param {array} [dropdown].items - The dropdown items
 * @param {any} [dropdown].content - Dropdown content (Optional)
 * @param {array} [dropdown].classArr - Additional classnames (Optional)
 * @param {array} [dropdown].wrapClassArr - Additional classnames (Optional)
 * @param {boolean} [dropdown].rounded - The dropdown shape (Optional)
 * @returns {string} Markup for dropdown component
 */

function renderDropdown(dropdown) {

  if (!dropdown) {
    throw new Error('renderDropdown method requires a valid object');
  }
  const {id, label, labelIcon, items, content, classArr, wrapClassArr, rounded = false} = dropdown;
  if (!id) { throw new Error('renderDropdown method requires `id` as a string'); }
  const classNames = classArr ? classArr.join(' ') : '';
  const wrapClassNames = wrapClassArr ? wrapClassArr.join(' ') : '';
  const dropdownShape = rounded ? 'dropdown--rounded' : '';
  return (
    `<div id=${id} class="dropdown-container ${classNames} ${dropdownShape}" tabindex="0">
      <span id="${id}-target" class="dropdown-label" aria-expanded="false" aria-controls="${id}-list">
        ${label ? label : ''}
        ${labelIcon ? `<button class="btn">${Icon(labelIcon)}</button>` : ''}
      </span>
      <div class="dropdown-wrap ${wrapClassNames}">
      ${items ? `<ul id="${id}-list" class="dropdown-list" aria-live="off">
          ${items.map(renderDropdownItem).join('')}
        </ul>`
      : ''}
      ${!items && content ? content : ''}
      </div>
    </div>`
  );

}

/**
 * Render a dropdown item
 * @param {string} text - The item text
 * @param {object} icon - An icon (Optional)
 * @param {string} iconPosition - The icon position (Optional)
 * @returns {string} Markup for dropdown item
 */

function renderDropdownItem({text, icon, iconPosition}) {

  if (!text) { throw new Error('renderDropdownItem requires `text` as a string'); }
  return (
    `<li class="dropdown-item">
      ${icon && iconPosition === 'left' ? Icon(icon) : ''}
      <span class="vert--mid">${text}</span>
      ${icon && iconPosition === 'right' ? Icon(icon) : ''}
    </li>`
  );

}

export const dropdownPositions = {
  top: 'dropdown-list--top',
  left: 'dropdown-list--left',
  right: 'dropdown-list--right',
  bottom: 'dropdown-list--bottom'
};

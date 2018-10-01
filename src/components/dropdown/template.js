import Icon from '../icon/template';
import Media from '../media/template';
import {addClassNames, getShape} from '../utils';

export default renderDropdown;
export const dropdownMarkup = template;

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
  if (!id) {
    throw new Error('renderDropdown method requires `id` as a string');
  }
  return (
    `<div id=${id} class="dropdown-container ${addClassNames(classArr)} ${getShape(rounded, 'dropdown')}" tabindex="0">
      <span id="${id}-target" class="dropdown-label" aria-expanded="false" aria-controls="${id}-list">
        ${label ? label : ''}
        ${labelIcon ? `<button class="btn">${Icon(labelIcon)}</button>` : ''}
      </span>
      <div class="dropdown-wrap ${addClassNames(wrapClassArr)}">
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

  if (!text) {
    throw new Error('renderDropdownItem requires `text` as a string');
  }
  return (
    `<li class="dropdown-item">
      ${icon && iconPosition === 'left' ? Icon(icon) : ''}
      <span class="vert--mid">${text}</span>
      ${icon && iconPosition === 'right' ? Icon(icon) : ''}
    </li>`
  );

}

/**
 * Dropdown template
 * @returns {string} dropdown markup
 */

function template() {
  return (
    `<div>
      <span class="mr--xl">${renderDropdown(dropdown)}</span>
      <span class="mr--xl">${renderDropdown(dropdown2)}</span>
      <span>${renderDropdown(dropdown3)}</span>
    </div>`
  );
}

/**
 * Dropdown properties
 */

const twitterIcon = {
  size: 'sm',
  id: 'twitter',
  title: 'twitter',
  description: 'follow on twitter',
  classArr: ['vert--mid', 'mr--xs']
};

const labelIcon = {
  size: 'sm',
  id: 'ellipses',
  title: 'More options',
  classArr: ['vert--mid']
};

export const dropdownPositions = {
  top: 'dropdown-list--top',
  left: 'dropdown-list--left',
  right: 'dropdown-list--right',
  bottom: 'dropdown-list--bottom'
};

const mediaImage = {
  size: 'md',
  src: 'assets/bag/bag3.jpg'
};

const favoriteIcon = {
  size: 'sm',
  id: 'heart',
  title: 'Love',
  fill: '#EC675C',
  classArr: ['icon--love', 'ml--xxs'],
  description: 'Handcrafted with love'
};

const media = {
  footer: true,
  title: 'Media Title',
  classArr: ['rounded'],
  item: {image: mediaImage},
  footerContent: `Handcrafted with ${Icon(favoriteIcon)}`
};

const dropdown = {
  id: 'dropdown',
  label: 'dropdown label',
  items: [
    {text: 'Item 1'},
    {text: 'Item 2'},
    {text: 'Item 3'},
    {text: 'Item 4'}
  ]
};

const dropdown2 = {
  labelIcon,
  rounded: true,
  id: 'dropdown3',
  content: Media(media),
  wrapClassArr: ['dropdown-wrap--media', 'rounded']
};

const dropdown3 = {
  rounded: true,
  id: 'dropdown2',
  label: 'dropdown label',
  items: [
    {text: 'Item 1', icon: twitterIcon, iconPosition: 'left'},
    {text: 'Item 2', icon: twitterIcon, iconPosition: 'left'},
    {text: 'Item 3', icon: twitterIcon, iconPosition: 'left'},
    {text: 'Item 4', icon: twitterIcon, iconPosition: 'left'}
  ]
};


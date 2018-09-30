import Button from '../button/template';
import Input from '../input/template';
import {addClassNames, getShape} from '../utils';

export default renderPicker;

/**
 * Render a picker
 * @param {string} id - The picker `id`
 * @param {array} items - The picker items
 * @param {array} groups - The picker groups (Optional)
 * @param {string} title - The picker title
 * @param {string} subtitle - The picker subtitle
 * @param {boolean} rounded - The picker shape (Optional)
 * @param {array} classArr - Additional classNames (Optional)
 * @returns {string} Markup for picker component
 */

function renderPicker({id, items, groups, title, subtitle, rounded, classArr}) {

  if (!items && !groups) {
    throw new Error('renderPicker requires `items` as an array');
  }
  return (
    `<div class="picker ${getShape(rounded, 'picker')} ${addClassNames(classArr)}">
      <header class="picker-header">
        <div class="picker-titlebar">
          <h1 class="picker-title">${title}</h1>
          ${Button({size: 'sm', icon: {id: 'x1', title: 'close', description: 'close the modal'}, classArr: ['btn--link']})}
        </div>
        ${Input({id: `input_${id}`, size: 'xs', inputClass: ['picker-searchbar'], placeholder: 'Type to filter...'})}
      </header>
      <h3 class="picker-subtitle">${subtitle}</h3>
      <div id=${id} class="picker-content">
        ${items && !groups ? items.map(renderPickerItem).join('') : ''}
        ${groups && !items ? groups.map(renderPickerGroup).join('') : ''}
      </div>
    </div>`
  );

}

/**
 * Render picker item
 * @param {string} id - The item `id`
 * @param {any} item - The media item
 * @param {string} title - The item title
 * @param {array} classArr - Additional classNames (Optional)
 * @returns {string} Markup for picker item
 */

function renderPickerItem({id, item, title, classArr}) {

  if (!id || !title) {
    throw new Error('renderPickerItem method requires `id` & `title` as a string');
  }
  return (
    `<div class="picker-item ${addClassNames(classArr)}">
      <label for=${id}>
        <div class="checkbox-container">
          <input class="checkbox checkbox--sm checkbox--rounded hidden" type="checkbox" name=${id} id=${id} />
          <div></div>
        </div>
        <div class="media">
          <div class="media-item float--left">${item}</div>
          <div class="media-content">
            <h4 class="media-title">${title}</h4>
          </div>
        </div>
      </label>
    </div>`
  );

}

/**
 * Render a group of picker items
 * @param {string} title - The group title
 * @param {array} itemsArr - Collection of picker items
 * @param {array} classArr - Additional classNames (Optional)
 * @returns {string} Markup for picker group
 */

function renderPickerGroup({title, itemsArr, classArr}) {

  if (!itemsArr) {
    throw new Error('renderPickerGroup requires `itemsArr` as an array');
  }
  return (
    `<div class="picker-group ${addClassNames(classArr)}">
      <header class="picker-groupheader">
        <h3 class="picker-subtitle">${title}</h3>
      </header>
      ${itemsArr.map((item) => item).join('')}
    </div>`
  );

}

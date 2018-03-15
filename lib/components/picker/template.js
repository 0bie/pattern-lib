import Button from '../button';
import Avatar from '../avatar';
import Input from '../input';

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
  const classNames = classArr ? classArr.join(' ') : '';
  const pickerShape = rounded ? 'picker--rounded' : '';
  return (
    `<div class="picker ${pickerShape} ${classNames}">
      <header class="picker-header">
        <div class="picker-titlebar">
          <h1 class="picker-title">${title}</h1>
          ${Button({size: 'sm', icon: exitIcon, classArr: ['btn--link']})}
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
  const classNames = classArr ? classArr.join(' ') : '';
  return (
    `<div class="picker-item ${classNames}">
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
  const classNames = classArr ? classArr.join(' ') : '';
  return (
    `<div class="picker-group ${classNames}">
      <header class="picker-groupheader">
        <h3 class="picker-subtitle">${title}</h3>
      </header>
      ${itemsArr.map((item) => item).join('')}
    </div>`
  );

}

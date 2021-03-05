import Button from '../button/template';
import Avatar from '../avatar/template';
import Input from '../input/template';
import {addClassNames, getShape} from '../utils';

export default renderPicker;
export const pickerMarkup = template;

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
          ${Button({size: 'sm', icon: exitIcon, classArr: ['btn--link']})}
        </div>
        ${Input({id: `input_${id}`, inputId: `${id}_picker_input`, size: 'xs', inputClass: ['picker-searchbar'], placeholder: 'Type to filter...'})}
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

/**
 * Picker template
 * @returns {string} picker markup
 */

function template() {
  return (
    `<div class="constrain mb--xxl">${renderPicker(picker)}</div>
    <div class="constrain">${renderPicker(picker_rounded)}</div>`
  );
}

/**
 * Picker properties
 */

const exitIcon = {
  id: 'x1',
  title: 'Close',
  description: 'Close the modal',
};

const avatar = {
  size: 'sm',
  rounded: true,
  firstname: 'Obie',
  lastname: 'Egwim',
  image: 'assets/avatar/avatar2.png'
};

const avatar2 = Object.assign({}, avatar, {
  image: 'assets/avatar/avatar3.jpg'
});

const pickerItems = [
  {
    id: 'pickerItem1',
    item: Avatar(avatar),
    title: 'Picker Item 1'
  },
  {
    id: 'pickerItem2',
    item: Avatar(avatar2),
    title: 'Picker Item 2'
  },
  {
    id: 'pickerItem3',
    item: Avatar(avatar),
    title: 'Picker Item 3'
  },
  {
    id: 'pickerItem4',
    item: Avatar(avatar2),
    title: 'Picker Item 4'
  },
  {
    id: 'pickerItem5',
    item: Avatar(avatar),
    title: 'Picker Item 5'
  },
  {
    id: 'pickerItem6',
    item: Avatar(avatar2),
    title: 'Picker Item 6'
  }
];

const group_1 = [
  renderPickerItem({id: 'pickerItem7', item: Avatar(avatar), title: 'Picker Item 1'}),
  renderPickerItem({id: 'pickerItem8', item: Avatar(avatar2), title: 'Picker Item 2'}),
  renderPickerItem({id: 'pickerItem9', item: Avatar(avatar), title: 'Picker Item 3'})
];

const group_2 = [
  renderPickerItem({id: 'pickerItem10', item: Avatar(avatar2), title: 'Picker Item 4'}),
  renderPickerItem({id: 'pickerItem11', item: Avatar(avatar), title: 'Picker Item 5'}),
  renderPickerItem({id: 'pickerItem12', item: Avatar(avatar2), title: 'Picker Item 6'})
];

const group_3 = [
  renderPickerItem({id: 'pickerItem13', item: Avatar(avatar), title: 'Picker Item 7'}),
  renderPickerItem({id: 'pickerItem14', item: Avatar(avatar2), title: 'Picker Item 8'}),
  renderPickerItem({id: 'pickerItem15', item: Avatar(avatar), title: 'Picker Item 9'})
];

const pickerItem_group1 = {
  title: 'Group 1',
  itemsArr: group_1
};

const pickerItem_group2 = {
  title: 'Group 2',
  itemsArr: group_2
};

const pickerItem_group3 = {
  title: 'Group 3',
  itemsArr: group_3
};

const pickerGroups = [
  pickerItem_group1,
  pickerItem_group2,
  pickerItem_group3
];

const picker = {
  id: 'picker',
  items: pickerItems,
  title: 'Picker Title',
  subtitle: 'Picker Subtitle'
};

const picker_rounded = {
  rounded: true,
  id: 'picker_rounded',
  groups: pickerGroups,
  title: 'Picker Title',
  subtitle: 'Picker Subtitle'
};

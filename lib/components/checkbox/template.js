import {addClassNames, getShape} from '../utils';

export default renderCheckbox;

/**
 * Render a checkbox
 * @param {string} id - The checkbox `id`
 * @param {size} size - The checkbox size (sm|md|lg)
 * @param {string} label - The checkbox label (Optional)
 * @param {array} classArr - Additional classnames (Optional)
 * @param {boolean} rounded - The checkbox shape (Optional)
 * @returns {string} Markup for checkbox component
 */

function renderCheckbox({id, size, label, classArr, rounded = false}) {

  if (!id || !size) {
    throw new Error('renderCheckbox method requires `id` and `size` as a string');
  }
  return (
    `<label class="checkbox-container ${addClassNames(classArr)}" for="${id}">
      <input id=${id} class="checkbox checkbox--${size} ${getShape(rounded, 'checkbox')} hidden" type="checkbox" name=${id} />
      <div>
        ${label ? `<span class="checkbox-label">${label}</span>` : ''}
      </div>
    </label>`
  );

}

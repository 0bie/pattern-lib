import {addClassNames} from '../utils';

export default renderSpinner;

/**
 * Render a spinner
 * @param {string} id - The spinner `id`
 * @param {string} size - The spinner size (sm|md|lg|xl|xxl)
 * @param {array} classArr - Additional classNames (Optional)
 * @returns {string} Markup for spinner component
 */

function renderSpinner({id, size, classArr}) {
  if (!id) {
    throw new Error('renderSpinner method requires `id` as a string');
  }
  return `<div id=${id} class="spinner spinner--${size} ${addClassNames(classArr)}"></div>`;
}

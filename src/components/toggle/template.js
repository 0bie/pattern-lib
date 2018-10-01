import {addClassNames} from '../utils';

export default renderToggle;
export const toggleMarkup = template;

/**
 * Render a toggle
 * @param {string} id - The toggle `id`
 * @param {string} size - The toggle size (sm|md|lg)
 * @param {boolean} checked - The toggle state (Optional)
 * @param {array} classArr - Additional classNames (Optional)
 * @returns {string} Markup for toggle component
 */

function renderToggle({id, size, checked, classArr}) {

  if (!id) {
    throw new Error('renderToggle method requires `id` as a string');
  }
  const toggleState = checked ? 'checked="true"' : '';
  return (
    `<div class="toggle-container ${addClassNames(classArr)}">
      <input id=${id} class="toggle toggle--${size}" name=${id} type="checkbox" ${toggleState} />
      <label for=${id}></label>
    </div>`
  );

}

/**
 * Toggle template
 * @returns {string} toggle markup
 */

function template() {
  return (
    `<div>
      ${renderToggle(toggle_sm)}
      ${renderToggle(toggle_md)}
      ${renderToggle(toggle_lg)}
    </div>`
  );
}

/**
 * Toggle properties
 */

const toggle_sm = {
  id: 'toggle_sm',
  size: 'sm'
};

const toggle_md = {
  id: 'toggle_md',
  size: 'md'
};

const toggle_lg = {
  id: 'toggle_lg',
  size: 'lg',
  checked: true
};


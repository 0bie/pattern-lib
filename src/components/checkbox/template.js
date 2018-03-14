export default renderCheckbox;
export const checkboxMarkup = template;

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
  const classNames = classArr ? classArr.join(' ') : '';
  const checkboxShape = rounded ? 'checkbox--rounded' : '';
  return (
    `<label class="checkbox-container ${classNames}" for="${id}">
      <input id=${id} class="checkbox checkbox--${size} ${checkboxShape} hidden" type="checkbox" name=${id} />
      <div>
        ${label ? `<span class="checkbox-label">${label}</span>` : ''}
      </div>
    </label>`
  );

}

/**
 * Checkbox template
 * @returns {string} checkbox markup
 */

function template() {
  return (
    `<div>
      <div class="mb--md">
        ${renderCheckbox(checkbox)}
        ${renderCheckbox(checkbox_md)}
        ${renderCheckbox(checkbox_lg)}
      </div>
      <div>
        ${renderCheckbox(checkbox_rounded)}
        ${renderCheckbox(checkbox_rounded_md)}
        ${renderCheckbox(checkbox_rounded_lg)}
      </div>
    </div>`
  );
}

/**
 * Checkbox properties
 */

const checkbox = {
  size: 'sm',
  id: 'checkbox1',
  classArr: ['mr--xs'],
  label: 'checkbox label',
};

const checkbox_md = Object.assign({}, checkbox, {
  size: 'md',
  id: 'checkbox2'
});

const checkbox_lg = Object.assign({}, checkbox, {
  size: 'lg',
  id: 'checkbox3'
});

const checkbox_rounded = {
  size: 'sm',
  rounded: true,
  id: 'checkbox4',
  classArr: ['mr--xs'],
  label: 'checkbox label',
};

const checkbox_rounded_md = Object.assign({}, checkbox_rounded, {
  size: 'md',
  id: 'checkbox5'
});

const checkbox_rounded_lg = Object.assign({}, checkbox_rounded, {
  size: 'lg',
  id: 'checkbox6'
});

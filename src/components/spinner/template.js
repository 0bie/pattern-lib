export default renderSpinner;
export const spinnerMarkup = template;

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
  const classNames = classArr ? classArr.join(' ') : '';
  return `<div id=${id} class="spinner spinner--${size} ${classNames}"></div>`;
}

/**
 * Spinner template
 * @returns {string} spinner markup
 */

function template() {
  return (
    `<div>
      ${renderSpinner(spinner_sm)}
      ${renderSpinner(spinner_md)}
      ${renderSpinner(spinner_lg)}
      ${renderSpinner(spinner_xl)}
      ${renderSpinner(spinner_xxl)}
    </div>`
  );
}

/**
 * Spinner properties
 */

const spinner_sm = {
  id: 'spinner_sm',
  size: 'sm'
};

const spinner_md = {
  id: 'spinner_md',
  size: 'md'
};

const spinner_lg = {
  id: 'spinner_lg',
  size: 'lg'
};

const spinner_xl = {
  id: 'spinner_xl',
  size: 'xl'
};

const spinner_xxl = {
  id: 'spinner_xxl',
  size: 'xxl'
};

export const markup = `<div class="spinner spinner--xs"></div>
<div class="spinner spinner--sm"></div>
<div class="spinner spinner--md"></div>
<div class="spinner spinner--lg"></div>
<div class="spinner spinner--xl"></div>
<div class="spinner spinner--xxl"></div>`;

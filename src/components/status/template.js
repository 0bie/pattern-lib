import {addClassNames} from '../utils';

export default renderStatus;
export const statusMarkup = template;

/**
 * Render a status indicator
 * @param {string} id - The status `id`
 * @param {string} state - The status state
 * @param {string} text - The status text
 * @param {array} classArr - Additional classNames (Optional)
 * @returns {string} Markup for status component
 */

function renderStatus({id, state, text, classArr}) {

  if (!id || !state) {
    throw new Error('renderStatus method requies `id` & `state` as a string');
  }
  return (
    `<span class="status status--${state} ${addClassNames(classArr)}">
      <span class="status-icon" aria-hidden="true"></span>
      <span class="status-text">${text}</span>
    </span>`
  );

}

/**
 * Status template
 * @returns {string} status markup
 */

function template() {
  return (
    `<div class="mb--xs">${renderStatus(status_on)}</div>
    <div class="mb--xs">${renderStatus(status_idle)}</div>
    <div>${renderStatus(status_off)}</div>`
  );
}

/**
 * Status properties
 */

const status_on = {
  id: 'status_on',
  state: 'on',
  text: 'Online'
};

const status_idle = {
  id: 'status_idle',
  state: 'idle',
  text: 'Idle'
};

const status_off = {
  id: 'status_off',
  state: 'off',
  text: 'Offline'
};


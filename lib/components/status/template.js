export default renderStatus;

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
  const classNames = classArr ? classArr.join(' ') : '';
  return (
    `<span class="status status--${state} ${classNames}">
      <span class="status-icon" aria-hidden="true"></span>
      <span class="status-text">${text}</span>
    </span>`
  );

}

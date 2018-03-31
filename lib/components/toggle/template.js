export default renderToggle;

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
  const classNames = classArr ? classArr.join(' ') : '';
  const toggleState = checked ? 'checked="true"' : '';
  return (
    `<div class="toggle-container ${classNames}">
      <input id=${id} class="toggle toggle--${size}" name=${id} type="checkbox" ${toggleState} />
      <label for=${id}></label>
    </div>`
  );

}

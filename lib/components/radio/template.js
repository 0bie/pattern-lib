export default renderRadioInput;

/**
 * Render a radio input
 * @param {string} id - The input `id`
 * @param {string} size - The input size (sm|md|lg)
 * @param {string} label - The input label
 * @param {array} classArr - Additional classNames (Optional)
 * @returns {string} Markup for radio input
 */

function renderRadioInput({id, size, label, classArr}) {

  if (!id | !size) {
    throw new Error('renderRadioInput method requires `id` & `size` as a string');
  }
  const classNames = classArr ? classArr.join(' ') : '';
  return (
    `<label id=${id} class="radio-container ${classNames}">
      <input class="radio radio--${size} hidden" type="radio" name=${id} />
      <div><span class="radio-label">${label}</span></div>
    </label>`
  );

}

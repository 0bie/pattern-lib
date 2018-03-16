export default renderCaret;

/**
 * Render a caret
 * @param {string} direction - The caret direction (top|bottom|left|right)
 * @param {array} classArr - Additional classnames (Optional)
 * @returns {string} - Markup for caret component
 */

function renderCaret({direction, classArr}) {

  if (!direction) {
    throw new Error('renderCaret method requires `direction` as a string');
  }
  const classNames = classArr ? classArr.join(' ') : '';
  return `<span class="caret caret--${direction} ${classNames}"></span>`;

}

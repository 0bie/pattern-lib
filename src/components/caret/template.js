import {addClassNames} from '../utils';

export default renderCaret;
export const caretMarkup = template;

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
  return `<span class="caret caret--${direction} ${addClassNames(classArr)}"></span>`;

}

/**
 * Caret template
 * @returns {string} - caret markup
 */

function template() {
  return (
    `<div>
      ${renderCaret(caretTop)}
      ${renderCaret(caretBottom)}
      ${renderCaret(caretLeft)}
      ${renderCaret(caretRight)}
    </div>`
  );
}

/**
 * Caret properties
 */

const caretTop = {direction: 'top'};
const caretBottom = {direction: 'bottom'};
const caretLeft = {direction: 'left'};
const caretRight = {direction: 'right'};

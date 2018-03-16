import Icon from '../icon/template';

export default renderInput;

/**
 * Render an input element
 * @param {object} input - The input properties
 * @param {string} [input].id - The input id
 * @param {string} [input].type - The input type
 * @param {size} [input].size - The input size (xs|sm|md|lg|xl|xxl)
 * @param {string} [input].placeholder - The input placeholder
 * @param {object} [input].icon - Icon properties (Optional)
 * @param {boolean} [input].error - The input error state (Optional)
 * @param {boolean} [input].success - The input success state (Optional)
 * @param {string} [input].hint - The validation message (Optional)
 * @param {boolean} [input].rounded - The input shape (Optional)
 * @param {array} [input].inputClass - Additional input classNames (Optional)
 * @param {array} [input].classArr - Additional input field classNames (Optional)
 * @param {string} [input].pattern - A RegEx pattern (Optional)
 * @returns {string} Markup for input component
 */

function renderInput(input) {

  const {
    id,
    size,
    placeholder,
    icon,
    error,
    success,
    hint,
    inputClass,
    classArr,
    rounded,
    pattern,
    type = 'text'
  } = input;

  const isValidated = hint && pattern;
  const textareaShape = rounded ? 'rounded' : '';
  const inputShape = rounded ? 'input--rounded' : '';
  const classNames = classArr ? classArr.join(' ') : '';
  const inputClassName = inputClass ? inputClass.join(' ') : '';
  const fieldState = error ? 'input-field--error' : success ? 'input-field--success' : '';
  const patternAttributes = pattern ? `data-pattern="${pattern}" data-hint="${id}-hint"` : '';

  if (!id || !size) {
    throw new Error('renderInput method requires `id` and `size` as a string');
  }
  return (
    /* eslint-disable indent */
    `<span id=${id} class="input-field ${fieldState} ${classNames}">
      ${
        type === 'text' ?
          `<input class="input input--${size} ${inputShape} ${inputClassName}" type="text" placeholder="${placeholder}" ${patternAttributes} />`
        : type === 'number' ?
          `<input class="input input--${size} ${inputShape} ${inputClassName}" type="number" placeholder="${placeholder}" />`
        : type === 'textField' ?
          `<textarea class="input input--${size} ${textareaShape} ${inputClassName}" placeholder="${placeholder}" ${patternAttributes}></textarea>`
        : new Error ('renderInput method requires `type` as a string ["text"|"number"|"textField"]')
      }
      ${icon ? Icon(icon) : ''}
      ${(error || pattern || isValidated) ? Icon(errorIcon) : ''}
      ${success ? Icon(successIcon) : ''}
      ${
        hint || isValidated ?
          `<div id="${id}-hint" class="hint">
            <div class="hint-caret"></div>
            <span class="hint-text">${hint}</span>
          </div>`
        : ''
      }
    </span>`
    /* eslint-enable indent */
  );

}

/**
 * Render a group of inputs
 * @param {array} inputArr - Collection of inputs
 * @param {string} display - Group display type (inline|block)
 * @param {array} classArr - Additional classNames (Optional)
 * @param {boolean} rounded - The input group shape (Optional)
 * @returns {string} - Markup for input group
 */

function renderInputGroup({display, inputArr, classArr, rounded}) { /* eslint-disable-line no-unused-vars */

  const classNames = classArr ? classArr.join(' ') : '';
  const groupShape = rounded ? 'input-group--rounded' : '';
  if (!display) {
    throw new Error('renderInputGroup method requires `display` as a string');
  }
  return (
    `<div class="input-group--${display} ${groupShape} ${classNames}">
      ${inputArr.map((item) => item).join('')}
    </div>`
  );

}

const errorIcon = {
  size: 'sm',
  id: 'warning',
  title: 'An error occured',
  classArr: ['icon--error']
};

const successIcon = {
  size: 'sm',
  id: 'check',
  title: 'Action successful',
  classArr: ['icon--success']
};

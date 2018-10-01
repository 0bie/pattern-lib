import Icon from '../icon/template';
import {addClassNames, getShape} from '../utils';

export default renderButton;

/**
 * Render a button
 * @param {object} button - The button properties
 * @param {string} [button].size - The button size (xs|sm|md|lg|xl|xxl)
 * @param {string} [button].text - The button text
 * @param {object} [button].icon - The button icon properties (Optional)
 * @param {string} [button].iconPosition - The icon position (Optional)
 * @param {array} [button].classArr - Additional classnames (Optional)
 * @param {boolean} [button].disabled - The disabled state (Optional)
 * @returns {string} Markup for button component
 */

function renderButton(button) {

  if (!button || typeof button !== 'object') {
    throw new Error('renderButton method requires `button` as an object');
  }
  const {size, text, icon, iconPosition, classArr, disabled} = button;
  const buttonIsLoading = classArr && classArr.includes('btn--loading');
  const buttonIsDisabled = disabled ? 'disabled' : '';
  return (
    /* eslint-disable indent */
    `<button class="btn btn--${size} ${addClassNames(classArr)}" ${buttonIsDisabled}>
      ${icon && iconPosition == 'left' ? Icon({size, ...icon}) : ''}
      ${text ? `<span class="btn-text">${text}</span>`
        : buttonIsLoading ? '<span class="text--sr">loading</span>'
        : !iconPosition ? Icon({size, ...icon}) : ''}
      ${icon && iconPosition == 'right' ? Icon({size, ...icon}) : ''}
    </button>`
    /* eslint-enable indent */
  );

}

/**
 * Render a group of buttons
 * @param {array} buttonArr - Collection of buttons
 * @param {string} display - Group display type (inline|block)
 * @param {array} classArr - Additional classNames (Optional)
 * @param {boolean} rounded - The button group shape (Optional)
 * @returns {string} - Markup for button group
 */

function renderButtonGroup({display, buttonArr, classArr, rounded}) {

  if (!display) {
    throw new Error('renderInputGroup method requires `display` as a string');
  }
  return (
    `<div class="btngroup--${display} ${getShape(rounded, 'btngroup')} ${addClassNames(classArr)}">
      ${buttonArr.map((item) => item).join('')}
    </div>`
  );

}

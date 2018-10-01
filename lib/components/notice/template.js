import Icon from '../icon/template';
import {getNoticeState} from './utils';
import {addClassNames, getShape} from '../utils';

export default renderNotice;

/**
 * Render a notice message
 * @param {object} notice - The notice properties
 * @param {string} [notice].id - The notice `id`
 * @param {string} [notice].message - The notice message
 * @param {string} [notice].state - The notice state
 * @param {object} [notice].icon - Icon properties (Optional)
 * @param {string} [notice].iconPosition - The icon position (Optional)
 * @param {boolean} [notice].rounded - The notice shape
 * @param {array} [notice].classArr Additional classNames (Optional)
 * @returns {string} Markup for message component
 */

function renderNotice(notice) {

  if (!notice) {
    throw new Error('renderNotice method requires `message` as a string');
  }
  const {id, message, state, icon, iconPosition, rounded, classArr} = notice;
  return (
    `<div id=${id} class="notice ${getNoticeState(state)} ${getShape(rounded, 'notice')} ${addClassNames(classArr)}">
      ${icon && iconPosition == 'left' ? Icon(icon) : ''}
      <p>${message ? message : Error('notice needs to render a message')}</p>
      ${icon && iconPosition == 'right' ? Icon(icon) : ''}
    </div>`
  );

}

import Icon from '../icon/template';
import {addClassNames, getShape} from '../utils';

export default renderModal;

/**
 * Render a modal
 * @param {string} id - The modal `id`
 * @param {string} title - The modal title
 * @param {any} content - The modal content
 * @param {array} classArr - Additional classNames
 * @param {boolean} rounded - The modal outline shape
 * @param {boolean} preventClose - Can a user dismiss the modal?
 * @returns {string} Markup for modal component
 */

function renderModal({id, title, content, classArr, rounded, preventClose}) {

  return (
    `<div class="modal-container ${addClassNames(classArr)} ${getShape(rounded)}">
      ${renderModalHeader(title, preventClose)}
      <section id="${id}" class="modal">${content}</section>
    </div>`
  );

}

/**
 * Render modal header
 * @param {string} title - Modal title
 * @param {boolean} closeButton - Modal close button
 * @returns {string} Header markup
 */

function renderModalHeader(title, preventClose) {
  const closeButton = !preventClose ? `<button class="btn btn--sm btn--link">${Icon({id: 'x1', size: 'sm', title: 'close', classArr: ['vert--mid'], description: 'close the modal'})}</button>` : '';
  return (
    `<header class="modal-header">
      <h1 class="modal-title">${title}</h1>
      ${closeButton}
    </header>`
  );
}

import Icon from '../icon';

export default renderModal;

/**
 * Render a modal
 * @param {string} id - The modal `id`
 * @param {string} title - The modal title
 * @param {any} content - The modal content
 * @param {array} classArr - Additional classNames
 * @param {boolean} rounded - The modal outline shape
 * @param {boolean} canDismiss - Can a user dismiss the modal?
 * @returns {string} Markup for modal component
 */

function renderModal({id, title, content, classArr, rounded, canDismiss = true}) {

  const modalShape = rounded ? 'rounded' : '';
  const classNames = classArr ? classArr.join(' ') : '';
  return (
    `<div class="modal-container ${classNames} ${modalShape}">
      ${renderModalHeader(title, canDismiss)}
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

function renderModalHeader(title, closeButton) {
  const dismiss = closeButton ? `<button class="btn btn--sm btn--link">${Icon(exitIcon)}</button>` : '';
  return (
    `<header class="modal-header">
      <h1 class="modal-title">${title}</h1>
      ${dismiss}
    </header>`
  );
}

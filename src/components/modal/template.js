import Icon from '../icon/template';

export default renderModal;
export const modalMarkup = template;

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

/**
 * Modal template
 * @returns {string} modal markup
 */

function template() {
  return (
    `<div class="constrain mb--md">${renderModal(modal)}</div>
    <div class="constrain">${renderModal(modal2)}</div>`
  );
}

/**
 * Modal properties
 */

const exitIcon = {
  id: 'x1',
  size: 'sm',
  title: 'Close',
  classArr: ['vert--mid'],
  description: 'Close the modal',
};

const modalContent = '<div class="mb--xs">Customer-centric design is the process of building your product or service based on ' +
                     'the wants, needs, and challenges of your customers. ' +
                     'A customer-centric product team is attentive to the voice of the customer at every stage ' +
                     'of product development: before you build, while you build, and after you build.</div>' +
                     '<div class="mb--xs">Sometimes it\'s the same complaint that 50 people sent through the feedback funnel. ' +
                     'Sometimes it\'s half a dozen different feature requests that are all different ways to ' +
                     'solve the same problem, and you find that common thread and identify the smartest way to ' +
                     'solve it for everyone. Sometimes, it\'s a bulleted list of very specific things that a high-value ' +
                     'client sends over and wants you to make.</div>' +
                     '<div>Even a feature that many users ask about may not be a good fit for your organization. You can\'t lose ' +
                     'sight of what exactly it is that you do and who you are as an organization. There are times when you ' +
                     'have to say no.</div>';

const modal = {
  id: 'modal1',
  title: 'Modal Title',
  content: modalContent
};

const modal2 = Object.assign({}, modal, {
  id: 'modal2',
  rounded: true
});

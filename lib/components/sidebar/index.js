export {default as sidebar} from './template';

/**
 * Handle sidebar states
 * @param {string} evtType - The `Event` type
 * @param {string} parent -  The parent element `id`
 * @returns null
 */

export function sidebarHandler(evtType, parent) {

  const sidebar = document.getElementById(parent);
  if (!sidebar) {
    throw new Error('sidebarHandler method requires `parent` as a valid HTML element');
  }
  sidebar.addEventListener(evtType, sidebarToggleHandler.bind(null, sidebar), false);

}

/**
 * Show and hide the sidebar
 * @param {string} parent - The parent element
 * @param {object} evt - The `Event` object
 */

function sidebarToggleHandler(parent, evt) {

  const key = evt.keyCode || evt.which;
  const sidebar = parent.querySelector('ul');
  const toggleButton = parent.querySelector('.btn--full');
  const sidebarIsOpen = sidebar.classList.contains('sidebar--active') && parent.contains(toggleButton);

  if (evt.type === 'keypress' && key !== 13) { return null; }
  if (evt.target === toggleButton) {
    sidebar.classList.toggle('sidebar--active');
    toggleButton.setAttribute('tabindex', (sidebarIsOpen ? 0 : -1));
  }

}

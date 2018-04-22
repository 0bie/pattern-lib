import {sidebarMarkup} from './template';

document.addEventListener('DOMContentLoaded', appendSidebar);


/**
 * Add the template to the DOM
 */

function appendSidebar() {
  const sidebarContainer = document.createElement('div');
  const sidebarFragment = document.createDocumentFragment();
  sidebarContainer.classList.add('mb--lg');
  if (sidebarMarkup) {
    sidebarContainer.innerHTML = sidebarMarkup();
  }
  sidebarFragment.appendChild(sidebarContainer);
  document.getElementById('root').appendChild(sidebarFragment);

  /**
   * Sidebar events
   */

  sidebarHandler('click', 'sidebar_left');
  sidebarHandler('keypress', 'sidebar_left');
  sidebarHandler('click', 'sidebar_right');
  sidebarHandler('keypress', 'sidebar_right');
  sidebarHandler('click', 'sidebar_top');
  sidebarHandler('keypress', 'sidebar_top');
  sidebarHandler('click', 'sidebar_bottom');
  sidebarHandler('keypress', 'sidebar_bottom');
}

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

  if (evt.type === 'keypress' && key !== 13) return null;
  if (evt.target === toggleButton) {
    sidebar.classList.toggle('sidebar--active');
    toggleButton.setAttribute('tabindex', (sidebarIsOpen ? 0 : -1));
  }

}

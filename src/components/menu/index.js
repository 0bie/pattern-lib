import {menuMarkup} from './template';

document.addEventListener('DOMContentLoaded', appendMenu);

/**
 * Add the template to the DOM
 */

function appendMenu() {
  const menuFragment = document.createDocumentFragment();
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('mb--lg');
  if (menuMarkup) { menuContainer.innerHTML = menuMarkup(); }
  menuFragment.appendChild(menuContainer);
  document.getElementById('root').appendChild(menuFragment);
}

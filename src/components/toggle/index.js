import {toggleMarkup} from './template';

document.addEventListener('DOMContentLoaded', appendToggle);

/**
 * Add the template to the DOM
 */

function appendToggle() {
  const toggleContainer = document.createElement('div');
  const toggleFragment = document.createDocumentFragment();
  toggleContainer.classList.add('mb--lg', 'p--xs');
  if (toggleMarkup) {
    toggleContainer.innerHTML = toggleMarkup();
  }
  toggleFragment.appendChild(toggleContainer);
  document.getElementById('root').appendChild(toggleFragment);
}


import {statusMarkup} from './template';

document.addEventListener('DOMContentLoaded', appendStatus);

/**
 * Add the template to the DOM
 */

function appendStatus() {
  const statusContainer = document.createElement('div');
  const statusFragment = document.createDocumentFragment();
  statusContainer.classList.add('mb--lg', 'p--xs');
  if (statusMarkup) {
    statusContainer.innerHTML = statusMarkup();
  }
  statusFragment.appendChild(statusContainer);
  document.getElementById('root').appendChild(statusFragment);
}

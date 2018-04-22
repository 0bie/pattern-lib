import {spinnerMarkup} from './template';

document.addEventListener('DOMContentLoaded', appendSpinner);

/**
 * Add the template to the DOM
 */

function appendSpinner() {
  const spinnerContainer = document.createElement('div');
  const spinnerFragment = document.createDocumentFragment();
  spinnerContainer.classList.add('mb--lg', 'p--md');
  if (spinnerMarkup) {
    spinnerContainer.innerHTML = spinnerMarkup();
  }
  spinnerFragment.appendChild(spinnerContainer);
  document.getElementById('root').appendChild(spinnerFragment);
}


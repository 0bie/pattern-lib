import {radioMarkup} from './template';

document.addEventListener('DOMContentLoaded', appendRadio);

/**
 * Add the template to the DOM
 */

function appendRadio() {
  const radioContainer = document.createElement('div');
  const radioFragment = document.createDocumentFragment();
  radioContainer.classList.add('mb--lg');
  if (radioMarkup) {
    radioContainer.innerHTML = radioMarkup();
  }
  radioFragment.appendChild(radioContainer);
  document.getElementById('root').appendChild(radioFragment);
}


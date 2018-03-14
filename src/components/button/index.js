import {buttonMarkup} from './template';

document.addEventListener('DOMContentLoaded', appendButton);

/**
 * Add the template to the DOM
 */

function appendButton() {
  const buttonContainer = document.createElement('div');
  const buttonFragment = document.createDocumentFragment();
  buttonContainer.classList.add('mb--lg');
  if (buttonMarkup) { buttonContainer.innerHTML = buttonMarkup(); }
  buttonFragment.appendChild(buttonContainer);
  document.getElementById('root').appendChild(buttonFragment);
}

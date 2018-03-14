import {checkboxMarkup} from './template';

document.addEventListener('DOMContentLoaded', appendCheckbox);

/**
 * Add the template to the DOM
 */

function appendCheckbox() {
  const checkboxFragment = document.createDocumentFragment();
  const checkboxContainer = document.createElement('div');
  checkboxContainer.classList.add('mb--lg', 'plr--md');
  if (checkboxMarkup) { checkboxContainer.innerHTML = checkboxMarkup(); }
  checkboxFragment.appendChild(checkboxContainer);
  document.getElementById('root').appendChild(checkboxFragment);
}


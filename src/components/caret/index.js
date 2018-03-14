import {caretMarkup} from './template';

document.addEventListener('DOMContentLoaded', appendCaret);

/**
 * Add the template to the DOM
 */

function appendCaret() {
  const caretFragment = document.createDocumentFragment();
  const caretContainer = document.createElement('div');
  caretContainer.classList.add('mb--lg', 'p--sm');
  if (caretMarkup) { caretContainer.innerHTML = caretMarkup(); }
  caretFragment.appendChild(caretContainer);
  document.getElementById('root').appendChild(caretFragment);
}

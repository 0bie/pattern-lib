import {blockquoteMarkup} from './template';

document.addEventListener('DOMContentLoaded', appendBlockquote);

/**
 * Add the template to the DOM
 */

function appendBlockquote() {
  const blockquoteFragment = document.createDocumentFragment();
  const blockquoteContainer = document.createElement('div');
  blockquoteContainer.classList.add('mb--lg', 'p--xs');
  if (blockquoteMarkup) { blockquoteContainer.innerHTML = blockquoteMarkup(); }
  blockquoteFragment.appendChild(blockquoteContainer);
  document.getElementById('root').appendChild(blockquoteFragment);
}

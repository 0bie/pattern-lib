import {listMarkup} from './template';

document.addEventListener('DOMContentLoaded', appendList);

/**
 * Add the template to the DOM
 */

function appendList() {
  const listFragment = document.createDocumentFragment();
  const listContainer = document.createElement('div');
  listContainer.classList.add('mb--lg', 'p--xs');
  if (listMarkup) { listContainer.innerHTML = listMarkup(); }
  listFragment.appendChild(listContainer);
  document.getElementById('root').appendChild(listFragment);
}

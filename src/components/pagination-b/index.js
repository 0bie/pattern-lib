import {paginationMarkup} from './template';

document.addEventListener('DOMContentLoaded', appendPagination);

/**
 * Add the template to the DOM
 */

function appendPagination() {
  const paginationContainer = document.createElement('div');
  const paginationFragment = document.createDocumentFragment();
  paginationContainer.classList.add('mb--lg');
  if (paginationMarkup) {
    paginationContainer.innerHTML = paginationMarkup();
  }
  paginationFragment.appendChild(paginationContainer);
  document.getElementById('root').appendChild(paginationFragment);
}

import {tableMarkup} from './template';

document.addEventListener('DOMContentLoaded', appendTable);

/**
 * Add the template to the DOM
 */

function appendTable() {
  const tableContainer = document.createElement('div');
  const tableFragment = document.createDocumentFragment();
  tableContainer.classList.add('mb--lg');
  if (tableMarkup) { tableContainer.innerHTML = tableMarkup(); }
  tableFragment.appendChild(tableContainer);
  document.getElementById('root').appendChild(tableFragment);
}

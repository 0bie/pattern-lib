import {dataTreeMarkup} from './template';

document.addEventListener('DOMContentLoaded', appendDatatree);

/**
 * Add the template to the DOM
 */

function appendDatatree() {
  const datatreeFragment = document.createDocumentFragment();
  const datatreeContainer = document.createElement('div');
  datatreeContainer.classList.add('mb--xxxxl', 'plr--md');
  if (dataTreeMarkup) {
    datatreeContainer.innerHTML = dataTreeMarkup();
  }
  datatreeFragment.appendChild(datatreeContainer);
  document.getElementById('root').appendChild(datatreeFragment);
}

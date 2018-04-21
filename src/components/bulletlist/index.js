import {bulletlistMarkup} from './template';

document.addEventListener('DOMContentLoaded', appendBulletlist);

/**
 * Add the template to the DOM
 */

function appendBulletlist() {
  const bulletlistFragment = document.createDocumentFragment();
  const bulletlistContainer = document.createElement('div');
  bulletlistContainer.classList.add('mb--lg', 'p--xs');
  if (bulletlistMarkup) {
    bulletlistContainer.innerHTML = bulletlistMarkup();
  }
  bulletlistFragment.appendChild(bulletlistContainer);
  document.getElementById('root').appendChild(bulletlistFragment);
}


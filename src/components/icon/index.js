import {icons} from './icons';
import {iconSetMarkup} from './template';

document.addEventListener('DOMContentLoaded', appendIcon);

/**
 * Add the template to the DOM
 */

function appendIcon() {
  const iconFragment = document.createDocumentFragment();
  const iconContainer = document.createElement('div');
  iconContainer.classList.add('mb--lg', 'p--xs');
  if (iconSetMarkup) { iconContainer.innerHTML = iconSetMarkup(icons); }
  iconFragment.appendChild(iconContainer);
  document.getElementById('root').appendChild(iconFragment);
}


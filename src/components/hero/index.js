import {heroMarkup} from './template';

document.addEventListener('DOMContentLoaded', appendHero);

/**
 * Add the template to the DOM
 */

function appendHero() {
  const heroFragment = document.createDocumentFragment();
  const heroContainer = document.createElement('div');
  heroContainer.classList.add('mb--xxl');
  if (heroMarkup) { heroContainer.innerHTML = heroMarkup(); }
  heroFragment.appendChild(heroContainer);
  document.getElementById('root').appendChild(heroFragment);
}

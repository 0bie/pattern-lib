import {cardMarkup} from './template';

document.addEventListener('DOMContentLoaded', appendCard);

/**
 * Add the template to the DOM
 */

function appendCard() {
  const cardFragment = document.createDocumentFragment();
  const cardContainer = document.createElement('div');
  cardContainer.classList.add('mb--lg');
  if (cardMarkup) { cardContainer.innerHTML = cardMarkup(); }
  cardFragment.appendChild(cardContainer);
  document.getElementById('root').appendChild(cardFragment);
}

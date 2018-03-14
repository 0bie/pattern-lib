import {mediaMarkup} from './template';

document.addEventListener('DOMContentLoaded', appendMedia);

/**
 * Add the template to the DOM
 */

function appendMedia() {
  const mediaFragment = document.createDocumentFragment();
  const mediaContainer = document.createElement('div');
  mediaContainer.classList.add('mb--lg');
  if (mediaMarkup) { mediaContainer.innerHTML = mediaMarkup(); }
  mediaFragment.appendChild(mediaContainer);
  document.getElementById('root').appendChild(mediaFragment);
}

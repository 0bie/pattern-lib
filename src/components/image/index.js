import {imageMarkup} from './template';

document.addEventListener('DOMContentLoaded', appendImage);

/**
 * Add the template to the DOM
 */

function appendImage() {
  const imageFragment = document.createDocumentFragment();
  const imageContainer = document.createElement('div');
  imageContainer.classList.add('mb--md', 'p--lg');
  if (imageMarkup) { imageContainer.innerHTML = imageMarkup(); }
  imageFragment.appendChild(imageContainer);
  document.getElementById('root').appendChild(imageFragment);
}

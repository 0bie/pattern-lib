import {modalMarkup} from './template';
import {preventOuterScroll} from '../utils';

document.addEventListener('DOMContentLoaded', appendModal);

/**
 * Add the template to the DOM
 */

function appendModal() {
  const modalFragment = document.createDocumentFragment();
  const modalContainer = document.createElement('div');
  modalContainer.classList.add('mb--xxl');
  if (modalMarkup) { modalContainer.innerHTML = modalMarkup(); }
  modalFragment.appendChild(modalContainer);
  document.getElementById('root').appendChild(modalFragment);
  preventOuterScroll('wheel', 'modal1');
  preventOuterScroll('wheel', 'modal2');
}


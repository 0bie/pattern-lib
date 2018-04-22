import {noticeMarkup} from './template';

document.addEventListener('DOMContentLoaded', appendNotice);

/**
 * Add the template to the DOM
 */

function appendNotice() {
  const noticeContainer = document.createElement('div');
  const noticeFragment = document.createDocumentFragment();
  noticeContainer.classList.add('mb--lg');
  if (noticeMarkup) {
    noticeContainer.innerHTML = noticeMarkup();
  }
  noticeFragment.appendChild(noticeContainer);
  document.getElementById('root').appendChild(noticeFragment);
}

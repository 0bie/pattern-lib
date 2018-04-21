import {avatarMarkup} from './template';

document.addEventListener('DOMContentLoaded', appendAvatar);

/**
 * Add the template to the DOM
 */

function appendAvatar() {
  const avatarFragment = document.createDocumentFragment();
  const avatarContainer = document.createElement('div');
  avatarContainer.classList.add('mb--lg', 'plr--sm');
  if (avatarMarkup) {
    avatarContainer.innerHTML = avatarMarkup();
  }
  avatarFragment.appendChild(avatarContainer);
  document.getElementById('root').appendChild(avatarFragment);
}

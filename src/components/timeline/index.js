import {timelineMarkup} from './template';

document.addEventListener('DOMContentLoaded', appendTimeline);

/**
 * Add the template to the DOM
 */

function appendTimeline() {
  const timelineContainer = document.createElement('div');
  const timelineFragment = document.createDocumentFragment();
  timelineContainer.classList.add('mb--lg', 'plr--md');
  if (timelineMarkup) {
    timelineContainer.innerHTML = timelineMarkup();
  }
  timelineFragment.appendChild(timelineContainer);
  document.getElementById('root').appendChild(timelineFragment);
}

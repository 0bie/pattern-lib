export {default as cardlist} from './template';

/**
 * Handle cardlist states
 * @param {string} evtType - The `Event` type
 * @param {string} id - `id` of the cardlist element
 * @returns null
 */

export function cardlistHandler(evtType, id) {

  const cardlist = document.getElementById(id);

  if (!cardlist) {
    throw new Error('cardlistHandler method requires a valid HTML element');
  }
  cardlistResizeHandler(cardlist, 639);
  cardlist.addEventListener(evtType, cardlistToggleHandler.bind(null, cardlist), false);

}

/**
 * Toggle expanded state on cardlist image
 * @param {Object} parent - The parent element
 * @param {Object} evt - The `Event` object
 * @returns null
 */

function cardlistToggleHandler(parent, evt) {

  const cardlistSections = [...parent.children];
  if (!cardlistSections || cardlistSections.length === 0) {
    throw new Error('cardlistToggleHandler requires `parent` as an element with children');
  }
  cardlistSections.forEach((section) => {
    let toggleInitiated;
    const key = evt.keyCode || evt.which;
    const toggleButton = section.querySelector('.cardlist-expand');
    const toggleIcon = toggleButton.querySelector('.icon--expand');
    const image = section.querySelector('img');
    const imageContainer = section.querySelector('.image-container');
    const toggled = (evt.target === toggleButton);

    if (evt.type === 'keypress' && key !== 13) { return null; }
    if (image.clientHeight) {
      toggleInitiated = section.contains(evt.target) && toggled;
    }
    if (toggleInitiated) {
      const imageIsExpanded = (imageContainer.clientHeight >= image.clientHeight);
      toggleButton.setAttribute('tabindex', (!imageIsExpanded ? 0 : -1));
      imageContainer.setAttribute('aria-hidden', (!imageIsExpanded ? 'false' : 'true'));
      toggleIcon.setAttribute('style', `transform: rotate(${imageIsExpanded ? 0 : '0.12turn'})`);

      /**
       * Force the style mutation onto the task queue
       * 100ms delay required for transition between states
       * Reference: https://bit.ly/1PvBq2v
       */

      setTimeout(() => {
        imageContainer.setAttribute('style', `height: ${!imageIsExpanded ? image.clientHeight + 'px' : 0}`);
      }, 100);
      imageContainer.style.height = image.clientHeight + 'px';

      if (toggleInitiated) {
        imageContainer.addEventListener('transitionend', function handler() {
          const contentIsOpen = imageContainer.style.height === 'auto';
          const contentIsClosed = imageContainer.style.height === 0 || imageContainer.style.height === '0px';
          if (contentIsClosed) return false;
          if (!contentIsOpen && !contentIsClosed) imageContainer.style.height = 'auto';
        });
      }
    }
  });

}

/**
 * Toggle expanded state on image after browser resize
 * @param {Object} parent - The parent element
 * @param {number} breakpoint - The max-width for smaller devices (based on `$smaller` breakpoint set in css)
 * @returns null
 */

export function cardlistResizeHandler(parent, breakpoint) {

  window.addEventListener('resize', function handler() {
    const cardlistSections = [...parent.children];
    if (!cardlistSections || cardlistSections.length === 0) {
      throw new Error('cardlistResizeHandler method requires `parent` as an element with children');
    }
    cardlistSections.forEach((section) => {
      const viewportWidth = document.documentElement.clientWidth;
      const imageContainer = section.querySelector('.image-container');
      const imageIsExpanded = (imageContainer.clientHeight > 0) && (viewportWidth <= breakpoint);
      if (imageIsExpanded) {
        imageContainer.style.height = 0 + 'px';
        imageContainer.setAttribute('aria-hidden', 'true');
        section.classList.remove('expanded');
      }
      imageContainer.setAttribute('aria-hidden', (viewportWidth > breakpoint ? 'false' : 'true'));
    });
  });

}

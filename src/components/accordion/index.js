import {accordionMarkup} from './template';

document.addEventListener('DOMContentLoaded', appendAccordion);

/**
 * Add the template to the DOM
 */

function appendAccordion() {

  const accordionContainer = document.createElement('div');
  const accordionFragment = document.createDocumentFragment();

  accordionContainer.classList.add('mt--lg', 'mb--xxxxl');
  if (accordionMarkup) {
    accordionContainer.innerHTML = accordionMarkup();
  }
  accordionFragment.appendChild(accordionContainer);
  document.getElementById('root').appendChild(accordionFragment);

  /**
   * Accordion events
   */

  accordionHandler('click', 'accordion1', 'accordion-section--active');
  accordionHandler('keypress', 'accordion1', 'accordion-section--active');
  accordionHandler('click', 'accordion2', 'accordion-section--active');
  accordionHandler('keypress', 'accordion2', 'accordion-section--active');

}

/**
 * Handle accordion states
 * @param {string} evtType - The `Event` type
 * @param {string} id - `id` of the accordion element
 * @param {string} className - `class` to toggle on the accordion section
 * @returns null
 */

export function accordionHandler(evtType, id, className) {

  const openClass = className;
  const accordion = document.getElementById(id);

  if (!accordion) {
    throw new Error('accordionHandler method requires a valid HTML element');
  }
  accordion.addEventListener(evtType, toggleAccordionState.bind(null, accordion, openClass), false);

}

/**
 * Toggle open state on accordion sections
 * @param {object} parent - The parent element
 * @param {string} className - The `class`name to toggle
 * @param {object} evt - The `Event` object
 * @returns null
 */

function toggleAccordionState(parent, className, evt) {

  const key = evt.keyCode || evt.which;
  const accordionSections = [...parent.children];
  if (!accordionSections || accordionSections.length === 0) {
    throw new Error('toggleAccordionState requires `parent` as an element with children');
  }
  accordionSections.forEach((section) => {
    const container = section.querySelector('.accordion-wrap');
    const content = section.querySelector('.accordion-content');
    const title = section.querySelector('.accordion-title');
    const toggleInitiated = section.contains(evt.target) && (evt.target.nodeName === title.nodeName);
    if (evt.type === 'keypress' && key !== 13) return null;
    if (toggleInitiated) {
      section.classList.toggle(className);
      const contentIsOpen = section.classList.contains(className) && section.contains(content);
      content.setAttribute('aria-hidden', (contentIsOpen ? 'false' : 'true'));
      title.setAttribute('tabindex', (contentIsOpen ? 0 : -1));

      /**
       * Force the style mutation onto the task queue
       * 100ms delay required for transition between states
       * Reference: https://bit.ly/1PvBq2v
       */

      setTimeout(() => {
        container.setAttribute('style', `height: ${contentIsOpen ? content.clientHeight + 'px' : 0}`);
      }, 100);
      container.style.height = content.clientHeight + 'px';

      if (section.contains(content)) {
        container.addEventListener('transitionend', function handler() {
          const contentIsOpen = container.style.height === 'auto';
          const contentIsClosed = container.style.height < content.clientHeight || container.style.height === '0px';
          if (contentIsClosed) return false;
          if (!contentIsOpen && !contentIsClosed) container.style.height = 'auto';
        });
      }
    }
  });

}

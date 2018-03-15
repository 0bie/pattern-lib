import {toggleClassHandler} from '../utils';

export {default} from './template';

/**
 * Handle tab states
 * @param {string} evtType - The `Event` type
 * @param {string} parent - The parent element `id`
 */

export function tabsetHandler(evtType, parent) {


  const tab = document.getElementById(parent);
  const activeClass = 'tab-item--active';

  if (!tab) {
    throw new Error('tabHandler method requires `parent` as a valid HTML element');
  }
  toggleClassHandler(tab, evtType, activeClass);
  tab.addEventListener(evtType, tabsetToggleHandler.bind(null, tab), false);

}

/**
 * Toggle aria attributes on tab elements
 * @param {object} parent - The parent element
 * @param {object} evt - The `Event` object
 * @returns null
 */

function tabsetToggleHandler(parent, evt) {
  const key = evt.keyCode || evt.which;
  const tabItems = [...parent.children];
  if (!tabItems || tabItems.length === 0) {
    throw new Error('accessibilityHandler method requires `parent` as an element with children');
  }
  if (evt.type === 'keypress' && key !== 13) { return null; }
  tabItems.forEach((item) => {
    const title = item.querySelector('h1');
    const section = item.querySelector('section');
    const toggleInitiated = item.contains(evt.target);
    title.setAttribute('tabindex', (toggleInitiated ? 0 : -1));
    section.setAttribute('aria-hidden', (toggleInitiated ? 'false' : 'true'));
  });
}

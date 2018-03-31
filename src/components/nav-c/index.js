import {navigationMarkup} from './template';
import {debounce} from '../utils';

document.addEventListener('DOMContentLoaded', appendNavigation);

/**
 * Add the template to the DOM
 */

function appendNavigation() {
  const navigationContainer = document.createElement('div');
  const navigationFragment = document.createDocumentFragment();
  navigationContainer.classList.add('mb--xxxxl');
  if (navigationMarkup) { navigationContainer.innerHTML = navigationMarkup(); }
  navigationFragment.appendChild(navigationContainer);
  document.getElementById('root').appendChild(navigationFragment);

  /**
   * Navigation events
   */

  navigationHandler('click', 'nav-c');
  navigationHandler('keypress', 'nav-c');
}

/**
 * Handle navigation states
 * @param {string} evtType - The `Event` type
 * @param {string} id - `id` of the navigation element
 * @returns null
 */

export function navigationHandler(evtType, id) {

  const navigation = document.getElementById(id);
  if (!navigation) {
    throw new Error('navigationHandler method requires a valid HTML element');
  }
  navigationResizeHandler(navigation, 641);
  navigation.addEventListener(evtType, navigationToggleHandler.bind(null, navigation), false);

}


/**
 * Show and hide navigation menu
 * @param {string} parent - The parent element
 * @param {object} evt - The `Event` object
 * @returns null
 */

function navigationToggleHandler(parent, evt) {

  const key = evt.keyCode || evt.which;
  const main = document.querySelector('.main');
  const navList = parent.querySelector('.nav-c-list');
  const menuIcon = parent.querySelector('.nav-c-menu');
  const toggled = (evt.target === menuIcon);
  const toggleInitiated = !parent.classList.contains('nav-c--active') && toggled;
  if (evt.type === 'keypress' && key !== 13) { return null; }
  if (toggled) {
    parent.classList.toggle('nav-c--active');
    navList.setAttribute('aria-hidden', (toggleInitiated ? 'false' : 'true'));
    main.setAttribute('style', `overflow: ${toggleInitiated ? 'hidden' : 'auto'}`);
  }

}

/**
 * Toggle `<main>` active state after browser resize
 * @param {Object} parent - The parent element
 * @param {number} breakpoint - The min-width for larger devices (based on `$postSmaller` breakpoint set in css)
 * @returns null
 */

function navigationResizeHandler(parent, breakpoint) {
  window.addEventListener('resize', debounce(handler, 500));
  function handler() {
    const main = document.querySelector('.main');
    const viewportWidth = document.documentElement.clientWidth;
    const navIsVisible = parent.classList.contains('nav-c--active');
    if (navIsVisible && viewportWidth > breakpoint) { main.style.overflow = 'auto'; }
  }
}

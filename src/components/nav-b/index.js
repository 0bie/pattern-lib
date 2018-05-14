import {navigationMarkup} from './template';
import {preventOuterScroll} from '../utils';

document.addEventListener('DOMContentLoaded', appendNavigation);

/**
 * Add the template to the DOM
 */

function appendNavigation() {
  const navigationContainer = document.createElement('div');
  const navigationFragment = document.createDocumentFragment();
  navigationContainer.classList.add('mb--lg');
  if (navigationMarkup) {
    navigationContainer.innerHTML = navigationMarkup();
  }
  navigationFragment.appendChild(navigationContainer);
  document.getElementById('root').appendChild(navigationFragment);

  /**
   * Navigation events
   */

  navigationHandler('click', 'nav-b');
  navigationHandler('keypress', 'nav-b');
  preventOuterScroll('wheel', 'nav-b-drawer');
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
  navigation.addEventListener(evtType, navigationToggleHandler.bind(null, navigation), false);

}

/**
 * Show and hide navigation drawer
 * Show and hide navigation list
 * @param {string} parent - The parent element
 * @param {string} evt - The `Event` object
 * @returns null
 */

function navigationToggleHandler(parent, evt) {

  const key = evt.keyCode || evt.which;

  /**
   * Drawer menu properties
   */

  const nav = parent.querySelector('#nav-b-drawer');
  const exitIcon = parent.querySelector('.exit');
  const menuIcon = parent.querySelector('.icon--menu');
  const toggled = (evt.target === menuIcon) || (evt.target === exitIcon);
  const toggleInitiated = !nav.classList.contains('is-visible') && toggled;
  exitIcon.setAttribute('tabindex', 0);
  if (evt.type === 'keypress' && key !== 13) return null;
  if (toggled) {
    nav.classList.toggle('is-visible');
    nav.setAttribute('aria-hidden', (toggleInitiated ? 'false' : 'true'));
  }

  /**
   * Nested list properties
   */

  const nestedList = parent.querySelector('.drawer--nested');
  const nestedItem = parent.querySelector('.drawer-item--nested');
  const nestedListContainer = parent.querySelector('.drawer-wrap');
  const toggled_nested = (evt.target === nestedItem);
  const toggleInitiated_nested = !nestedItem.classList.contains('is-visible') && toggled_nested;
  nestedItem.setAttribute('tabindex', 0);

  if (toggled_nested) {

    /**
     * Force the style mutation onto the task queue
     * 100ms delay required for transition between states
     * Reference: https://bit.ly/1PvBq2v
     */

    setTimeout(() => {
      nestedListContainer.setAttribute('style', `height: ${toggleInitiated_nested ? nestedList.clientHeight + 'px' : 0}`);
    }, 100);
    nestedListContainer.style.height = nestedList.clientHeight + 'px';

    nestedItem.classList.toggle('is-visible');
    nestedList.setAttribute('aria-hidden', (toggleInitiated_nested ? 'false' : 'true'));
    nestedListContainer.addEventListener('transitionend', function handler() {
      const listIsOpen = nestedListContainer.style.height === nestedList.clientHeight;
      const listIsClosed = nestedListContainer.style.height < nestedList.clientHeight || nestedListContainer.style.height === '0px';
      if (listIsClosed) return false;
      if (!listIsOpen && !listIsClosed) nestedListContainer.style.height = 'auto';
    });
  }

}


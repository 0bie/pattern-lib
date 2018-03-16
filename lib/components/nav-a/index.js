export {default as nav_a} from './template';

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
 * Show and hide navigation overlay
 * @param {string} parent - The parent element
 * @param {string} evt - The `Event` object
 * @returns null
 */

function navigationToggleHandler(parent, evt) {

  const key = evt.keyCode || evt.which;
  const nav = parent.querySelector('.nav-a--sm');
  const menuIcon = parent.querySelector('.icon--menu');
  const exitIcon = parent.querySelector('.icon--exit');
  const toggled = (evt.target === menuIcon) || (evt.target === exitIcon);
  const toggleInitiated = !parent.classList.contains('is-active') && toggled;

  if (evt.type === 'keypress' && key !== 13) { return null; }
  if (toggled) {
    parent.classList.toggle('is-active');
    document.documentElement.classList.toggle('nav-a_is-active');
    nav.setAttribute('aria-hidden', (toggleInitiated ? 'false' : 'true'));
  }

}

/**
 * Toggle a className between child elements
 * @param {Object} parent - The parent element
 * @param {string} evtType - The event listener `type`
 * @param {string} className - The `class` to toggle
 * @returns null
 */

export function toggleClassHandler(parent, evtType, className) {

  try {
    var elementArr = [...parent.children];
    parent.addEventListener(evtType, handler, false);
  } catch (error) {
    throw new Error('toggleClassHandler method requires `parent` as a valid HTML element');
  }

  function handler(evt) {
    if (!className || typeof className !== 'string') {
      throw new Error('toggleClassHandler method requires `className` as a string');
    }
    for (let i = 0; i < elementArr.length; i++) {
      const toggleInitiated = elementArr[i].contains(evt.target);
      if (toggleInitiated && !elementArr[i].classList.contains(className)) {
        elementArr[i].classList.add(className);
      }
      if (!toggleInitiated) { elementArr[i].classList.remove(className); }
    }
  }

}

/**
 * Toggle the visibility of an element
 * @example: https://jsfiddle.net/dzigSawww/r4np2qod/
 * @param {string} evtType - The `Event` type
 * @param {string} parentId - The `id` of the parent element
 * @param {string} targetId - The `id` of the target element
 * @param {string} className - The `class` to toggle on the parent element
 * @returns null
 */

export function toggleVisibilityHandler(evtType, parentId, targetId, className) {

  const parent = document.getElementById(parentId);
  const target = document.getElementById(targetId);
  if (!parent || !target) {
    throw new Error('toggleVisibilityHandler method requires `parentId` and `tagretId` as valid HTML elements');
  }

  parent.addEventListener(evtType, function parentHandler(evt) {

    const key = evt.keyCode || evt.which;
    if (key === 13) { target.click(); }
    if (evt.target.id === targetId) { parent.classList.toggle(className); }
    const elementIsVisible = parent.classList.contains(className);
    target.setAttribute('aria-expanded', (elementIsVisible ? 'true' : 'false'));
  }, false);

  document.addEventListener(evtType, function documentHandler(evt) {
    const toggleInitiated = (evt.target.id !== targetId) && (!parent.contains(evt.target));
    if (toggleInitiated) {
      parent.classList.remove(className);
      target.setAttribute('aria-expanded', 'false');
    }
  }, false);

}

/**
 * Prevent scroll/wheel event from propagating to the document element
 * @example https://jsfiddle.net/dzigSawww/54rp47vg/
 * @param {string} evtType - The `Event` type
 * @param {string} id - The element id
 * @returns null
 */

export function preventOuterScroll(evtType, id) {

  const el = document.getElementById(id);
  const isMacWebkit = (navigator.userAgent.indexOf('Macintosh') !== -1) || (navigator.userAgent.indexOf('WebKit') !== -1);

  try {
    el.addEventListener(evtType, scrollHandler, false);
  } catch (error) {
    throw new Error('preventOuterScroll method requires `id` as a valid HTML element');
  }

  function scrollHandler(evt) {
    let deltaY = evt.deltaY * -30 || 0;

    /**
     * On Mac & WebKit browsers mousewheels seem to be velocity-sensitive and
     * the delta values are often larger multiples of 120 (the default)
     */

    if (isMacWebkit) {
      deltaY /= 30;
    }

    evt.currentTarget.scrollTop -= deltaY;

    /**
     * prevent from scrolling parent elements
     */

    evt.preventDefault();
    evt.stopPropagation();
    return false;
  }

}

/**
 * Delay the execution of a function
 * until a certain duration after an event occurs
 * Reference: https://ibb.co/b2JVx7
 * @example https://jsfiddle.net/spckajwz/6/
 *
 * @param {function} fn - The function to delay
 * @param {number} duration - The wait duration in milliseconds
 * @returns {function}
 */

export function debounce(fn, duration) {
  let timeout;
  return function() {
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, args);
    }, duration);
  };
}

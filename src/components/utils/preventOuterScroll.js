/**
 * Prevent scroll/wheel event from propagating to the document element
 * @example https://jsfiddle.net/dzigSawww/54rp47vg/
 * @param {string} evtType - The `Event` type
 * @param {string} id - The element id
 * @returns null
 */

export default function preventOuterScroll(evtType, id) {

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

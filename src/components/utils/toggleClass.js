/**
 * Toggle a className between child elements
 * @param {Object} parent - The parent element
 * @param {string} evtType - The event listener `type`
 * @param {string} className - The `class` to toggle
 * @returns null
 */

export default function toggleClassHandler(parent, evtType, className) {

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

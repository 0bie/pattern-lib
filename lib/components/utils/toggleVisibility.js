/**
 * Toggle the visibility of an element
 * @example: https://jsfiddle.net/dzigSawww/r4np2qod/
 * @param {string} evtType - The `Event` type
 * @param {string} parentId - The `id` of the parent element
 * @param {string} targetId - The `id` of the target element
 * @param {string} className - The `class` to toggle on the parent element
 * @returns null
 */

export default function toggleVisibilityHandler(evtType, parentId, targetId, className) {

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

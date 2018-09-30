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

export default function debounce(fn, duration) {
  let timeout;
  return function() {
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, args);
    }, duration);
  };
}

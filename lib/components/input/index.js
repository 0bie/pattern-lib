export {
  default as input ,
  renderInputGroup as inputGroup
} from './template';

/**
 * Force only certain characters
 * based on keyevents
 */

export function inputFilterHandler() {

  const inputElements = document.querySelectorAll('.input[data-pattern]');
  const inputArr = [...inputElements];
  for (let i = 0 ; i < inputArr.length; i++) {
    const input = inputArr[i];
    input.addEventListener('keypress', filter, false);
  }

}

/**
 * Filter the user's input
 * @param {object} evt - The `Event` object
 */

function filter(evt) {

  let text = null;
  const target = evt.target;
  const key = evt.key || evt.which;

  /**
   * Get the input character
   */

  if (evt.type === 'keypress') {
    const deletekey = (key === 'Backspace') || (key === 8);
    const spaceKey = (key === ' ') || (key === 32);
    const modifierKey = evt.ctrlKey || evt.metaKey || deletekey || spaceKey;
    if (modifierKey) { return null; }
    text = evt.key || String.fromCharCode(evt.which);
  }

  /**
   * Get attribute values from `<input>`
   */

  const hintId = target.getAttribute('data-hint');
  const legalCharacters = target.getAttribute('data-pattern');
  if (hintId) {
    var containerId = hintId.substr(0, hintId.indexOf('-'));
    var container = document.getElementById(containerId);
  }

  /**
   * Match the `evt.key` character against `data-pattern`
   */

  const pattern = new RegExp(legalCharacters);
  for (let i = 0; i < text.length; i++) {
    const character = text.charAt(i);
    if (!character.match(pattern)) {
      if (container) { container.classList.add('input-field--error'); }
      evt.preventDefault();
      evt.returnValue = false;
      return false;
    }
  }
  if (container) { container.classList.remove('input-field--error'); }

}

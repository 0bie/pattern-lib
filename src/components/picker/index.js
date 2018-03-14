import {pickerMarkup} from './template';
import {preventOuterScroll} from '../utils';

document.addEventListener('DOMContentLoaded', appendPicker);

/**
 * Add the template to the DOM
 */

function appendPicker() {
  const pickerContainer = document.createElement('div');
  const pickerFragement = document.createDocumentFragment();
  pickerContainer.classList.add('mb--lg');
  if (pickerMarkup) { pickerContainer.innerHTML = pickerMarkup(); }
  pickerFragement.appendChild(pickerContainer);
  document.getElementById('root').appendChild(pickerFragement);

  /**
   * Picker events
   */

  preventOuterScroll('wheel', 'picker');
  preventOuterScroll('wheel', 'picker_rounded');
}

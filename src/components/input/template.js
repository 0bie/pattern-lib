import Icon from '../icon/template';
import {getInputState} from './utils';
import {addClassNames, getShape} from '../utils';

export default renderInput;
export const inputMarkup = template;

/**
 * Render an input element
 * @param {object} input - The input properties
 * @param {string} [input].id - The input id
 * @param {string} [input].inputId - The `<input>` element `id
 * @param {string} [input].type - The input type
 * @param {size} [input].size - The input size (xs|sm|md|lg|xl|xxl)
 * @param {string} [input].placeholder - The input placeholder
 * @param {object} [input].icon - Icon properties (Optional)
 * @param {boolean} [input].state - The input state (Optional)
 * @param {string} [input].hint - The validation message (Optional)
 * @param {boolean} [input].rounded - The input shape (Optional)
 * @param {array} [input].inputClass - Additional input classNames (Optional)
 * @param {array} [input].classArr - Additional input field classNames (Optional)
 * @param {string} [input].pattern - A RegEx pattern (Optional)
 * @returns {string} Markup for input component
 */

function renderInput(input) {

  const {
    id = '',
    size,
    placeholder,
    icon,
    state,
    hint,
    inputId,
    inputClass,
    classArr,
    rounded,
    pattern,
    type = 'text'
  } = input;

  const isValidated = hint && pattern;
  const patternAttributes = pattern ? `data-pattern="${pattern}" data-hint="${id}-hint"` : '';

  if (!inputId || !size) {
    throw new Error('renderInput method requires `inputId` and `size` as a string');
  }
  return (
    /* eslint-disable indent */
    `<span id=${id} class="input-field ${getInputState(state)} ${addClassNames(classArr)}">
      ${
        type === 'text' ?
          `<input id=${inputId} class="input input--${size} ${getShape(rounded, 'input')} ${addClassNames(inputClass)}" type="text" placeholder="${placeholder}" ${patternAttributes} />`
        : type === 'number' ?
          `<input id=${inputId} class="input input--${size} ${getShape(rounded, 'input')} ${addClassNames(inputClass)}" type="number" placeholder="${placeholder}" />`
        : type === 'textField' ?
          `<textarea id=${inputId} class="input input--${size} ${getShape(rounded)} ${addClassNames(inputClass)}" placeholder="${placeholder}" ${patternAttributes}></textarea>`
        : new Error ('renderInput method requires `type` as a string ["text"|"number"|"textField"]')
      }
      ${icon ? Icon(icon) : ''}
      ${(state === 'error' || pattern || isValidated) ? Icon(errorIcon) : ''}
      ${state === 'success' ? Icon(successIcon) : ''}
      ${hint || isValidated ?
          `<div id="${id}-hint" class="hint">
            <div class="hint-caret"></div>
            <span class="hint-text">${hint}</span>
          </div>`
        : ''}
    </span>`
    /* eslint-enable indent */
  );

}

/**
 * Render a group of inputs
 * @param {array} inputArr - Collection of inputs
 * @param {string} display - Group display type (inline|block)
 * @param {array} classArr - Additional classNames (Optional)
 * @param {boolean} rounded - The input group shape (Optional)
 * @returns {string} - Markup for input group
 */

function renderInputGroup({display, inputArr, classArr, rounded}) {

  const classNames = classArr ? classArr.join(' ') : '';
  const groupShape = rounded ? 'input-group--rounded' : '';
  if (!display) {
    throw new Error('renderInputGroup method requires `display` as a string');
  }
  return (
    `<div class="input-group--${display} ${groupShape} ${classNames}">
      ${inputArr.map((item) => item).join('')}
    </div>`
  );

}

/**
 * Input template
 * @returns {string} input markup
 */

function template() {
  return (
    /* eslint-disable indent */
    `<div class="mb--md">
      <div class="input-container">
        ${renderInput(Object.assign({}, input, {id: 'input_error_test', inputId: 'foo', state: 'error'}))}
      </div>
      ${renderInput(input_sm)}
      ${renderInput(input_md)}
      ${renderInput(input_lg)}
      ${renderInput(input_xl)}
      ${renderInput(input_xxl)}
    </div>
    <div class="input-row mb--md">
      <div>${renderInput(input_validate)}</div>
      <div>
        ${
          renderInput(Object.assign({}, input_validate, {
            id: 'input_valid',
            inputId: 'input_validate2',
            pattern: '^[a-zA-Z]+$',
            placeholder: 'Type a letter...'
          }))
        }
      </div>
    </div>
    <div class="mb--md">
      <div class="input-container">
        ${renderInput(input_search)}
      </div>
      <div class="input-container">
        ${renderInput(input_search_rounded)}
      </div>
      <div class="input-container">
        ${
          renderInput(Object.assign({}, input_rounded, {
            state: 'success'
          }))
        }
      </div>
      ${renderInput(input_rounded_md)}
      ${renderInput(input_rounded_lg)}
      ${renderInput(input_rounded_xl)}
      ${renderInput(input_rounded_xxl)}
    </div>
    <div class="mb--md">
      ${
        renderInputGroup({
          display: 'inline',
          inputArr: [
            renderInput(Object.assign({}, input, {inputId: 'input_group1'})),
            renderInput(Object.assign({}, input, {inputId: 'input_group2'})),
            renderInput(Object.assign({}, input, {inputId: 'input_group3'}))
          ]
        })
      }
    </div>
    <div class="mb--md">
      ${
        renderInputGroup({
          display: 'block',
          inputArr: [
            renderInput(Object.assign({}, input, {inputId: 'input_groupa'})),
            renderInput(Object.assign({}, input, {inputId: 'input_groupb'})),
            renderInput(Object.assign({}, input, {inputId: 'input_groupc'}))
          ]
        })
      }
    </div>
    <div class="mb--md">
      ${
        renderInputGroup({
          display: 'inline',
          rounded: true,
          inputArr: [
            renderInput(Object.assign({}, input, {inputId: 'input_group_roundeda'})),
            renderInput(Object.assign({}, input, {inputId: 'input_group_roundedb'})),
            renderInput(Object.assign({}, input, {inputId: 'input_group_roundedc'}))
          ]
        })
      }
    </div>
    <div class="mb--md">
      ${
        renderInputGroup({
          display: 'block',
          rounded: true,
          inputArr: [
            renderInput(Object.assign({}, input, {inputId: 'input_group_rounded1'})),
            renderInput(Object.assign({}, input, {inputId: 'input_group_rounded2'})),
            renderInput(Object.assign({}, input, {inputId: 'input_group_rounded3'}))
          ]
        })
      }
    </div>
    <div class="mb--md">
      <div class="mb--sm">
        ${renderInput(input_textarea)}
        ${renderInput(input_textarea_sm)}
        ${renderInput(input_textarea_md)}
        ${renderInput(input_textarea_lg)}
        ${renderInput(input_textarea_xl)}
        ${renderInput(input_textarea_xxl)}
      </div>
      <div class="mb--sm">
        ${renderInput(Object.assign({}, input_textarea_md, {
          id: 'input_textarea_md_full',
          classArr: ['input--full']
        }))}
      </div>
      <div>
        ${renderInput(Object.assign({}, input_textarea_md, {
          id: 'input_textarea_md_error',
          state: 'error',
          hint: 'This is a form validation error message',
          inputClass: ['input--raised'],
          classArr: ['input--full']
        }))}
      </div>
    </div>
    <div class="mb--md">
      ${renderInput(input_textarea_rounded)}
      ${renderInput(input_textarea_rounded_sm)}
      ${renderInput(input_textarea_rounded_md)}
      ${renderInput(input_textarea_rounded_lg)}
      ${renderInput(input_textarea_rounded_xl)}
      ${renderInput(input_textarea_rounded_xxl)}
    </div>
    <div class="mb--md">
      ${renderInput(Object.assign({}, input_textarea_rounded, {
        id: 'input_textarea_rounded_full',
        size: 'md',
        classArr: ['input--full']
      }))}
    </div>
    <div class="input-row mb--md">
      <div>
        ${renderInput(Object.assign({}, input_textarea_rounded, {
          id: 'input_textarea_rounded_success',
          size: 'md',
          state: 'success',
          hint: 'This is a form validation success message',
          inputClass: ['input--raised'],
          classArr: ['input--full']
        }))}
      </div>
      <div>
        ${renderInput(Object.assign({}, input_textarea_rounded, {
          id: 'input_textarea_rounded_error',
          size: 'md',
          state: 'error',
          hint: 'This is a form validation error message',
          inputClass: ['input--raised'],
          classArr: ['input--full']
        }))}
      </div>
    </div>
    <div class="input-row mb--md">
      <div class="mb--md">${renderInput(input_validate_number)}</div>
      <div>${renderInput(input_validate_letter)}</div>
    </div>`
    /* eslint-enable indent */
  );
}

/**
 * Input properties
 */

const searchIcon = {
  size: 'sm',
  id: 'search3',
  title: 'Search Icon',
  description: 'Search for content'
};

const errorIcon = {
  size: 'sm',
  id: 'warning',
  title: 'An error occured',
  classArr: ['icon--error']
};

const successIcon = {
  size: 'sm',
  id: 'check',
  title: 'Action successful',
  classArr: ['icon--success']
};

const input = {
  size: 'xs',
  type: 'text',
  placeholder: 'Type here...'
};

const input_sm = Object.assign({}, input, {
  size: 'sm',
  id: 'input_sm',
  inputId: 'input_sm1'
});

const input_md = Object.assign({}, input, {
  size: 'md',
  id: 'input_md',
  inputId: 'input_md1'
});

const input_lg = Object.assign({}, input, {
  size: 'lg',
  id: 'input_lg',
  inputId: 'input_lg1'
});

const input_xl = Object.assign({}, input, {
  size: 'xl',
  id: 'input_xl',
  inputId: 'input_xl1'
});

const input_xxl = Object.assign({}, input, {
  size: 'xxl',
  id: 'input_xxl',
  inputId: 'input_xx1'
});

const input_rounded = Object.assign({}, input, {
  size: 'sm',
  rounded: true,
  id: 'input_rounded',
  inputId: 'input_rounded1'
});

const input_rounded_md = Object.assign({}, input_rounded, {
  size: 'md',
  id: 'input_rounded_md',
  inputId: 'input_rounded_md1'
});

const input_rounded_lg = Object.assign({}, input_rounded, {
  size: 'lg',
  id: 'input_rounded_lg',
  inputId: 'input_rounded_lg1'
});

const input_rounded_xl = Object.assign({}, input_rounded, {
  size: 'xl',
  id: 'input_rounded_xl',
  inputId: 'input_rounded_xl1'
});

const input_rounded_xxl = Object.assign({}, input_rounded, {
  size: 'xxl',
  id: 'input_rounded_xxl',
  inputId: 'input_rounded_xxl1'
});

const input_textarea = Object.assign({}, input, {
  type: 'textField',
  id: 'input_textarea',
  inputId: 'input_textarea1'
});

const input_textarea_sm = Object.assign({}, input_textarea, {
  size: 'sm',
  id: 'input_textarea_sm',
  inputId: 'input_textarea_sm1'
});

const input_textarea_md = Object.assign({}, input_textarea, {
  size: 'md',
  id: 'input_textarea_md',
  inputId: 'input_textarea_md1'
});

const input_textarea_lg = Object.assign({}, input_textarea, {
  size: 'lg',
  id: 'input_textarea_lg',
  inputId: 'input_textarea_lg1'
});

const input_textarea_xl = Object.assign({}, input_textarea, {
  size: 'xl',
  id: 'input_textarea_xl',
  inputId: 'input_textarea_xl1'
});

const input_textarea_xxl = Object.assign({}, input_textarea, {
  size: 'xxl',
  id: 'input_textarea_xxl',
  inputId: 'input_textarea_xxl1'
});

const input_textarea_rounded = Object.assign({}, input_textarea, {
  rounded: true,
  id: 'input_textarea_rounded',
  inputId: 'input_textarea_rounded_rounded1'
});

const input_textarea_rounded_sm = Object.assign({}, input_textarea_rounded, {
  size: 'sm',
  id: 'input_textarea_rounded_sm',
  inputId: 'input_textarea_rounded_rounded_sm1'
});

const input_textarea_rounded_md = Object.assign({}, input_textarea_rounded, {
  size: 'md',
  id: 'input_textarea_rounded_md',
  inputId: 'input_textarea_rounded_md1'
});

const input_textarea_rounded_lg = Object.assign({}, input_textarea_rounded, {
  size: 'lg',
  id: 'input_textarea_rounded_lg',
  inputId: 'input_textarea_rounded_lg1'
});

const input_textarea_rounded_xl = Object.assign({}, input_textarea_rounded, {
  size: 'xl',
  id: 'input_textarea_rounded_xl',
  inputId: 'input_textarea_rounded_xl1'
});

const input_textarea_rounded_xxl = Object.assign({}, input_textarea_rounded, {
  size: 'xxl',
  id: 'input_textarea_rounded_xxl',
  inputId: 'input_textarea_rounded_xxl1'
});

const input_search = Object.assign({}, input, {
  id: 'input_search',
  inputId: 'input_search1',
  inputClass: ['pr--md'],
  icon: Object.assign({}, searchIcon, {classArr: ['icon--search-right']})
});

const input_search_rounded = Object.assign({}, input_search, {
  rounded: true,
  id: 'input_search_rounded',
  inputId: 'input_search_rounded1',
  inputClass: ['pr--md']
});

const input_validate = {
  size: 'sm',
  type: 'text',
  pattern: '^[0-9]*$',
  id: 'input_validate',
  inputId: 'input_validate1',
  classArr: ['input--full'],
  placeholder: 'Type a number...',
};

const input_validate_number = Object.assign({}, input_validate, {
  id: 'input_validate_number',
  inputId: 'input_validate_number1',
  placeholder: 'Type a number...',
  hint: 'You need to type a number!'
});

const input_validate_letter = Object.assign({}, input_validate, {
  pattern: '^[a-zA-Z]+$',
  id: 'input_validate_letter',
  inputId: 'input_validate_letter1',
  placeholder: 'Type a letter...',
  hint: 'You need to type a letter!'
});

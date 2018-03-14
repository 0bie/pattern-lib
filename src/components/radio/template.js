export default renderRadioInput;
export const radioMarkup = template;

/**
 * Render a radio input
 * @param {string} id - The input `id`
 * @param {string} size - The input size (sm|md|lg)
 * @param {string} label - The input label
 * @param {array} classArr - Additional classNames (Optional)
 * @returns {string} Markup for radio input
 */

function renderRadioInput({id, size, label, classArr}) {

  if (!id | !size) {
    throw new Error('renderRadioInput method requires `id` & `size` as a string');
  }
  const classNames = classArr ? classArr.join(' ') : '';
  return (
    `<label id=${id} class="radio-container ${classNames}">
      <input class="radio radio--${size} hidden" type="radio" name=${id} />
      <div><span class="radio-label">${label}</span></div>
    </label>`
  );

}

/**
 * Radio template
 * @returns {string} radio input markup
 */

function template() {
  return (
    `<div class="p--md">
      <div>${renderRadioInput(radio_sm)}</div>
      <div>${renderRadioInput(radio_md)}</div>
      <div>${renderRadioInput(radio_lg)}</div>
    </div>`
  );
}

/**
 * Radio input properties
 */

const radio_sm = {
  id: 'radio_sm',
  size: 'sm',
  label: 'Radio Label',
  classArr: ['mb--xs']
};

const radio_md = {
  id: 'radio_md',
  size: 'md',
  label: 'Radio Label',
  classArr: ['mb--xs']
};

const radio_lg = {
  id: 'radio_lg',
  size: 'lg',
  label: 'Radio Label'
};


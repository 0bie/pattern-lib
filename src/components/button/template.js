import Icon from '../icon/template';

export default renderButton;
export const buttonMarkup = template;

/**
 * Render a button
 * @param {object} button - The button properties
 * @param {string} [button].size - The button size (xs|sm|md|lg|xl|xxl)
 * @param {string} [button].text - The button text
 * @param {object} [button].icon - The button icon properties (Optional)
 * @param {string} [button].iconPosition - The icon position (Optional)
 * @param {array} [button].classArr - Additional classnames (Optional)
 * @param {boolean} [button].disabled - The disabled state (Optional)
 * @returns {string} Markup for button component
 */

function renderButton(button) {

  if (!button || typeof button !== 'object') {
    throw new Error('renderButton method requires `button` as an object');
  }
  const {size, text, icon, iconPosition, classArr, disabled} = button;
  const classNames = classArr ? classArr.join(' ') : '';
  const buttonIsLoading = classArr && classArr.includes('btn--loading');
  const buttonIsDisabled = disabled ? 'disabled' : '';
  return (
    /* eslint-disable indent */
    `<button class="btn btn--${size} ${classNames}" ${buttonIsDisabled}>
      ${icon && iconPosition == 'left' ? Icon({size, ...icon}) : ''}
      ${text ? `<span class="btn-text">${text}</span>`
        : buttonIsLoading ? '<span class="text--sr">loading</span>'
        : !iconPosition ? Icon({size, ...icon}) : ''
      }
      ${icon && iconPosition == 'right' ? Icon({size, ...icon}) : ''}
    </button>`
    /* eslint-enable indent */
  );

}

/**
 * Render a group of buttons
 * @param {array} buttonArr - Collection of buttons
 * @param {string} display - Group display type (inline|block)
 * @param {array} classArr - Additional classNames (Optional)
 * @param {boolean} rounded - The button group shape (Optional)
 * @returns {string} - Markup for button group
 */

function renderButtonGroup({display, buttonArr, classArr, rounded}) {

  const classNames = classArr ? classArr.join(' ') : '';
  const groupShape = rounded ? 'btngroup--rounded' : '';
  if (!display) {
    throw new Error('renderInputGroup method requires `display` as a string');
  }
  return (
    `<div class="btngroup--${display} ${groupShape} ${classNames}">
      ${buttonArr.map((item) => item).join('')}
    </div>`
  );

}

/**
 * Button template
 * @returns {string} - button markup
 */

function template() {

  return (
    /* eslint-disable indent */
    `<section class="p--sm">
      <div class="mb--sm">
        ${renderButton(btn_xs)}
        ${renderButton(btn_sm)}
        ${renderButton(btn_md)}
        ${renderButton(btn_lg)}
        ${renderButton(btn_xl)}
        ${renderButton(btn_xxl)}
      </div>
    
      <div class="mb--sm">
        ${renderButton(btn_xs_icon)}
        ${renderButton(btn_sm_icon)}
        ${renderButton(btn_md_icon)}
        ${renderButton(btn_lg_icon)}
        ${renderButton(btn_xl_icon)}
        ${renderButton(btn_xxl_icon)}
      </div>
    
      <div class="mb--sm">
        ${renderButton(btn_full)}
      </div>
    
      <div class="mb--sm">
        ${renderButton(Object.assign({}, btn_xs, {classArr: ['btn--hover']}))}
        ${renderButton(Object.assign({}, btn_sm, {classArr: ['btn--hover']}))}
        ${renderButton(Object.assign({}, btn_md, {classArr: ['btn--hover']}))}
        ${renderButton(Object.assign({}, btn_lg, {classArr: ['btn--hover']}))}
        ${renderButton(Object.assign({}, btn_xl, {classArr: ['btn--hover']}))}
        ${renderButton(Object.assign({}, btn_xxl, {classArr: ['btn--hover']}))}
      </div>
    
      <div class="mb--sm">
        <div class="mb--sm">
          ${
            renderButtonGroup({
              display: 'inline',
              buttonArr: [
                renderButton(Object.assign({}, btn_xs, {text: 'Inline'})),
                renderButton(Object.assign({}, btn_xs, {text: 'Inline'})),
                renderButton(Object.assign({}, btn_xs, {text: 'Inline'}))
              ]
            })
          }
        </div>
        <div class="mb--sm">
          ${
            renderButtonGroup({
              display: 'block',
              buttonArr: [
                renderButton(Object.assign({}, btn_xs, {text: 'Block'})),
                renderButton(Object.assign({}, btn_xs, {text: 'Block'})),
                renderButton(Object.assign({}, btn_xs, {text: 'Block'}))
              ]
            })
          }
        </div>
      </div>
    
      <div class="mb--sm">
        ${renderButton(Object.assign({}, btn_xs, {classArr: ['btn--rounded']}))}
        ${renderButton(Object.assign({}, btn_sm, {classArr: ['btn--rounded']}))}
        ${renderButton(Object.assign({}, btn_md, {classArr: ['btn--rounded']}))}
        ${renderButton(Object.assign({}, btn_lg, {classArr: ['btn--rounded']}))}
        ${renderButton(Object.assign({}, btn_xl, {classArr: ['btn--rounded']}))}
        ${renderButton(Object.assign({}, btn_xxl, {classArr: ['btn--rounded']}))}
      </div>
    
      <div class="mb--sm">
        ${renderButton(btn_circle_icon)}
        ${renderButton(Object.assign({}, btn_circle_icon, {size: 'md'}))}
        ${renderButton(Object.assign({}, btn_circle_icon, {size: 'lg'}))}
        ${renderButton(Object.assign({}, btn_circle_icon, {size: 'xl'}))}
        ${renderButton(Object.assign({}, btn_circle_icon, {size: 'xxl'}))}
      </div>
    
      <div class="mb--sm">
        <div class="mb--sm">
            ${
              renderButtonGroup({
                rounded: true,
                display: 'inline',
                buttonArr: [
                  renderButton(Object.assign({}, btn_xs, {text: 'Inline'})),
                  renderButton(Object.assign({}, btn_xs, {text: 'Inline'})),
                  renderButton(Object.assign({}, btn_xs, {text: 'Inline'}))
                ]
              })
            }
          </div>
          <div class="mb--sm">
            ${
              renderButtonGroup({
                rounded: true,
                display: 'block',
                buttonArr: [
                  renderButton(Object.assign({}, btn_xs, {text: 'Block'})),
                  renderButton(Object.assign({}, btn_xs, {text: 'Block'})),
                  renderButton(Object.assign({}, btn_xs, {text: 'Block'}))
                ]
              })
            }
          </div>
      </div>
    
      <div class="mb--sm">
        ${renderButton(btn_loading_xs)}
        ${renderButton(btn_loading_sm)}
        ${renderButton(btn_loading_md)}
        ${renderButton(btn_loading_lg)}
        ${renderButton(btn_loading_xl)}
        ${renderButton(btn_loading_xxl)}
      </div>
    
      <div class="mb--sm">
        ${renderButton(btn_loading_circle)}
        ${renderButton(btn_loading_circle_sm)}
        ${renderButton(btn_loading_circle_md)}
        ${renderButton(btn_loading_circle_lg)}
        ${renderButton(btn_loading_circle_xl)}
        ${renderButton(btn_loading_circle_xxl)}
      </div>
    
      <div class="mb--md">
        ${renderButton(btn_disabled)}
        ${renderButton(Object.assign({}, btn_disabled, {size: 'sm'}))}
        ${renderButton(Object.assign({}, btn_disabled, {size: 'md'}))}
        ${renderButton(Object.assign({}, btn_disabled, {size: 'md', classArr: ['btn--disabled', 'btn--rounded']}))}
      </div>
    </section>`
    /* eslint-enable indent */
  );

}

/**
 * Button properties
 */

const inboxIcon = {
  id: 'inbox2',
  title: 'Inbox Icon',
  classArr: ['vert--mid'],
  description: 'Check your mail',
};

const deleteIcon = {
  id: 'trash3',
  title: 'Delete Icon',
  classArr: ['vert--mid'],
  description: 'delete this content',
};

const btn_xs = {
  size: 'xs',
  text: 'Button-xs',
};

const btn_sm = {
  size: 'sm',
  text: 'Button-sm',
};

const btn_md = {
  size: 'md',
  text: 'Button-md',
};

const btn_lg = {
  size: 'lg',
  text: 'Button-lg',
};

const btn_xl = {
  size: 'xl',
  text: 'Button-xl',
};

const btn_xxl = {
  size: 'xxl',
  text: 'Button-xxl',
};

const btn_full = {
  size: 'sm',
  text: 'Button-full',
  classArr: ['btn--full']
};

const btn_xs_icon = {
  size: 'xs',
  icon: inboxIcon,
  classArr: ['btn--raised']
};

const btn_sm_icon = Object.assign({}, btn_xs_icon, {
  size: 'sm',
  text: 'Button-sm',
  iconPosition: 'left'
});

const btn_md_icon = Object.assign({}, btn_xs_icon, {
  size: 'md',
  text: 'Button-md',
  iconPosition: 'left'
});

const btn_lg_icon = Object.assign({}, btn_xs_icon, {
  size: 'lg',
  text: 'Button-lg',
  iconPosition: 'right'
});

const btn_xl_icon = Object.assign({}, btn_md_icon, {
  size: 'xl',
  text: 'Button-xl',
  iconPosition: 'right'
});

const btn_xxl_icon = Object.assign({}, btn_md_icon, {
  size: 'xxl',
  text: 'Button-xxl',
  iconPosition: 'right'
});

const btn_circle_icon = {
  size: 'sm',
  icon: inboxIcon,
  classArr: ['btn--rounded']
};

const btn_loading_xs = {
  size: 'xs',
  classArr: ['btn--loading', 'btn--loading--xs']
};

const btn_loading_sm = Object.assign({}, btn_loading_xs, {
  size: 'sm',
  classArr: ['btn--loading', 'btn--loading--sm']
});

const btn_loading_md = Object.assign({}, btn_loading_xs, {
  size: 'md',
  classArr: ['btn--loading', 'btn--loading--md']
});

const btn_loading_lg = Object.assign({}, btn_loading_xs, {
  size: 'lg',
  classArr: ['btn--loading', 'btn--loading--lg']
});

const btn_loading_xl = Object.assign({}, btn_loading_xs, {
  size: 'xl',
  classArr: ['btn--loading', 'btn--loading--xl']
});

const btn_loading_xxl = Object.assign({}, btn_loading_xs, {
  size: 'xxl',
  classArr: ['btn--loading', 'btn--loading--xxl']
});

const btn_loading_circle = {
  size: 'xs',
  classArr: ['btn--loading', 'btn--loading--xs', 'btn--rounded']
};

const btn_loading_circle_sm = {
  size: 'sm',
  classArr: ['btn--loading', 'btn--loading--sm', 'btn--rounded']
};

const btn_loading_circle_md = {
  size: 'md',
  classArr: ['btn--loading', 'btn--loading--md', 'btn--rounded']
};

const btn_loading_circle_lg = {
  size: 'lg',
  classArr: ['btn--loading', 'btn--loading--lg', 'btn--rounded']
};

const btn_loading_circle_xl = {
  size: 'xl',
  classArr: ['btn--loading', 'btn--loading--xl', 'btn--rounded']
};

const btn_loading_circle_xxl = {
  size: 'xxl',
  classArr: ['btn--loading', 'btn--loading--xxl', 'btn--rounded']
};

const btn_disabled = {
  size: 'xs',
  disabled: true,
  text: 'Disabled',
  icon: deleteIcon,
  iconPosition: 'left'
};

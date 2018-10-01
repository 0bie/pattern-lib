import Icon from '../icon/template';
import {addClassNames, getShape} from '../utils';

export default renderAvatar;
export const avatarMarkup = template;

/**
 * Render an avatar
 * @param {object} avatar - The avatar properties
 * @param {string} [avatar].size - The avatar size (sm|md|lg|xl)
 * @param {string} [avatar].firstname - The user's firstname
 * @param {string} [avatar].lastname - The user's lastname
 * @param {string} [avatar].image - URL for profile image (Optional)
 * @param {object} [avatar].icon - Icon properties (Optional)
 * @param {boolean} [avatar].rounded - The avatar shape (Optional)
 * @param {array} [avatar].classArr - Additional classNames (Optional)
 * @returns {string} Markup for avatar component
 */

function renderAvatar(avatar) {

  if (!avatar) {
    throw new Error('renderAvatar method requires a valid object');
  }
  let name;
  const {size, firstname, lastname, image, icon, rounded, classArr} = avatar;
  if (!icon && (firstname || lastname)) {
    name = getName(firstname, lastname);
  }
  return (
    /* eslint-disable indent */
    `<div class="avatar avatar--${size} ${getShape(rounded, 'avatar')} ${addClassNames(classArr)}">
      ${
        image ? `<img class="avatar-img" src="${image}" alt="a profile photo of ${name}" />`
        : icon ? Icon(icon)
        : firstname || lastname ? `<div class="avatar-text">${getInitials(firstname, lastname)}</div>`
        : new Error('avatar needs to render some content')
      }
    </div>`
    /* eslint-enable-indent */
  );

}

/**
 * Get a user's name
 * @param {string} firstname - The user's firstname
 * @param {string} lastname - The user's lastname
 * @returns {string} - The user's first or last name
 */

function getName(firstname, lastname) {

  if (typeof firstname !== 'string' && typeof lastname !== 'string') {
    throw new Error('getName method requires `firstname` or `lastname` as a string');
  }
  const givenName = firstname ? firstname : '';
  const surname = lastname ? lastname : '';
  return givenName + ' ' + surname;

}

/**
 * Get a user's initials
 * @param {string} firstname - The user's firstname
 * @param {string} lastname - The user's lastname
 * @returns {string} - The first letter of the user's first or last name
 */

function getInitials(firstname, lastname) {

  if (typeof firstname !== 'string' && typeof lastname !== 'string') {
    throw new Error('getInitials method requires `firstname` or `lastname` as a string');
  }
  const firstInitial = firstname ? firstname.charAt(0) : '';
  const lastInitial = lastname ? lastname.charAt(0) : '';
  const initials = firstInitial + lastInitial;
  return initials.toUpperCase();

}

/**
 * Avatar template
 *  @returns {string} - avatar markup
 */

 function template() {

  return (
    `<div>
      <div class="mb--md">
        ${renderAvatar(avatar_sm)}
        ${renderAvatar(avatar_md)}
        ${renderAvatar(avatar_lg)}
        ${renderAvatar(avatar_xl)}
      </div>
      <div class="mb--md">
        ${renderAvatar(avatar_sm_rounded)}
        ${renderAvatar(avatar_md_rounded)}
        ${renderAvatar(avatar_lg_rounded)}
        ${renderAvatar(avatar_xl_rounded)}
      </div>
      <div class="mb--md">
        ${renderAvatar(avatar_sm_icon)}
        ${renderAvatar(avatar_md_icon)}
        ${renderAvatar(avatar_lg_icon)}
        ${renderAvatar(avatar_xl_icon)}
      </div>
      <div class="mb--md">
        ${renderAvatar(avatar_sm_icon_rounded)}
        ${renderAvatar(avatar_md_icon_rounded)}
        ${renderAvatar(avatar_lg_icon_rounded)}
        ${renderAvatar(avatar_xl_icon_rounded)}
      </div>
      <div>
        ${renderAvatar(avatar_sm_noImg)}
        ${renderAvatar(avatar_md_noImg)}
        ${renderAvatar(avatar_lg_noImg)}
        ${renderAvatar(avatar_xl_noImg)}
      </div>
    </div>`
  );

}

/**
 * Avatar properties
 */

const avatar_sm = {
  size: 'sm',
  firstname: 'Christina',
  image: 'assets/avatar/avatar3.jpg',
};

const avatar_md = Object.assign({}, avatar_sm, {
  size: 'md'
});

const avatar_lg = Object.assign({}, avatar_sm, {
  size: 'lg'
});

const avatar_xl = Object.assign({}, avatar_sm, {
  size: 'xl'
});

const avatar_sm_rounded = Object.assign({}, avatar_sm, {
  rounded: true,
  image: 'assets/avatar/avatar3.jpg'
});

const avatar_md_rounded = Object.assign({}, avatar_md, {
  rounded: true,
  image: 'assets/avatar/avatar3.jpg',
});

const avatar_lg_rounded = Object.assign({}, avatar_lg, {
  rounded: true,
  image: 'assets/avatar/avatar3.jpg'
});

const avatar_xl_rounded = Object.assign({}, avatar_xl, {
  rounded: true,
  image: 'assets/avatar/avatar3.jpg'
});

const iconProps = {
  size: 'sm',
  id: 'person',
  title: 'user avatar',
  description: 'the default avatar',
};

const avatar_sm_icon = {
  size: 'sm',
  icon: iconProps
};

const avatar_md_icon = Object.assign({}, avatar_sm_icon, {
  size: 'md'
});

const avatar_lg_icon = Object.assign({}, avatar_sm_icon, {
  size: 'lg'
});

const avatar_xl_icon = Object.assign({}, avatar_sm_icon, {
  size: 'xl'
});

const avatar_sm_icon_rounded = Object.assign({}, avatar_sm_icon, {
  rounded: true
});

const avatar_md_icon_rounded = Object.assign({}, avatar_md_icon, {
  rounded: true
});

const avatar_lg_icon_rounded = Object.assign({}, avatar_lg_icon, {
  rounded: true
});

const avatar_xl_icon_rounded = Object.assign({}, avatar_xl_icon, {
  rounded: true
});

const avatar_sm_noImg = {
  size: 'sm',
  lastname: 'egwim'
};

const avatar_md_noImg = Object.assign({}, avatar_sm_noImg, {
  size: 'md'
});

const avatar_lg_noImg = Object.assign({}, avatar_sm_noImg, {
  size: 'lg',
  firstname: 'obie'
});

const avatar_xl_noImg = Object.assign({}, avatar_sm_noImg, {
  size: 'xl',
  firstname: 'obie'
});

import Icon from '../icon';

export default renderAvatar;

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
  const classNames = classArr ? classArr.join(' ') : '';
  const avatarShape = rounded ? 'avatar--rounded' : '';
  if (!icon && (firstname || lastname)) { name = getName(firstname, lastname); }
  return (
    /* eslint-disable indent */
    `<div class="avatar avatar--${size} ${avatarShape} ${classNames}">
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

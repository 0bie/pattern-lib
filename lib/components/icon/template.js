export default renderIcon;

/**
 * @param {Object} icon - The icon properties
 * @param {string} [icon].id - The icon id
 * @param {string} [icon].size - Icon size
 * @param {string} [icon].title - Icon title
 * @param {string} [icon].fill - Icon fill color (Optional)
 * @param {string} [icon].description - Icon description (Optional)
 * @param {array} [icon].classArr - Additonal classNames (Optional)
 * @returns {string} Markup for icon component
 */

function renderIcon(icon) {

  if (!icon) {
    throw new Error('renderIcon method requires `icon` as an object');
  }
  const {id, classArr, size, fill, title, description} = icon;
  const iconFill = fill ? `style="fill: ${fill};"` : '';
  const classNames = classArr ? classArr.join(' ') : '';
  return (
    `<svg class="icon icon--${size} ${classNames}" ${iconFill} role="img" aria-labelledby="title" width="30" height="30">
      <title>${title}</title>
      ${description ? `<desc>${description}</desc>` : ''}
      <use xlink:href=#${id}></use>
    </svg>`
  );

}

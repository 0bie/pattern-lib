export default renderImage;
export const imageMarkup = template;

/**
 * @param {string} size - The image size (xs|sm|md|lg|xl)
 * @param {string} src - The image URL
 * @param {string} caption - The image caption (Optional)
 * @param {string} alt - Alternate text
 * @param {array} classArr - Additional classnames (Optional)
 * @returns {string} Markup for image component
 */

function renderImage({size, src, caption, classArr, alt = ''}) {
  const classNames = classArr ? classArr.join(' ') : '';
  return (
    `<figure class="image-container">
      <img class="image image--${size} ${classNames}" src="${src}" alt="${alt}" />
      ${caption ? `<figcaption class="image-caption">${caption}</figcaption>` : ''}
    </figure>`
  );
}

/**
 * Image template
 * @returns {string} image markup
 */

function template() {
  return (
    `<div>
      ${renderImage(image)}
      ${renderImage(image_sm)}
      ${renderImage(image_md)}
      ${renderImage(image_lg)}
      ${renderImage(image_xl)}
    </div>`
  );
}

/**
 * Image properties
 */

const image = {
  size: 'xs',
  src: 'assets/bag/bag2.jpg'
};

const image_sm = Object.assign({}, image, {size: 'sm'});

const image_md = Object.assign({}, image, {size: 'md'});

const image_lg = Object.assign({}, image, {
  size: 'lg',
  caption: 'More colors available'
});

const image_xl = Object.assign({}, image, {
  size: 'xl',
  caption: 'More colors available'
});


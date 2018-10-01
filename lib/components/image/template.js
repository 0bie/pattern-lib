import {addClassNames} from '../utils';

export default renderImage;

/**
 * @param {string} size - The image size (xs|sm|md|lg|xl)
 * @param {string} src - The image URL
 * @param {string} caption - The image caption (Optional)
 * @param {string} alt - Alternate text
 * @param {array} classArr - Additional classnames (Optional)
 * @returns {string} Markup for image component
 */

function renderImage({size, src, caption, classArr, alt = ''}) {
  return (
    `<figure class="image-container">
      <img class="image image--${size} ${addClassNames(classArr)}" src="${src}" alt="${alt}" />
      ${caption ? `<figcaption class="image-caption">${caption}</figcaption>` : ''}
    </figure>`
  );
}

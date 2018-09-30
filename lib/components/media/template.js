import Image from '../image/template';
import Icon from '../icon/template';
import {addClassNames} from '../utils';

export default renderMedia;

/**
 * @param {string} title - The media title
 * @param {string} description - The media content
 * @param {object} item - The media item (image|icon)
 * @param {boolean} footer - The media footer (Optional)
 * @param {string} footerContent - The footer content (Optional)
 * @param {array} classArr - Additional class names (Optional)
 * @returns {string} Markup for media component
 */

function renderMedia(media) {

  const {item, title, description, footer, footerContent, classArr} = media;
  return (
    /* eslint-disable indent */
    `<div class="media-container">
      <div class="media ${addClassNames(classArr)}">
        ${item ? renderMediaItem(item) : new Error('Media needs to render an item')}
        <div class="media-content">
          <div class="media-titlebar">
            <h4 class="media-title">${title}</h4>
          </div>
          ${description ? `<div class="media-description">${description}</div>` : ''}
        </div>
        ${footer ? `<div class="media-footer">
            <div class="content">
              <span class="block">${footerContent}</span>
            </div>
          </div>`
        : ''}
      </div>
    </div>`
    /* eslint-enable indent */
  );

}

/**
 * @param {object} icon - Icon properties
 * @param {string} image - Image URL
 * @returns {string} Markup for media item
 */

function renderMediaItem({icon, image}) {

  if (icon && image) {
    throw new Error('renderMediaItem method requires one of `icon` or `image`');
  }
  return (
    `<div class="media-item">
      ${icon ? Icon(icon) : ''}
      ${image ? Image(image) : ''}
    </div>`
  );

}

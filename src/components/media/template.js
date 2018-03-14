import Image from '../image/template';
import Icon from '../icon/template';

export default renderMedia;
export const mediaMarkup = template;

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
  const classNames = classArr ? classArr.join(' ') : '';
  return (
    /* eslint-disable indent */
    `<div class="media-container">
      <div class="media ${classNames}">
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

/**
 * Render media template
 * @returns {string} media markup
 */

function template() {
  return (
    `<div class="constrain mb--md">${renderMedia(media)}</div>
    <div class="constrain">${renderMedia(media1)}</div>`
  );
}

/**
 * Media properties
 */

const mediaImage = {
  size: 'md',
  src: 'assets/bag/bag3.jpg'
};

const favoriteIcon = {
  size: 'sm',
  id: 'heart',
  title: 'Love',
  fill: '#EC675C',
  classArr: ['icon--love', 'ml--xxs'],
  description: 'Handcrafted with love'
};

const media = {
  footer: true,
  title: 'Media Title',
  item: {image: mediaImage},
  footerContent: `Handcrafted with ${Icon(favoriteIcon)}`,
  description: 'Handcrafted with the highest quality materials.',
};

const media1 = Object.assign({}, media, {
  classArr: ['rounded']
});

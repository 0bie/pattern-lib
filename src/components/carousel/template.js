import Button from '../button/template';
import {addClassNames, getShape} from '../utils';

export default renderCarousel;
export const carouselMarkup = template;

/**
 * Render a carousel
 * @param {Object} carousel - The carousel properties
 * @param {string} [carousel].id - The carousel `id`
 * @param {array} [carousel].items - The carousel items
 * @param {boolean} [carousel].rounded - The carousel shape
 * @param {array} [carousel].classArr - Additional classnames (Optional)
 * @returns {string} - Markup for carousel component
 */

function renderCarousel({id, items, rounded, classArr}) {

  if (!id) {
    throw new Error('renderCarousel method requires `id` as a string');
  }
  return (
    `<div id=${id} class="carousel-container ${addClassNames(classArr)}">
      <div class="carousel ${getShape(rounded, 'carousel')}">
        <ul class="carousel-list">${items.map(renderCarouselItem).join('')}</ul>
      </div>
      <div class="carousel-controls">
        ${Button({size: 'md', icon: leftIcon, classArr: ['carousel-prev']})}
        ${Button({size: 'md', icon: rightIcon, classArr: ['carousel-next']})}
      </div>
    </div>`
  );

}

/**
 * Render a carousel item
 * @param {string} image - The image URL
 * @param {string} title - The item title
 * @param {string} description - The item description
 * @param {array} classArr - Additional classnames (Optional)
 * @returns {string} - Markup for carousel item
 */

function renderCarouselItem({image, title, description, classArr}) {
  return (
    `<li class="carousel-item ${addClassNames(classArr)}" aria-hidden="true">
      <div class="media-container">
        <div class="media">
          <div class="media-item">
            <img class="carousel-image" src="${image}" alt="" />
          </div>
          <div class="media-content">
            <h3 class="media-title">${title}</h3>
            <div class="media-description">
              ${description}
            </div>
          </div>
        </div>
      </div>
    </li>`
  );

}

/**
 * Carousel template
 * @returns {string} - carousel markup
 */

function template() {
  return (
    `<div>${renderCarousel(carousel)}</div>
    <div>${renderCarousel(carousel2)}</div>`
  );
}

/**
 * Carousel properties
 */

const description = 'The inspiration was to modernize classic leather messenger bags, tote bags, duffle bags, ' +
                    'backpacks, belts, and wallets. In the world of fast-fashion where many brands have moved away from high-quality products.';

const items = [
  {title: 'Carousel title 1', image: 'assets/bag/bag1.jpg', description},
  {title: 'Carousel title 2', image: 'assets/bag/bag2.jpg', description},
  {title: 'Carousel title 3', image: 'assets/bag/bag3.jpg', description}
];

const leftIcon = {
  size: 'md',
  id: 'chevron-left',
  title: 'Previous item',
  classArr: ['vert--mid']
};

const rightIcon = {
  size: 'md',
  title: 'Next item',
  id: 'chevron-right',
  classArr: ['vert--mid']
};

const carousel = {
  items,
  id: 'carousel'
};

const carousel2 = Object.assign({}, carousel, {
  rounded: true,
  id: 'carousel2'
});

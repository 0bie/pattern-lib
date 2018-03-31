import Button from '../button/template';

export default renderCarousel;

/**
 * Render a carousel
 * @param {Object} carousel - The carousel properties
 * @param {string} [carousel].id - The carousel `id`
 * @param {array} [carousel].items - The carousel items
 * @param {array} [carousel].classArr - Additional classnames (Optional)
 * @returns {string} - Markup for carousel component
 */

function renderCarousel({id, items, classArr}) {

  if (!id) {
    throw new Error('renderCarousel method requires `id` as a string');
  }
  const classNames = classArr ? classArr.join(' ') : '';
  const carouselShape = classArr && classArr.includes('carousel--rounded') ? 'carousel--rounded' : '';
  return (
    `<div id=${id} class="carousel-container ${classNames}">
      <div class="carousel ${carouselShape}">
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

  const classNames = classArr ? classArr.join(' ') : '';
  return (
    `<li class="carousel-item ${classNames}" aria-hidden="true">
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

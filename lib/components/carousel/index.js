export {default} from './template';

/**
 * Navigate through carousel items
 * @param {string} evtType - The `Event` type
 * @param {string} parent - The parent element `id`
 * @returns null
 */

function carouselHandler(evtType, parent) {

  const carousel = document.getElementById(parent);
  if (!carousel) {
    throw new Error('carouselHandler method requires `parent` as a valid HTLM element');
  }

  const nextButton = carousel.querySelector('.carousel-next');
  const prevButton = carousel.querySelector('.carousel-prev');
  const carouselList = carousel.querySelector('.carousel-list');
  const carouselItems = [...carouselList.children];
  const totalItems = carouselItems.length;

  /**
   * State variables
   * These values are mutated in the inner function (`carouselNavigationHandler`)
   * but stored here to keep track of current state
   */

  let counter = 0;
  let currentItem = carouselItems[0];

  /**
   * Bind carousel events
   */

  nextButton.addEventListener(evtType, () => carouselNavigationHandler(1));
  prevButton.addEventListener(evtType, () => carouselNavigationHandler(-1));

  /**
   * Initialize with the first item (`currentItem`)
   */

  carouselNavigationHandler(0);

  /**
   * Toggle `will-change` css property
   */

  nextButton.addEventListener('click', toggleWillChange.bind(null, carouselItems, 'opacity'));
  prevButton.addEventListener('click', toggleWillChange.bind(null, carouselItems, 'opacity'));
  nextButton.addEventListener('mouseenter', toggleWillChange.bind(null, carouselItems, 'opacity'));
  prevButton.addEventListener('mouseenter', toggleWillChange.bind(null, carouselItems, 'opacity'));


  /**
   * Determine which direction a user clicks & set the current item
   * based on the item index
   * @param {number} index - The index of the carousel item
   * @returns null
   */

  function carouselNavigationHandler(index) {

    if (index !== 0 && !index) {
      throw new Error('carouselNavigationHandler requires `index` as a number');
    }

    /**
     * Set inactive attributes & update `counter`
     */

    currentItem.classList.remove('carousel-item--active');
    currentItem.setAttribute('aria-hidden', 'true');
    counter += index;


    /**
     * Check if the user clicks `prevButton`
     * & ensure `counter` never goes below 0
     * set `counter` to the last item (totalItems - 1) if it is below 0
     */

    if (index === -1 && counter < 0) {
      counter = totalItems - 1;
    }

    /**
     * Check if the user clicks `nextButton`
     * & reset `counter` if `currentItem` is falsy (no item exists in that index)
     */

    if (index === 1 && !carouselItems[counter]) {
      counter = 0;
    }

    /**
     * Update `currentItem` & set active attributes
     */

    currentItem = carouselItems[counter];
    currentItem.classList.add('carousel-item--active');
    currentItem.setAttribute('aria-hidden', 'false');

  }

}

/**
 * Toggle will-change css property
 * Reference: https://goo.gl/GWFyg3
 * @param {array} items - The carousel items
 * @param {property} string - The css property that will change
 */

function toggleWillChange(items, property) {
  if (!items || items.length === 0) {
    throw new Error('toggleWillChange method requires `items` as an array');
  }
  items.forEach((item) => {
    const currentItem = item.classList.contains('carousel-item--active');
    item.setAttribute('style', `will-change: ${currentItem ? property : 'auto'}`);
  });
}

import Button from '../button/template';
import Icon from '../icon/template';

export default renderCard;
export const cardMarkup = template;


/**
 * Render a card
 * @param {object} card - The card properties
 * @param {string} [card].image - The image URL (Optional)
 * @param {any} [card].icon - An icon (Optional)
 * @param {srtring} [card].title - The card title
 * @param {string} [card].description - The card description
 * @param {array} [card].actions - Call to actions
 * @param {array} [card].classArr - Additional classnames (Optional)
 * @param {boolean} [card].footer - The card footer (Optional)
 * @returns {string} - Markup for card component
 */

function renderCard(card) {

  const {image, icon, title, description, actions, classArr, footer = true} = card;
  const classNames = classArr ? classArr.join(' ') : '';
  return (
    `<div class="card-container ${classNames}">
      <div class="card">
        ${icon || image ? renderCardItem(image, icon) : ''}
        <div class="card-content">${renderCardContent(title, description, classArr)}</div>
        ${footer ? `<div class="card-footer">${renderCardFooter(actions)}</div>` : ''}
      </div>
    </div>`
  );

}

/**
 * Render the card item
 * @param {string} image - The image URL
 * @param {icon} icon - The icon
 * @returns {string} - Markup for item
 */

function renderCardItem(image, icon) {
  return (
    `<div class="card-item">
      ${image ? `<img src=${image} alt="" />` : ''}
      ${icon ? Icon(icon) : ''}
    </div>`
  );
}

/**
 * Render the card content
 * @param {string} title - The card title
 * @param {string} descritpion - The card description
 * @returns {string} - Markup for content
 */

function renderCardContent(title, description, classArr) {

  const buttonShape = classArr && classArr.includes('rounded') ? 'rounded' : '';
  return (
    `<div class="card-titlebar">
      <h4 class="card-title">${title}</h4>
      ${Button({size: 'xs', text: 'button', classArr: [buttonShape]})}
    </div>
    <div class="card-description">
      ${description}
    </div>`
  );

}

/**
 * Render the card footer
 * @param {array} actions - The call to actions
 * @returns {string} Markup for footer
 */

function renderCardFooter(actions) {
  return (
    `<div class="content">
      ${actions.map((action) => `<button class="btn btn--md" title="${action.title}">
        ${Icon(action)}
      </button>`).join('')}
    </div>`
  );
}

/**
 * Card template
 * @returns {string} - card markup
 */

function template() {
  return (
    `<div class="mb--md">
      <div class="mb--md">${renderCard(bag1)}</div>
      <div class="mb--md">${renderCard(bag2)}</div>
      <div class="mb--md">${renderCard(bag3)}</div>
      <div>${renderCard(card4)}</div>
    </div>`
  );
}

/**
 * Card properties
 */

const cardDescription1 = 'Generating content isn\'t easy, especially if it\'s a process you go through daily. ' +
  'On more than one occasion, I\'ve started a document template for a post idea ' +
  ' -- blank screen for an hour. Nothing. Zilch.';

const cardDescription2 = 'The inspiration was to modernize classic leather messenger bags, tote bags, ' +
  'duffle bags, backpacks, belts, and wallets. In the world of ' +
  'fast-fashion where many brands have moved away from high-quality products.';

const bag1 = {
  title: 'card title',
  description: cardDescription1,
  classArr: ['constrain'],
  actions: [
    {size: 'md', id: 'heart', title: 'Favorite this product', classArr: ['vert--mid']},
    {size: 'md', id: 'share', title: 'Share this product', classArr: ['vert--mid']},
    {size: 'md', id: 'ellipses', title: 'More options', classArr: ['vert--mid']}
  ]
};

const bag2 = Object.assign({}, bag1, {
  classArr: ['constrain', 'rounded']
});

const bag3 = Object.assign({}, bag1, {
  description: cardDescription2,
  image: 'assets/bag/bag1.jpg'
});

const card4 = Object.assign({}, bag1, {
  description: cardDescription2,
  image: 'assets/bag/bag1.jpg',
  classArr: ['constrain', 'rounded']
});

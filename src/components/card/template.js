import Button from '../button/template';
import Icon from '../icon/template';
import {addClassNames, getShape} from '../utils';

export default renderCard;
export const cardMarkup = template;


/**
 * Render a card
 * @param {object} card - The card properties
 * @param {string} [card].image - The image URL (Optional)
 * @param {any} [card].icon - An icon (Optional)
 * @param {string} [card].title - The card title
 * @param {string} [card].description - The card description
 * @param {array} [card].actions - Call to actions
 * @param {boolean} [card].rounded - The card shape
 * @param {array} [card].classArr - Additional classnames (Optional)
 * @param {boolean} [card].footer - The card footer (Optional)
 * @returns {string} - Markup for card component
 */

function renderCard(card) {

  const {image, icon, title, description, actions, rounded, classArr, footer = true} = card;
  return (
    `<div class="card-container ${getShape(rounded)} ${addClassNames(classArr)}">
      <div class="card">
        ${icon || image ? renderCardItem(image, icon) : ''}
        <div class="card-content">${renderCardContent(title, description, rounded, classArr)}</div>
        ${footer ? `<div class="card-footer">${renderCardFooter(actions)}</div>` : ''}
      </div>
    </div>`
  );

}

/**
 * Render the card item
 * @param {string} image - The image URL
 * @param {object} icon - The icon
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

function renderCardContent(title, description, rounded) {

  return (
    `<div class="card-titlebar">
      <h4 class="card-title">${title}</h4>
      ${Button({size: 'xs', text: 'button', classArr: [getShape(rounded)]})}
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
      <div class="mb--md">${renderCard(card1)}</div>
      <div class="mb--md">${renderCard(card2)}</div>
      <div class="mb--md">${renderCard(card3)}</div>
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

const card1 = {
  title: 'card title',
  description: cardDescription1,
  classArr: ['constrain'],
  actions: [
    {size: 'md', id: 'heart', title: 'Favorite this product', classArr: ['vert--mid']},
    {size: 'md', id: 'share', title: 'Share this product', classArr: ['vert--mid']},
    {size: 'md', id: 'ellipses', title: 'More options', classArr: ['vert--mid']}
  ]
};

const card2 = Object.assign({}, card1, {
  rounded: true,
  classArr: ['constrain']
});

const card3 = Object.assign({}, card1, {
  description: cardDescription2,
  image: 'assets/bag/bag1.jpg'
});

const card4 = Object.assign({}, card1, {
  rounded: true,
  description: cardDescription2,
  image: 'assets/bag/bag1.jpg',
  classArr: ['constrain']
});

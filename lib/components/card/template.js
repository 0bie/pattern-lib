import Button from '../button/template';
import Icon from '../icon/template';
import {addClassNames, getShape} from '../utils';

export default renderCard;

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

import Icon from '../icon/template';
import Avatar from '../avatar/template';

export default renderBlockquote;
export const blockquoteMarkup = template;

/**
 * Render a blockquote
 * @param {object} blockquote - Blockquote properties
 * @param {string} [blockquote].id - The blockquote `id`
 * @param {string} [blockquote].quote - The quote
 * @param {string} [blockquote].firstname - The author's first name
 * @param {string} [blockquote].lastname - The author's last name
 * @param {string} [blockquote].link - A direct URL to the quote (Optional)
 * @param {any} [blockquote].linkCta - A call to action for the link
 * @param {string} [blockquote].image - A URL for the author's image (Optional)
 * @param {number} [blockquote].maxLength - The character limit
 * @param {array} [blockquote].classArr - Additional classNames (Optional)
 * @param {boolean} [blockquote].footer - The blockquote footer (Optional)
 * @returns {string} - Markup for blockquote component
 */

function renderBlockquote(blockquote) {

  const {id, quote, firstname, lastname, link, linkCta, image, maxLength, classArr, footer = true} = blockquote;
  const classNames = classArr ? classArr.join(' ') : '';
  return (
    `<div id=${id} class="blockquote-container ${classNames}">
      <div class="blockquote-icon">
        ${Icon(quoteIcon)}
      </div>
      <blockquote class="blockquote" cite="${link}">
        ${quote ? renderBlockquoteContent(id, quote, maxLength) : new Error('blockquote requires `quote` as a string')}
      </blockquote>
      ${footer ? `<div class="blockquote-footer">
        ${renderBlockquoteFooter(firstname, lastname, image, link, linkCta)}
        </div>`
      : ''}
    </div>`
  );

}

/**
 * Render a quote
 * @param {string} id - The blockquote `id`
 * @param {string} quote - The quote
 * @param {number} maxLength - The character limit
 * @returns {string} - Markup for quote
 */

function renderBlockquoteContent(id, quote, maxLength) {

  if (!quote || typeof quote !== 'string') {
    throw new Error('renderBlockquoteContent method requires `quote` as a string');
  }
  expandQuote(id, quote);
  return (
    /* eslint-disable indent */
    `<div class="blockquote-content">
      ${
        quote.length > maxLength
        ? `${quote.substr(0, maxLength)}...<span class="blockquote-expand" title="Read more" tabindex="0">more</span>`
        : `${quote}`
      }
    </div>`
    /* eslint-enable indent */
  );

}

/**
 * Render the author details
 * @param {string} firstname - The author's first name
 * @param {string} lastname - The author's last name
 * @param {string} image - A URL for the author's image (Optional)
 * @param {number} link - A direct URL to the quote (Optional)
 * @param {number} linkCta - A call to action for the link
 * @returns {string} - Markup for footer
 */

function renderBlockquoteFooter(firstname, lastname, image, link, linkCta) {

  return (
    /* eslint-disable indent */
    `<div class="media">
      <div class="media-item mr--xs">
        ${firstname || lastname ? Avatar({size: 'sm', firstname, lastname, image}) : ''}
      </div>
      ${firstname || lastname ?
        `<div class="media-content"><h4 class="media-title">${getName(firstname, lastname)}</h4></div>`
        : new Error('blockquote requires `firstname` or `lastname` as a string')}
    </div>
    ${link ? `<a class="icon-container btn" href=${link}>${Icon(linkCta)}</a>` : ''}`
    /* eslint-enable indent */
  );

}

/**
 * Get a user's name
 * @param {string} firstname - The user's firstname
 * @param {string} lastname - The user's lastname
 * @returns {string} - The user's first or last name
 */

function getName(firstname, lastname) {

  if (typeof firstname !== 'string' && typeof lastname !== 'string') {
    throw new Error('getName method requires `firstname` or `lastname` as a string');
  }
  const givenName = firstname ? firstname : '';
  const surname = lastname ? lastname : '';
  return givenName + ' ' + surname;

}

/**
 * Expand a truncated quote
 * Reference: https://goo.gl/6M1eZd
 *
 * @param {string} id - The blockquote `id`
 * @param {string} quote - The quote
 * @returns null
 */

function expandQuote(id, quote) {

  const observer = new MutationObserver((mutations) => {
    if (!id) { return null; }
    const blockquote = document.getElementById(id);
    mutations.forEach((mutation) => {
      for (const node of mutation.addedNodes) {
        if (node.contains(blockquote)) {
          expandHandler('click', blockquote, quote);
          expandHandler('keypress', blockquote, quote);
          observer.disconnect();
        }
        break;
      }
    });
  });
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

}

/**
 * Expand a truncated quote
 * @param {string} evtType - The `Event` type
 * @param {object} parent - DOM element
 * @param {string} quote - The blockquote content
 * @returns null
 */

function expandHandler(evtType, parent, quote) {

  if (!parent) {
    throw new Error('expandHandler method requires `parent` as a DOM element');
  }
  const content = parent.querySelector('.blockquote-content');
  const expandText = parent.querySelector('.blockquote-expand');
  parent.addEventListener(evtType, function handler(evt) {
    const key = evt.keyCode || evt.which;
    const expandInitiated = (parent.contains(evt.target)) && (evt.target === expandText);
    if (evt.type === 'keypress' && key !== 13) { return null; }
    if (expandInitiated) {
      content.innerHTML = quote;
      parent.removeEventListener(evt, handler);
    }
  });

}

/**
 * Blockquote template
 * @returns {string} - blockquote markup
 */

function template() {
  return (
    `<div class="constrain mb--xxl">${renderBlockquote(blockquote1)}</div>
    <div class="constrain">${renderBlockquote(blockquote2)}</div>`
  );
}


/**
 * Blockquote properties
 */
const quote2 = 'Advertising is based on one thing, happiness. And you know what happiness is? ' +
               'Happiness is the smell of a new car. It\'s freedom from fear. ' +
               'It\'s a billboard on the side of the road that screams reassurance ' +
               'that whatever you are doing is okay. You are okay.';

const quoteIcon = {
  size: 'sm',
  title: 'quotation mark',
  id: 'double-quote-serif-left',
  description: 'quotation mark'
};

const twitterIcon = {
  size: 'md',
  id: 'twitter',
  title: 'twitter',
  classArr: ['vert--mid'],
  description: 'follow on twitter'
};

const blockquote1 = {
  link: '#',
  maxLength: 280,
  id: 'blockquote2',
  lastname: 'Ford',
  firstname: 'Henry',
  linkCta: twitterIcon,
  quote: 'Whether you think you can or you think you can\'t, you\'re right.'
};

const blockquote2 = {
  link: '#',
  quote: quote2,
  maxLength: 200,
  id: 'blockquote1',
  lastname: 'Whitman',
  firstname: 'Richard "Dick"',
  linkCta: twitterIcon,
  classArr: ['rounded'],
  image: 'assets/avatar/avatar2.png'
};


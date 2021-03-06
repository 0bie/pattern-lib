import Icon from '../icon/template';
import {addClassNames} from '../utils';

export default renderHero;
export const heroMarkup = template;

/**
 * Render a hero section
 * @param {string} image - The image URL
 * @param {string} title - The hero title
 * @param {string} subtitle - The hero subtitle
 * @param {string} ctaText - The call-to-action text
 * @param {Object} ctaIcon - The call-to-action icon properties
 * @param {array} classArr - Additional classnames (Optional)
 * @returns {string} Markup for hero component
 */

function renderHero({image, title, subtitle, ctaText, ctaIcon, classArr}) {

  return (
    `<div class="hero-container ${addClassNames(classArr)}">
      <section class="hero">
        <div class="hero-content">
          ${title ? renderHeroTitle(title, subtitle) : ''}
          ${ctaText ? renderHeroCta(ctaText, ctaIcon) : ''}
        </div>
        <div class="hero-placeholder"></div>
        <img class="hero-image" src=${image} alt="" />
      </section>
    </div>`
  );

}

/**
 * Render hero title content
 * @param {string} title - Hero title
 * @param {string} subtitle - Hero subtitle
 */

function renderHeroTitle(title, subtitle) {

  return (
    `<div>
      <span class="hero-subtitle">${subtitle}</span>
      <div class="hero-titlewrap">
        <h1 class="hero-title">${title}</h1>
      </div>
    </div>`
  );

}

/**
 * Render hero call-to-action
 * @param {string} ctaText - Call-to-action text
 * @param {Object} ctaIcon - Call-to-action icon properties
 */

function renderHeroCta(ctaText, ctaIcon) {

  return (
    `<div class="hero-cta">
      ${Icon(ctaIcon)}
      <span class="vert--mid">${ctaText}</span>
    </div>`
  );

}

/**
 * Hero template
 * @returns {string} hero markup
 */

function template() {
  return `<div>${renderHero(hero)}</div>`;
}

/**
 * Hero properties
 */

const hero = {
  ctaText: 'Learn More',
  ctaIcon: {
    id: 'globe',
    size: 'lg',
    title: 'Learn More',
    classArr: ['vert--mid'],
  },
  subtitle: 'Hero subtitle',
  image: 'assets/bag/bag1.jpg',
  title: 'This is placeholder text for a hero title'
};

import Icon from '../icon/template';
import {addClassNames} from '../utils';

export default renderNavigation;

/**
 * Render a navigation
 * @param {string} id - The navigation `id`
 * @param {array} items - The navigation items
 * @param {array} classArr - Additional classNames (Optional)
 * @param {object} logo - The logo icon properties
 * @param {string} logoText - The logo text
 * @returns {string} Markup for navigation component
 */

function renderNavigation({id, items, logo, logoText, classArr}) {

  if (!id || !items) {
    throw new Error('renderNavigation method requires `id` as a string & `items` as an array');
  }
  return (
    `<div id=${id}>
      <div class="nav-c-container ${addClassNames(classArr)}">
        <h1 class="logo">
          <a href="#" class="logo-link">
            ${Icon({id: 'image1', size: 'lg', title: 'logo', classArr: ['vert--mid']})}
            <span class="logo-text vert--mid">${logoText}</span>
          </a>
        </h1>
        <form action="#" method="get" class="${id}-form">
          <label for="${id}-search" class="text--sr">search</label>
          <input id="${id}-search" type="seatch" class="input" placeholder="Search products..." />
          <button class="btn shadow--soft">
            ${Icon({size: 'sm', id: 'search1', title: 'submit search'})}
            <span class="hidden">search</span>
          </button>
        </form>
        <a class="btn nav-c-menu" tabindex="0"></a>
      </div>
      <div class="nav-c-container">
        <nav class="nav-c">
          <ul class="nav-c-list" aria-hidden="true">
            ${items.map(renderNavigationItem).join('')}
          </ul>
        </nav>
      </div>
    </div>`
  );

}

/**
 * Render navigation item
 * @param {string} title - The navigation item title
 * @param {string} link - The title URL
 * @param {array} classArr - AdditionalClassNames (Optional)
 * @returns {string} Markup for navigation item
 */

function renderNavigationItem({title, link, classArr}) {

  return `<li class="nav-c-item ${addClassNames(classArr)}"><a href="${link}">${title}</a></li>`;

}

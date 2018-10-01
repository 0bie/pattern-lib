import Icon from '../icon/template';
import {addClassNames} from '../utils';

export default renderNavigation;
export const navigationMarkup = template;

/**
 * Render a navigation
 * @param {object} navigation - The navigation properties
 * @param {string} [navigation].id - The navigation `id`
 * @param {object} [navigation].logo - The logo icon properties
 * @param {string} [navigation].logoText - The logo text
 * @param {array} [navigation].drawerItems - The navigation drawer items
 * @param {array} [navigation].socialItems - Social media items
 * @param {array} [navigation].citiesArr - Collection of cities
 * @param {array} [navigation].classArr - Additional classNames (Optional)
 * @returns {string} Markup for navigation component
 */

function renderNavigation(navigation) {

  const {
    id,
    logo,
    logoText,
    drawerItems,
    socialItems,
    citiesArr,
    classArr
  } = navigation;
  if (!id || !drawerItems) {
    throw new Error('renderNavigation method requires `id` as a string & `drawerItems` as an array');
  }
  return (
    /* eslint-disable indent */
    `<div id=${id} class="nav-b-container cf ${addClassNames(classArr)}">
      <nav class="nav-b-sub">
        <ul>
          <li class="nav-b-item caret caret--bottom">
            <a href="#">follow us</a>
            <ul class="drawer">
              ${socialItems.map(({icon, link}) => {
                return (
                  `<li class="drawer-item">
                    <a href=${link}>
                      ${Icon(icon)}
                      <span class="ml--xs vert--mid">${icon.title}</span>
                    </a>
                  </li>`
                );
              }).join('')}
            </ul>
          </li>
          <li class="nav-b-item"><a href="#">Sign In</a></li>
          <li class="nav-b-item"><a href="#">Help</a></li>
          <li class="nav-b-item"><a href="#">Checkout</a></li>
        </ul>
      </nav>

      <nav class="nav-b">
        <ul>
          <li class="nav-b-item">
            <a href="#">
              ${Icon(logo)}
              <h1 class="logo">${logoText}</h1>
            </a>
          </li>
          <li class="nav-b-item"><a href="#">Sale</a></li>
          <li class="nav-b-item caret caret--bottom">
            <a href="#">Stores</a>
            <ul class="drawer drawer--split">
              ${citiesArr.map(({city, link}) => {
                return (
                  `<li class="drawer-item">
                    <a href=${link}>${city}</a>
                  </li>`
                );
              }).join('')}
            </ul>
          </li>
          <li class="nav-b-item"><a href="#">Women</a></li>
          <li class="nav-b-item"><a href="#">Men</a></li>
          <li class="nav-b-item"><a href="#">Boys</a></li>
          <li class="nav-b-item"><a href="#">Girls</a></li>
          <li class="nav-b-item"><a href="#">Toddlers</a></li>
        </ul>
      </nav>

      <nav class="nav-b--sm">
        <ul class="nav-b--sm-list">
          <li class="nav-b--sm-item mr--sm">
            <div class="icon icon--menu vert--mid" tabindex="0"><span class="bar"></span></div>
          </li>
          <li class="nav-b--sm-item">
            <a href="#">
              ${Icon(logo)}
              <h1 class="logo">${logoText}</h1>
            </a>
          </li>
        </ul>
        ${renderNavigationDrawer(id, drawerItems)}
      </nav>
    </div>`
    /* eslint-enable indent */
  );

}

/**
 * Render navigation drawer
 * @param {string} id - The navigation `id`
 * @param {array} items - Drawer items
 * @param {array} classArr - Additional classNames (Optional)
 * @returns {string} Markup for navigation drawer
 */

function renderNavigationDrawer(id, drawerItems) {

  return (
    `<ul id=${id}-drawer class="drawer" aria-hidden="true">
      ${drawerItems.map(renderDrawerItem).join('')}
    </ul>`
  );

}

/**
 * Render drawer item
 * @param {string} content - The item content
 * @param {array} classArr - Additional classNames (Optional)
 * @returns {string} Markup for drawer item
 */

function renderDrawerItem({content, classArr}) {

  if (!content) {
    throw new Error('renderDrawerItem method requires `content`');
  }
  const classNames = classArr ? classArr.join(' ') : '';
  return (
    `<li class="drawer-item ${classNames}">
      ${content}
    </li>`
  );

}

/**
 * Render nested drawer
 * @param {array} items - Drawer items
 * @param {array} classArr - Additional classNames (Optional)
 * @returns {string} Markup for nested list
 */

function renderNestedDrawer(items) {

  if (!items) {
    throw new Error('renderNestedDrawer method requires `items` as an array');
  }
  return (
    `<ul class="drawer--nested js-drawer--nested" aria-hidden="true">
    ${items.map(({link, name}) => {
      return (
        `<li class="drawer-item">
          <a class="drawer-link" href=${link}>${name}</a>
        </li>`
      );
    }).join('')}
    </ul>`
  );

}

/**
 * Navigation template
 * @returns {string} navigation markup
 */

function template() {
  return `<div>${renderNavigation(navigation)}</div>`;
}

/**
 * Navigation properties
 */

const logoIcon = {
  id: 'image1',
  size: 'lg',
  title: 'Logo',
  classArr: ['vert--mid']
};

const facebookIcon = {
  id: 'facebook',
  size: 'md',
  title: 'facebook',
  classArr: ['icon--facebook', 'vert--mid']
};

const googleplusIcon = {
  id: 'googleplus',
  size: 'md',
  title: 'google plus',
  classArr: ['icon--googleplus', 'vert--mid']
};

const instagramIcon = {
  id: 'instagram',
  size: 'md',
  title: 'instagram',
  classArr: ['icon--instagram', 'vert--mid']
};

const twitterIcon = {
  id: 'twitter',
  size: 'md',
  title: 'twitter',
  classArr: ['icon--twitter', 'vert--mid']
};

const youtubeIcon = {
  id: 'youtube',
  size: 'md',
  title: 'youtube',
  classArr: ['icon--youtube', 'vert--mid']
};

const socialItems = [
  {icon: facebookIcon, link: '#'},
  {icon: googleplusIcon, link: '#'},
  {icon: instagramIcon, link: '#'},
  {icon: twitterIcon, link: '#'},
  {icon: youtubeIcon, link: '#'}
];

const cities = [
  {name: 'amsterdam', link: '#'},
  {name: 'LA', link: '#'},
  {name: 'Lagos', link: '#'},
  {name: 'Milan', link: '#'},
  {name: 'New York', link: '#'},
  {name: 'Paris', link: '#'},
  {name: 'Toronto', link: '#'},
  {name: 'Vancouver', link: '#'},
  {name: 'Vienna', link: '#'}
];

const citiesArr = [
  {city: 'amsterdam', link: '#'},
  {city: 'LA', link: '#'},
  {city: 'Lagos', link: '#'},
  {city: 'Milan', link: '#'},
  {city: 'New York', link: '#'},
  {city: 'Paris', link: '#'},
  {city: 'Toronto', link: '#'},
  {city: 'Vancouver', link: '#'},
  {city: 'Vienna', link: '#'}
];

const cartIcon = {
  id: 'cart4',
  size: 'sm',
  title: 'Shopping Cart',
  classArr: ['vert--mid', 'ml--xxs'],
  description: 'View items in your shopping cart'
};

const drawerItems = [
  {
    content: '<div class="icon--exit"><span class="bar"></span></div><span class="exit-text">Close</span>',
    classArr: ['js-nav-b-exitIcon exit', 'p--sm']
  },
  {content: '<a class="drawer-link" href="#">Women</a>'},
  {content: '<a class="drawer-link" href="#">Men</a>'},
  {content: '<a class="drawer-link" href="#">Boys</a>'},
  {content: '<a class="drawer-link" href="#">Girls</a>'},
  {content: '<a class="drawer-link" href="#">Toddlers</a>'},
  {content: '<a class="drawer-link" href="#">Sale</a>'},
  {
    classArr: ['drawer-item--nested', 'caret', 'caret--right'],
    content: `<a class="drawer-link drawer-link--nested" href="#">Stores</a><div class="drawer-wrap">${renderNestedDrawer(cities)}</div>`
  },
  {
    classArr: ['p--sm'],
    content: `<div class="item-row">${socialItems.map((item) => `<a href=${item.link} class="btn btn--xs btn--hover">${Icon(item.icon)}</a>`).join('')}</div>`
  },
  {content: '<a class="drawer-link" href="#">Sign In</a>'},
  {content: '<a class="drawer-link" href="#">Help</a>'},
  {content: `<a class="drawer-link" href="#"><span class="vert--mid">Checkout</span>${Icon(cartIcon)}</a>`}
];

const navigation = {
  id: 'nav-b',
  logo: logoIcon,
  logoText: 'Logo',
  citiesArr,
  socialItems,
  drawerItems
};


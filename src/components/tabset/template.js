import Icon from '../icon/template';
import {addClassNames, getShape} from '../utils';

export default renderTabset;
export const tabsetMarkup = template;

/**
 * Render a tabset
 * @param {string} id - The tabset `id`
 * @param {array} items - The tab items
 * @param {boolean} rounded - The tab shape
 * @param {array} classArr - Additional classNames (Optional)
 * @returns {string} Markup for tabset component
 */

function renderTabset({id, items, rounded, classArr}) {

  if (!id) {
    throw new Error('renderTabset method requires `id` as a string');
  }
  return (
    `<nav>
      <ul id=${id} class="tab-list ${getShape(rounded, 'tab-list')} ${addClassNames(classArr)}" role="tablist">
        ${items.map(renderTabsetItem).join('')}
      </ul>
    </nav>`
  );

}

/**
 * Render a tabset item
 * @param {number} index - The item index
 * @param {string} id - The tabset `id`
 * @param {string} title - The item title
 * @param {any} content - The item content
 * @param {array} classArr - Additional className (Optional)
 * @returns {string} Markup for tabset item
 */

function renderTabsetItem({title, content, classArr}, index) {

  return (
    `<li class="tab-item ${addClassNames(classArr)}"  role="presentation">
      <h1 id=title${index + 1} class="tab-title" role="tab" aria-controls=section${index + 1} tabindex="-1">
        ${title}
      </h1>
      <section id=section${index + 1} class="tab-section" aria-hidden="true" aria-labelledby=title${index + 1}>
        ${title ? `<h3 tabindex="0">Tab section ${title}</h3>` : ''}
        ${content ? `<div>${content}</div>` : ''}
      </section>
    </li>`
  );

}

/**
 * Tabset template
 * @returns {string} tabset markup
 */

function template() {
  return (
    `<div class="constrain mb--md">${renderTabset(tabset)}</div>
    <div class="constrain">${renderTabset(tabset_rounded)}</div>`
  );
}

/**
 * Tabset properties
 */

const favoriteIcon = {
  size: 'sm',
  id: 'heart',
  title: 'Love',
  fill: '#EC675C',
  classArr: ['icon--love', 'ml--xxs'],
  description: 'Handcrafted with love'
};

const items = [
  {title: 'A', content: `Handcrafted with ${Icon(favoriteIcon)}`},
  {title: 'B', content: `Handcrafted with ${Icon(Object.assign({}, favoriteIcon, {fill: '#ECB404'}))}`},
  {title: 'C', content: `Handcrafted with ${Icon(Object.assign({}, favoriteIcon, {fill: '#3AA9FF'}))}`},
  {title: 'D', content: `Handcrafted with ${Icon(Object.assign({}, favoriteIcon, {fill: '#FFD451'}))}`}
];

const tabset = {
  items,
  id: 'tab1',
};

const tabset_rounded = Object.assign({}, tabset, {
  id: 'tab2',
  rounded: true
});


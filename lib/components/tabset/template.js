import Icon from '../icon';

export default renderTabset;

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
  const classNames = classArr ? classArr.join(' ') : '';
  const tabShape = rounded ? 'tab-list--rounded' : '';
  return (
    `<nav>
      <ul id=${id} class="tab-list ${tabShape} ${classNames}" role="tablist">
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

  const classNames = classArr ? classArr.join(' ') : '';
  return (
    `<li class="tab-item ${classNames}"  role="presentation">
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

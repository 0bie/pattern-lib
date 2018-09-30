import {addClassNames, getShape} from '../utils';

export default renderPagination;

/**
 * Render a pagination
 * @param {string} id - The pagination `id`
 * @param {array} items - The pagination items
 * @param {boolean} rounded - The pagination shape
 * @param {array} classArr - Additional classNames
 * @returns {string} Markup for pagination component
 */

function renderPagination({id, items, rounded, classArr}) {

  return (
    `<nav id=${id} class="pagination cf ${getShape(rounded, 'pagination')} ${addClassNames(classArr)}">
      <ul class="pagination-list pagination-b-list">
        <li class="pagination-item pagination-b-item">
          <a class="pagination-link pagination-item--disabled">
            <span class="chevron vert--mid">‹</span>
            <span class="pagination-b-ctrls">Prev</span>
          </a>
        </li>
        ${items.map(renderPaginationItem).join('')}
        <li class="pagination-item pagination-b-item">
          <a class="pagination-link">
            <span class="pagination-b-ctrls">Next</span>
            <span class="chevron vert--mid">›</span>
          </a>
        </li>
      </ul>
    </nav>`
  );

}

/**
 * Render a pagination item
 * @param {number} number - The pagination number
 * @param {string} link - The item link
 * @param {array} classArr - Additional classNames (Optional)
 * @returns {string} Markup for pagination item
 */

function renderPaginationItem({number, link, classArr}) {

  return (
    `<li class="pagination-item pagination-b-item ${addClassNames(classArr)}">
      <a class="pagination-link" href=${link}>${number}</a>
    </li>`
  );

}

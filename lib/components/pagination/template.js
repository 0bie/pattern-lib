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
      <div class="pagination-wrap">
        <span class="pagination-ctrls">
          <a class="pagination-item--disabled">
            <span class="chevron">‹</span>
            <span>Prev</span>
          </a>
          <a>
            <span>Next</span>
            <span class="chevron">›</span>
          </a>
        </span>
      </div>
      <ul class="pagination-list">
        ${items.map(renderPaginationItem).join('')}
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
    `<li class="pagination-item ${addClassNames(classArr)}">
      <a class="pagination-link" href=${link}>${number}</a>
    </li>`
  );

}

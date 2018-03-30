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

  const classNames = classArr ? classArr.join(' ') : '';
  const paginationShape = rounded ? 'pagination--rounded' : '';
  return (
    `<nav id=${id} class="pagination cf ${paginationShape} ${classNames}">
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

  const classNames = classArr ? classArr.join(' ') : '';
  return (
    `<li class="pagination-item ${classNames}">
      <a class="pagination-link" href=${link}>${number}</a>
    </li>`
  );

}
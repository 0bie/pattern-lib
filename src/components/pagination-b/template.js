export default renderPagination;
export const paginationMarkup = template;

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

  const classNames = classArr ? classArr.join(' ') : '';
  return (
    `<li class="pagination-item pagination-b-item ${classNames}">
      <a class="pagination-link" href=${link}>${number}</a>
    </li>`
  );

}

/**
 * Pagination template
 * @returns {string} pagination markup
 */

function template() {
  return (
    `<div>
      <div>${renderPagination(pagination)}</div>
      <div>${renderPagination(pagination_b_rounded)}</div>
    </div>`
  );
}

/**
 * Pagination properties
 */

const items = [
  {number: 1, link: '#'},
  {
    number: 2,
    link: '#',
    classArr: ['pagination-item--current']
  },
  {number: 3, link: '#'},
  {number: 4, link: '#'},
  {number: 5, link: '#'},
  {number: '•••', link: '#'},
  {number: 20, link: '#'}
];

const pagination = {
  items,
  id: 'pagination_b',
};

const pagination_b_rounded = {
  items,
  rounded: true,
  id: 'pagination__rounded'
};

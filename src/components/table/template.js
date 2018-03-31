export default renderTable;
export const tableMarkup = template;

/**
 * Render a table
 * @param {string} id - The table `id`
 * @param {array} headerItems - Table header titles
 * @param {array} tableItems - Collection of table items
 * @param {boolean} rounded - The table shape (Optional)
 * @param {array} classArr - Additional classNames (Optional)
 * @returns {string} Markup for table component
 */

function renderTable({id, headerItems, tableItems, rounded, classArr}) {

  if (!id) {
    throw new Error('renderTable method requires `id` as a string');
  }
  const classNames = classArr ? classArr.join(' ') : '';
  const tableShape = rounded ? 'table--rounded' : '';
  return (
    `<div id=${id} class="table-container ${tableShape} ${classNames}">
      <table class="table">
        <thead class="table-header">
          <tr>
            ${headerItems.map(renderTableHeader).join('')}
          </tr>
        </thead>
        <tbody class="table-body">
          ${tableItems.map(renderTableRow).join('')}
        </tbody>
      </table>
    </div>`
  );

}

/**
 * Render table header elements
 * @param {string} title - The header title
 * @param {array} classArr - Additional classNames (Optional)
 * @returns {string} Markup for table header
 */

function renderTableHeader({title, classArr}) {
  const classNames = classArr ? classArr.join(' ') : '';
  return `<th class="table-cell ${classNames}">${title}</th>`;
}


/**
 * Render table cell elements
 * @param {string} content - Table cell content
 * @param {array} classArr - Additional classNames (Optional)
 * @return {string} Markup for table cell
 */

function renderTableRow({content, classArr}) {
  const classNames = classArr ? classArr.join(' ') : '';
  return (
    `<tr class="table-row ${classNames}">${content}</tr>`
  );
}

/**
 * Table template
 * @returns {string} table markup
 */

function template() {
  return (
    `<div class="mb--md">${renderTable(table)}</div>
    <div>${renderTable(table_rounded)}</div>`
  );
}

/**
 * Table properties
 */

const headerItems = [
  {title: 'ID'},
  {title: ''},
  {title: 'Product Title', classArr: ['text--left', 'header-title']},
  {title: 'SKU'},
  {title: 'Attribute'},
  {title: 'Value'},
  {title: 'Category'},
  {title: 'Status', classArr: ['text--right']}
];

const row1 = `<td class="table-cell">1</td>
<td class="table-cell"></td>
<th class="table-cell text--left">
  <a class="table-link" href="#">
    <span>Item Title</span>
  </a>
</th>
<td class="table-cell">POI0987654321</td>
<td class="table-cell">Size</td>
<td class="table-cell">XL</td>
<td class="table-cell">M/W</td>
<td class="table-cell">New</td>`;

const row2 = `<td class="table-cell">2</td>
<td class="table-cell"></td>
<th class="table-cell text--left">
  <a class="table-link" href="#">
    <span>Item Title</span>
  </a>
</th>
<td class="table-cell">POI0987654322</td>
<td class="table-cell">Color</td>
<td class="table-cell">Purple</td>
<td class="table-cell">M</td>
<td class="table-cell">Sale</td>`;

const row3 = `<tr class="table-row"><td class="table-cell--break" colspan="12"></td></tr>
<td class="table-cell">3</td>
<td class="table-cell"></td>
<th class="table-cell text--left">
  <a class="table-link" href="#">
    <span>Item Title</span>
  </a>
</th>
<td class="table-cell">POI0987654323</td>
<td class="table-cell">Size</td>
<td class="table-cell">S</td>
<td class="table-cell">W</td>
<td class="table-cell">Sale</td>`;

const tableItems = [
  {content: row1},
  {content: row2},
  {content: row3},
  {content: row1},
  {content: row2},
  {content: row3},
];

const table = {
  id: 'table',
  tableItems,
  headerItems
};

const table_rounded = Object.assign({}, table, {
  rounded: true
});


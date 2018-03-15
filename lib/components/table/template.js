export default renderTable;

/**
 * Render a table
 * @param {string} id - The table `id`
 * @param {array} headerItems - Table header titles
 * @param {array} tableItems - Collection of table items
 * @param {boolean} rounded - The table shape (Optional)
 * @param {array} classArr - Additional classNames (Optional)
 * @returns {string} Markup for table component
 */

function renderTable({id, headerItems, rounded, classArr}) {

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

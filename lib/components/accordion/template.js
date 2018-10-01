import {addClassNames} from '../utils';

export default renderAccordion;

/**
 * Render an accordion
 * @param {string} id - The accordion id
 * @param {array} classArr - Additional classNames (Optional)
 * @param {array} sections - The accordion sections
 * @returns {string} Markup for accordion component
 */

function renderAccordion({id, classArr, sections}) {

  if (!id) {
    throw new Error('renderAccordion method requires `id` as a string');
  }
  return (
    `<div id=${id} class="accordion ${addClassNames(classArr)}">
      ${sections ? sections.map(renderAccordionSection).join('') : new Error('accordion requires `sections` as an array')}
    </div>`
  );

}

/**
 * Render an accordion section
 * @param {string} id - The section id
 * @param {array} classArr - Additional classNames (Optional)
 * @param {string} title - The title
 * @param {any} content - The content
 * @returns {string} Markup for accordion section
*/

function renderAccordionSection({id, classArr, title, content}) {

  if (!id) {
    throw new Error('renderAccordionSection method requires `id` as a string');
  }
  return (
    `<section class="accordion-section ${addClassNames(classArr)}">
      <h3 class="accordion-title" id=${id} tabindex="-1">
        ${title ? title : new Error('accordion section requires a title')}
      </h3>
      <div class="accordion-wrap">
        <div class="accordion-content" aria-hidden="true" aria-labelledby=${id}>
          ${content ? content : new Error('accordion section requires some content')}
        </div>
      </div>
    </section>`
  );

}

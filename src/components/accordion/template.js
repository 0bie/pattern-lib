export default renderAccordion;
export const accordionMarkup = template;

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
  const classNames = classArr ? classArr.join(' ') : '';
  return (
    `<div id=${id} class="accordion ${classNames}">
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
  const classNames = classArr ? classArr.join(' ') : '';
  return (
    `<section class="accordion-section ${classNames}">
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

/**
 * Accordion template
 *  @returns {string} - accordion markup
 */

function template() {
  return (
    `<div class="constrain mb--md">${renderAccordion(accordion1)}</div>
    <div class="constrain">${renderAccordion(accordion2)}</div>`
  );
}

/**
 * Accordion properties
 */

const accordionContent = 'Slow and steady still wins the race. Tackle your health and lifestyle goals one small change at a time. ' +
  'If your New Year\'s resolution seems overwhelming and unattainable, encourage yourself to focus on one little ' +
  'change per week: get more sleep, practice five-minutes of meditation each morning, or take a daily multivitamin. ' +
  'Then, all you have to do is repeat for 51 more weeks -- easy, right?';

const accordion1 = {
  id: 'accordion1',
  sections: [
    {
      id: 'accordionTitle1',
      content: accordionContent,
      title: 'Accordion Title 1'
    },
    {
      id: 'accordionTitle2',
      content: accordionContent,
      title: 'Accordion Title 2'
    },
    {
      id: 'accordionTitle3',
      content: accordionContent,
      title: 'Accordion Title 3'
    },
    {
      id: 'accordionTitle4',
      content: accordionContent,
      title: 'Accordion Title 4'
    },
    {
      id: 'accordionTitle5',
      content: accordionContent,
      title: 'Accordion Title 5'
    }
  ]
};

const accordion2 = Object.assign({}, accordion1, {
  id: 'accordion2',
  classArr: ['rounded']
});

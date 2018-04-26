import Input from '../input/template';
import Button from '../button/template';
import Icon from '../icon/template';

export default renderTodo;
export const todoMarkup = template;

/**
 * Render a todo list
 * @param {string} title - The list title
 * @param {string} ctaText - The list CTA
 * @param {array} items - The todo items
 * @param {array} classArr - Additional classNames (Optional)
 */

function renderTodo({title, ctaText, items, classArr}) {

  if (!items) {
    throw new Error('renderTodo method requires `items` as an array');
  }
  const classNames = classArr ? classArr.join('') : '';
  return (
    `<div class="todo-container ${classNames}">
      <header class="todo-header">
        <h1 class="todo-title">${title}</h1>
        <form id="todo-form" class="todo-form">
          ${Input({id: 'todo-input', size: 'xs', placeholder: 'Add a task...', inputClass: ['input--full', 'todo-input']})}
          ${Button({size: 'sm', text: ctaText, classArr: ['btn--todo']})}
        </form>
      </header>
      <ul id="todo-list" class="list todo-list">
        ${items.map(renderTodoItem).join('')}
      </ul>
    </div>`
  );
}

/**
 * Render a todo item
 */

function renderTodoItem({text, classArr}, i) {

  if (!text) {
    throw new Error('renderTodoItem method requires `text` as a string');
  }
  const classNames = classArr ? classArr.join('') : '';
  return (
    `<li id="todo-item-${i}" class="list-item todo-item ${classNames}">
      <input type="checkbox" id="todo-check-${i}" class="text--sr" checked />
      <label for="todo-check-${i}" class="todo-label">
        <span class="todo-check" title="Complete Task">${Icon(checkIcon)}</span>
        <span class="todo-text">${text}</span>
        ${Button({size: 'xs', icon: deleteIcon, classArr: ['btn--todo']})}
      </label>
    </li>`
  );

}

/**
 * Todo template
 * @returns {string} - todo markup
 */

function template() {
  return `<div class="constrain">${renderTodo(todo)}</div>`;
}

/**
 * Todo properties
 */

const checkIcon = {
  id: 'check',
  size: 'sm',
  title: 'Complete Task',
  fill: '#27ae60',
  classArr: ['vert--mid']
};

const deleteIcon = {
  id: 'trash',
  title: 'Delete Task',
  classArr: ['vert--mid']
};

const todo = {
  title: 'Todo Title',
  ctaText: 'Add',
  items: [
    {text: 'Task 1'},
    {text: 'Task 2'},
    {text: 'Task 3'},
    {text: 'Task 4'},
    {text: 'Task 5'},
    {text: 'Task 6'}
  ]
};



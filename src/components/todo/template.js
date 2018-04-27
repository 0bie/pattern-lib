import Input from '../input/template';
import Button from '../button/template';
import Icon from '../icon/template';

export default renderTodo;
export const todoMarkup = template;

/**
 * Render a todo list
 * @param {string} title - The list title
 * @param {string} ctaText - The list CTA
 * @param {object} ctaIcon - The CTA icon (Optional)
 * @param {array} items - The todo items
 * @param {boolean} rounded - The list shape (Optional)
 * @param {array} classArr - Additional classNames (Optional)
 */

function renderTodo({title, ctaText, ctaIcon, items, rounded, classArr}) {

  if (!items) {
    throw new Error('renderTodo method requires `items` as an array');
  }
  const classNames = classArr ? classArr.join('') : '';
  const listShape = rounded ? 'todo--rounded' : '';
  return (
    `<div class="todo-container ${classNames}">
      <header class="todo-header">
        <h1 class="todo-title">${title}</h1>
        <form id="todo-form" class="todo-form">
          ${Input(todoInput)}
          ${Button({text: ctaText, icon: ctaIcon, ...todoButton})}
        </form>
      </header>
      <ul id="todo-list" class="list todo-list ${listShape}">
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
      <input class="text--sr" type="checkbox" id="todo-check-${i}" name="todo-check-${i}" checked />
      <label for="todo-check-${i}" class="todo-label">
        <span class="todo-check" title="Complete Task">${Icon(checkIcon)}</span>
        <span class="todo-text">${text}</span>
      </label>
      ${Button(deleteButton)}
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

const plusIcon = {
  id: 'plus',
  size: 'sm',
  title: 'Add a task',
  classArr: ['mr--xxs']
};

const todoInput = {
  size: 'xs',
  id: 'todo-input',
  placeholder: 'Add a task...',
  inputClass: ['input--todo', 'input--full']
};

const todoButton = {
  size: 'sm',
  iconPosition: 'left',
  classArr: ['btn--todo']
};

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

const deleteButton = {
  size: 'xs',
  icon: deleteIcon,
  classArr: ['btn--todo']
};

const todo = {
  title: 'Todo Title',
  ctaText: 'Add',
  ctaIcon: plusIcon,
  items: [
    {text: 'Task 1'},
    {text: 'Task 2'},
    {text: 'Task 3'},
    {text: 'Task 4'},
    {text: 'Task 5'},
    {text: 'Task 6'}
  ]
};



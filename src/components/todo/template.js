import Input from '../input/template';
import Icon from '../icon/template';

export default renderTodo;
export const todoMarkup = template;

/**
 * Render a todo list
 * @param {string} id - The todo `id`
 * @param {string} title - The list title
 * @param {string} ctaText - The list CTA
 * @param {object} ctaIcon - The CTA icon (Optional)
 * @param {array} items - The todo items
 * @param {boolean} rounded - The list shape (Optional)
 * @param {array} classArr - Additional classNames (Optional)
 */

function renderTodo({id, title, ctaText, ctaIcon, rounded, classArr}) {

  if (!id) {
    throw new Error('renderTodo method requires `id` as a string');
  }
  const classNames = classArr ? classArr.join('') : '';
  const listShape = rounded ? 'todo--rounded' : '';
  return (
    `<div id=${id} class="todo-container ${classNames}">
      <header class="todo-header">
        <h1 class="todo-title">${title}</h1>
        <form id="todo-form" class="todo-form">
          ${Input(todoInput)}
          <button class="btn btn--xs btn--todo" data-todo="add" tabindex="0">
            ${Icon(ctaIcon)}
            <span class="btn-text">${ctaText}</span>
          </button>
        </form>
      </header>
      <ul id="todo-list" class="list todo-list ${listShape}"></ul>
    </div>`
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
  inputId: 'todo-input',
  id: 'todo-input-container',
  placeholder: 'Add a task...',
  inputClass: ['input--todo', 'input--full']
};

export const checkIcon = {
  id: 'check',
  size: 'sm',
  title: 'Complete Task',
  fill: '#27ae60',
  classArr: ['vert--mid']
};

export const deleteIcon = {
  id: 'trash',
  title: 'Delete Task',
  classArr: ['vert--mid']
};

const todo = {
  id: 'todo1',
  title: 'Todo Title',
  ctaText: 'Add',
  ctaIcon: plusIcon,
};

export const todoItems = [
  {text: 'Task 1', done: true},
  {text: 'Task 2', done: true},
  {text: 'Task 3', done: true},
  {text: 'Task 4', done: true},
  {text: 'Task 5', done: true},
  {text: 'Task 6', done: true}
];


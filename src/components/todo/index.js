import Icon from '../icon/template';
import {todoItems, todoMarkup, checkIcon, deleteIcon} from './template';

document.addEventListener('DOMContentLoaded', appendTodo);

/**
 * Add the template to the DOM
 */

function appendTodo() {
  const todoFragment = document.createDocumentFragment();
  const todoContainer = document.createElement('div');
  todoContainer.classList.add('mb--lg', 'p--xs');
  if (todoMarkup) {
    todoContainer.innerHTML = todoMarkup();
  }
  todoFragment.appendChild(todoContainer);
  document.getElementById('root').appendChild(todoFragment);

  /**
   * Todo events
   */

  todoHandler('click', 'todo1');
}

/**
 * Add/Delete and toggle todo items
 * @param {string} evtType - The `Event` type
 * @param {string} parent - The parent element `id`
 */

export function todoHandler(evtType, parent) {

  const todo = document.getElementById(parent);
  const todoForm = document.querySelector('#todo-form');
  const todoList = todo.querySelector('#todo-list');
  if (!todo) {
    throw new Error('todoHandler method requires `parent` as a valid HTML element');
  }
  createTodoList(todoItems, todoList);
  todoForm.addEventListener(evtType, addTodoItem.bind(null, todoList));
  todoList.addEventListener(evtType, deleteTodoItem.bind(null, todoList));
  todoList.addEventListener(evtType, todoToggleHandler.bind(null, todoList));

}

/**
 * Add todo item
 * @param {object} evt - The `Event` object
 * @param {object} parent - The parent element of the items
 */

function addTodoItem(parent, evt) {

  evt.preventDefault();
  const text = document.getElementById('todo-input').value;
  const todoItem = {text, done: false};
  if (!text.length > 0 || evt.target.dataset.todo !== 'add') return;
  todoItems.push(todoItem);
  updateTodoList(parent);
  document.getElementById('todo-form').reset();

}

/**
 * Create todo list
 * @param {array} items - The list of items
 * @param {object} parent - A reference to the parent element
 */

function createTodoList(items = [], parent) {

  if (!items.length) {
    parent.innerHTML = 'There are currently no tasks.';
    return;
  }
  parent.innerHTML = items.map((item, i) => `<li id="todo-item-${i}" class="list-item todo-item">
  <input class="text--sr" type="checkbox" id="todo-check-${i}" name="todo-check-${i}" data-index="${i}" ${item.done ? 'checked' : ''} />
  <label for="todo-check-${i}" class="todo-label" data-index="${i}" data-todo="done">
    <span class="todo-check" title="Complete Task" tabindex="0">${Icon(checkIcon)}</span>
    <span class="todo-text">${item.text}</span>
  </label>
  <button class="btn btn--xs btn--todo" data-index="${i}" data-todo="delete" tabindex="0">
    ${Icon(deleteIcon)}
  </button>
  </li>`).join('');

}

/**
 * Delete a todo item
 * @param {object} evt - The `Event` object
 * @param {object} parent - A reference to the parent element
 */

function deleteTodoItem(parent, evt) {

  const target = evt.target;
  const key = evt.keyCode || evt.which;
  if (target.dataset.todo !== 'delete') return;
  if (evt.type === 'keypress' && key !== 13) return;
  const index = target.dataset.index;
  spliceItem(index, parent);

}

/**
 * Remove an item from the list
 * @param {number} index - The index of an item in the list
 * @param {object} parent - A reference to the parent element
 */

function spliceItem(index, parent) {
  const deletedItem = todoItems.splice(index, 1);
  updateTodoList(parent);
  return deletedItem;
}

/**
 * Update todo list items
 * @param {object} list - The list element
 */

function updateTodoList(list) {
  createTodoList(todoItems, list);
}

/**
 * Toggle done/undone state for todo items
 * @param {object} evt - The `Event` object
 * @param {object} parent - A reference to the parent element
 */

function todoToggleHandler(parent, evt) {

  const target = evt.target;
  const key = evt.keyCode || evt.which;
  if (target.dataset.todo !== 'done') return;
  if (evt.type === 'keypress' && key !== 13) return;
  const index = target.dataset.index;
  todoItems[index].done = !todoItems[index].done;
  updateTodoList(parent);

}

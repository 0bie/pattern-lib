import {todoMarkup} from './template';

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
}

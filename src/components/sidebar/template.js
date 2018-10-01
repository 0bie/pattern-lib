import Avatar from '../avatar/template';
import Button from '../button/template';
import {addClassNames} from '../utils';

export default renderSidebar;
export const sidebarMarkup = template;

/**
 * Render a sidebar
 * @param {string} id - The sidebar `id`
 * @param {array} items - The sidebar items
 * @param {string} label - The sidebar button label
 * @param {array} classArr - Additional classNames (Optional)
 * @param {string} sidebarPosition - The sidebar position (left|right|top|bottom)
 * @returns {string} Markup for sidebar component
 */

function renderSidebar({id, items, classArr, label, sidebarPosition = 'left'}) {

  if (!id) {
    throw new Error('renderSidebar method requires `id` as a string');
  }
  return (
    `<nav id=${id} class=${addClassNames(classArr)}>
      <ul class="sidebar sidebar--${sidebarPosition}">
        ${items.map(renderSidebarItem).join('')}
      </ul>
      <div>
        <a class="btn btn--xs btn--full" tabindex="0">${label}</a>
      </div>
    </nav>`
  );

}

/**
 * Render sidebar item
 * @param {any} content - The item content
 * @param {array} classArr - Additional classNames (Optional)
 * @returns {string} Markup for sidebar item
 */

function renderSidebarItem({content, classArr}) {

  if (!content) {
    throw new Error('renderSidebarItem method requires `content`');
  }
  return (
    `<li class="sidebar-item ${addClassNames(classArr)}">
      ${content}
    </li>`
  );

}

/**
 * Sidebar template
 * @returns {string} sidebar markup
 */

function template() {
  return (
    `<div class="constrain">
      <div class="mb--md">${renderSidebar(sidebar_left)}</div>
      <div class="mb--md">${renderSidebar(sidebar_right)}</div>
      <div class="mb--md">${renderSidebar(sidebar_top)}</div>
      <div>${renderSidebar(sidebar_bottom)}</div>
    </div>`
  );
}

/**
 * Sidebar properties
 */

const imageIcon = {
  id: 'image1',
  size: 'md',
  title: 'Media icon',
  classArr: ['vert--mid']
};

const mailIcon = {
  id: 'inbox1',
  size: 'md',
  title: 'Inbox icon',
  classArr: ['vert--mid']
};

const statsIcon = {
  id: 'graph1',
  size: 'md',
  title: 'Statistics',
  classArr: ['vert--mid']
};

const calendarIcon = {
  id: 'calendar1',
  size: 'md',
  title: 'Calendar',
  classArr: ['vert--mid']
};

const avatarIcon = {
  id: 'people1',
  size: 'md',
  title: 'User icon',
  classArr: ['vert--mid']
};

const avatar = {
  size: 'sm',
  firstname: 'Joan',
  lastname: 'Holloway',
  rounded: true,
  image: 'assets/avatar/avatar3.jpg',
};

const avatarContent = `${Avatar(avatar)}<div class="text">Joan P. Holloway</div>`;

const items = [
  {content: avatarContent, classArr: ['sidebar-item--avatar']},
  {content: Button({size: 'md', icon: imageIcon, iconPosition: 'left', text: 'Gallery'})},
  {content: Button({size: 'md', icon: mailIcon, iconPosition: 'left', text: 'Inbox'})},
  {content: Button({size: 'md', icon: statsIcon, iconPosition: 'left', text: 'Trends'})},
  {content: Button({size: 'md', icon: calendarIcon, iconPosition: 'left', text: 'Schedule'})},
  {content: Button({size: 'md', icon: avatarIcon, iconPosition: 'left', text: 'Groups'})}
];

const sidebar_left = {
  items,
  id: 'sidebar_left',
  label: 'Toggle left sidebar'
};

const sidebar_right = {
  items,
  id: 'sidebar_right',
  sidebarPosition: 'right',
  label: 'Toggle right sidebar'
};

const sidebar_top = {
  items,
  id: 'sidebar_top',
  sidebarPosition: 'top',
  label: 'Toggle top sidebar'
};

const sidebar_bottom = {
  items,
  id: 'sidebar_bottom',
  sidebarPosition: 'bottom',
  label: 'Toggle bottom sidebar'
};

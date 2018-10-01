import Avatar from '../avatar/template';
import {addClassNames} from '../utils';

export default renderTimeline;

/**
 * Render a timeline
 * @param {string} id - The timeline `id`
 * @param {array} events - The timeline events
 * @param {array} classArr - Additional classNames (Optional)
 * @returns {string} Markup for timeline component
 */

function renderTimeline({id, events, classArr}) {

  if (!events || events.length === 0) {
    throw new Error('renderTimeline method requires `events` as an array');
  }
  return (
    `<div id=${id} class="timeline ${addClassNames(classArr)}">
      <div class="timeline-content">${events.map(renderTimelineEvent).join('')}</div>
    </div>`
  );

}

/**
 * Render timeline event
 * @param {string} time - The event time
 * @param {string} title - The event title
 * @param {string} content - The event content
 * @param {array} classArr - Additional classNames (Optional)
 * @return {string} Markup for timeline event
 */

function renderTimelineEvent({time, title, avatar, content, classArr}) {

  return (
    `<div class="timeline-event ${addClassNames(classArr)}">
      <div class="timeline-metadata">
        <span class="timeline-avatar">${avatar ? Avatar(avatar) : ''}</span>
        <time class="timeline-hours">${time}</time>
      </div>
      <div class="timeline-card">
        <div class="timeline-caret"></div>
        ${title ? `<h4 class="timeline-title">${title}</h4> ` : ''}
        <div>${content}</div>
      </div>
    </div>`
  );

}

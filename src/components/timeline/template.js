import Avatar from '../avatar/template';

export default renderTimeline;
export const timelineMarkup = template;

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
  const classNames = classArr ? classArr.join(' ') : '';
  return (
    `<div id=${id} class="timeline ${classNames}">
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

  const classNames = classArr ? classArr.join(' ') : '';
  return (
    `<div class="timeline-event ${classNames}">
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

/**
 * Timeline template
 * @returns {string} timeline markup
 */

function template() {
  return `<div class="constrain mb--md">${renderTimeline(timeline)}</div>`;
}

/**
 * Timeline properties
 */

const avatar = {
  size: 'sm',
  firstname: 'donald',
  lastname: 'draper',
  rounded: true,
  image: 'assets/avatar/avatar2.png',
};

const avatar2 = Object.assign({}, avatar, {
  firstname: 'joan',
  lastname: 'holloway',
  image: 'assets/avatar/avatar3.jpg'
});

const timelineEvents = [
  {
    avatar,
    date: 'Sept. 30',
    time: 'Last Month',
    title: 'The Gypsy and The Hobo',
    content: 'An old flame and potential client re-enters Roger Sterling\'s life; Joan\'s husband searches for a new job; and Don finally comes clean to Betty about his true identity.'
  },
  {
    avatar: avatar2,
    date: 'Jan. 30',
    time: '2 Days Ago',
    title: 'The Chrysanthemum and the Sword',
    content: 'Don and Pete try to land a new Japanese client, but Roger\'s racist attitude may hand the lucrative account to a rival; Don has to read deeply and think quickly to salvage things.'
  },
  {
    avatar,
    date: 'Aug. 3',
    time: 'Yesterday',
    title: 'Guy Walks Into An Advertising Agency',
    content: 'The new British bosses want the staff to come in to meet their dashing new blade Guy MacKendrick; Joan tenders her resignation only to find that she has been too rash.'
  },
  {
    avatar: avatar2,
    date: 'Aug. 3',
    time: '20 Minutes Ago',
    title: 'The Other Woman',
    content: 'Peter asks Joan to make an unspeakable sacrifice to help secure the Jaguar account, Peggy prepares to make a drastic move in response to Don\'s treatment, and Megan\'s acting career begins to create tension with her and Don.'
  }
];

const timeline = {
  id: 'timeline',
  events: timelineEvents
};

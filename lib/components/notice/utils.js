/**
 * Check for notice state
 * @param {string} state - One of [success|error|warn]
 * @returns {string} The state className
 */

export function getNoticeState(state) {
  let stateClassName = '';
  if (state) stateClassName = `notice--${state}`;
  return stateClassName;
}

/**
 * Render the notice footer
 * @param {any} content - The footer content
 * @returns {string} Markup for footer
 */

export function renderNoticeFooter(content) {
  if (!content) return false;
  return (
    `<footer class="notice-footer">
      ${content}
    </footer>`
  );
}

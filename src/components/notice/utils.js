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

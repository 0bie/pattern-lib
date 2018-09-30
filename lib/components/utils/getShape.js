/**
 * Check if component has rounded prop
 * @param {boolean} rounded - The component shape
 * @param {string} component - The component name
 * @returns {string} - The rounded className
 */

export default function getShape(rounded, component) {

  let className = '';
  if (rounded) className = 'rounded';
  if (rounded && component) className = `${component}--rounded`;
  return className;

}

/**
 * Add additional classNames
 * @param {array} classArr - Additional classNames
 * @returns {string} - Additional classNames
 */

export default function addClassNames(classArr) {

  let classNames = '';
  if (classArr instanceof Array) {
    classNames = classArr ? classArr.join(' ') : '';
  }
  return classNames;

}

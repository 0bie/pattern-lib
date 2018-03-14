/* eslint-disable no-unused-vars */
import styles from 'styles';
import components from './manifest';
/* eslint-enable no-unused-vars */

/**
 * Add sprite to the `document`
 */

const xhr = new XMLHttpRequest();
xhr.open('GET', 'assets/sprite.svg');
xhr.onreadystatechange = () => {
  if (xhr.readyState === 4) {
    document.getElementById('sprite').innerHTML = xhr.responseText;
  }
};
xhr.send();

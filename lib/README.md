## Developing

```js
import {Accordion} from 'path/to/lib';

const component = Accordion.then(({accordion, accordionHandler, toggleAccordionState}) => {
  console.dir(accordion);
  console.dir(accordionHandler);
  console.dir(toggleAccordionState);
});

console.log(component);
```

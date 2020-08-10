import * as _ from 'lodash';
import './style.css';
import printMe from './print';

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack!!!!'], ' ');
  element.classList.add('hello');
  element.addEventListener('click', print);

  console.log('ha ');

  return element;
}

document.body.appendChild(component());

if (module.hot) {
  module.hot.accept('./print.ts', function () {
    console.log('Accepting the updated printMe module!');
    printMe();
  });
}

import { createElement } from '../shared/createElement';
import showHideButtonHandler from './showHideButtonHandler';

function createShowHideButton() {
  const button = createElement('div', 'show-hide-btn');
  button.addEventListener('click', showHideButtonHandler);
  button.append(createElement('span', 'show-hide-btn__keyboard-icon'));
  button.append(createElement('span', 'show-hide-btn__arrow-icon'));
  return button;
}

export default createShowHideButton;

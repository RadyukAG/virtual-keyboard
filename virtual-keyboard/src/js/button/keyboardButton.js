import { createButtonChild } from '../shared/createElement';

export default class KeyboardButton {
  constructor({ main, shiftMode, code, buttonHandler }) {
    this.code = code;
    this.main = main;
    this.shiftMode = shiftMode;
    if (buttonHandler) {
      this.buttonHandler = buttonHandler;
    }
  }

  createButton() {
    const button = document.createElement('div');
    if (this.buttonHandler) {
      button.addEventListener('click', this.buttonHandler.bind(this));
      button.dataset.code = this.code;
    } else {
      button.dataset.keyCode = this.code;
    }
    button.classList.add('key');
    button.append(createButtonChild(this.main, 'main'));
    if (this.shiftMode) {
      button.append(createButtonChild(this.shiftMode, 'shift-mode'));
    }
    return button;
  }
}

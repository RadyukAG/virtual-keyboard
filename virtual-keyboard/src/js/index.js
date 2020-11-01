import createKeyboard from './keyboard/createKeyboard';
import '../style/style.scss';
import '../style/normalize.css';
import { Shift } from './shared/buttonHandlers';
import shiftMode from './shared/shiftMode';

const elements = {
  keyboard: document.querySelector('.keyboard'),
};
document.addEventListener('DOMContentLoaded', () => {
  createKeyboard();
  elements.input = document.querySelector('.input-area');
  elements.shift = document.querySelector('[data-code="ShiftLeft"]');
  elements.keyButtons = document.querySelectorAll('[data-key-code]');
  elements.specButtons = document.querySelectorAll('[data-code]');
  elements.shift.addEventListener('click', shiftMode);
  shiftMode(elements.shift);
});

elements.keyboard.addEventListener('click', (e) => {
  if (e.target.dataset.keyCode || e.target.closest('div').dataset.keyCode) {
    const target = e.target.dataset.keyCode ? e.target : e.target.closest('div');
    target.classList.add('active');
    target.addEventListener('mouseleave', () => {
      target.classList.remove('active');
    });
    const { input } = elements;
    const pos = input.selectionStart;
    let text = input.value;
    text = `${text.slice(0, pos)}${e.target.innerText}${text.slice(pos)}`;
    input.value = text;
    input.focus();
    input.selectionStart = pos + 1;
    input.selectionEnd = pos + 1;
  }
});

document.onkeydown = (e) => {
  if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
    Shift(elements.shift);
    shiftMode(elements.shift);
  }
  let button = Array.prototype.find.call(elements.keyButtons, (el => el.dataset.keyCode === e.code));
  if (!button) {
      button = Array.prototype.find.call(elements.specButtons, ((el) => el.dataset.code === e.code));
  }
  if (button) {
    button.classList.add('active');
  }
};

document.onkeyup = (e) => {
  if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
    elements.shift.classList.remove('active');
    shiftMode(elements.shift);
  }
  let button = Array.prototype.find.call(elements.keyButtons, ((el) => el.dataset.keyCode === e.code));
  if (!button) {
    button = Array.prototype.find.call(elements.specButtons, ((el) => el.dataset.code === e.code));
  }
  if (button) {
    button.classList.remove('active');
  }
};

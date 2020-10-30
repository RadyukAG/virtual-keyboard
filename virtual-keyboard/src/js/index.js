import createKeyboard from './keyboard/createKeyboard';
import '../style/style.scss';
import '../style/normalize.css';
import { Shift } from './shared/buttonHandlers';

const elements = {};
document.addEventListener('DOMContentLoaded', () => {
  createKeyboard();
  elements.input = document.querySelector('.input-area');
  elements.keyboard = document.querySelector('.keyboard');
  elements.shift = document.querySelector('[data-code="ShiftLeft"]');
  elements.keyButtons = document.querySelectorAll('[data-key-code]');
  elements.specButtons = document.querySelectorAll('[data-code]');
});

function shiftMode(e) {
  let target;
  if (e.target) {
    target = e.target.dataset.code === 'ShiftLeft' ? e.target : e.target.closest('div');
  } else {
    target = e;
  }
  const isShift = target.classList.contains('active');
  if (!isShift) {
    elements.keyButtons.forEach((el) => {
      el.querySelector('.main').classList.remove('hidden');
      el.querySelector('.shift-mode').classList.add('hidden');
    });
  }
  else {
    elements.keyButtons.forEach((el) => {
      el.querySelector('.shift-mode').classList.remove('hidden');
      el.querySelector('.main').classList.add('hidden');
    });
  }
}

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

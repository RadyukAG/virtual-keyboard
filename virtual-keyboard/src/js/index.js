import createKeyboard from './keyboard/createKeyboard';
import '../style/style.scss';
import '../style/normalize.css';
import { Shift } from './shared/buttonHandlers';
import shiftMode from './shared/shiftMode';
import {initializeSounds, playSound} from './buttonSounds/buttonSound';
import '../js/speechRecognition/speechRecognition';
import capsLockHandler from './shared/capsLockHandler';

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
  initializeSounds();
});

elements.keyboard.addEventListener('click', (e) => {
  if (document.querySelector('[data-code="Sound"]').dataset.isSoundOn) {
    playSound();
  }
  const activeButton = e.target.closest('div');
  if (activeButton.dataset.code === 'Caps Lock') {
    return;
  }
  activeButton.classList.add('active');
  activeButton.addEventListener('mouseleave', () => {
    activeButton.classList.remove('active');
  });
  if (e.target.dataset.keyCode || e.target.closest('div').dataset.keyCode) {
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
  playSound();
  if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
    Shift(elements.shift, true);
    shiftMode(elements.shift);
  }
  if (e.code === 'CapsLock') {
    capsLockHandler(e);
    return;
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
  if (e.code === 'CapsLock') {
    return;
  }
  let button = Array.prototype.find.call(elements.keyButtons, ((el) => el.dataset.keyCode === e.code));
  if (!button) {
    button = Array.prototype.find.call(elements.specButtons, ((el) => el.dataset.code === e.code));
  }
  if (button) {
    button.classList.remove('active');
  }
};

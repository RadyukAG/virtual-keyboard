import ruKeys from '../data/keyboardKeys/ruKeys';
import enKeys from '../data/keyboardKeys/enKeys';

const input = document.querySelector('.input-area');

function moveCursorTo(pos) {
  input.focus();
  input.setSelectionRange(pos, pos);
}

function enter() {
  const { value, selectionStart: start, selectionEnd: end} = input;
  input.value = `${value.slice(0, start)}\n${value.slice(end)}`;
  moveCursorTo(start + 1);
}

function Backspace() {
  input.focus();
  const { value, selectionStart, selectionEnd } = input;
  if (selectionStart === 0) {
    return;
  }
  if (selectionStart === selectionEnd) {
    input.value = `${value.slice(0, selectionStart - 1)}${value.slice(selectionEnd)}`;
    moveCursorTo(selectionStart - 1);
  } else {
    input.value = `${value.slice(0, selectionStart)}${value.slice(selectionEnd)}`;
    moveCursorTo(selectionStart);
  }
  input.focus();
}

function Delete() {
  input.focus();
  const { value, selectionStart, selectionEnd } = input;
  if (selectionStart === value.length) {
    return;
  }
  if (selectionStart === selectionEnd) {
    input.value = `${value.slice(0, selectionStart)}${value.slice(selectionStart + 1)}`;
    moveCursorTo(selectionStart);
  } else {
    input.value = `${value.slice(0, selectionStart)}${value.slice(selectionEnd)}`;
    moveCursorTo(selectionStart);
  }
}

function Space() {
  const { value, selectionStart, selectionEnd } = input;
  input.value = `${value.slice(0, selectionStart)}\xa0${value.slice(selectionEnd)}`;
  moveCursorTo(selectionStart + 1);
  input.focus();
}

function ArrowLeft() {
  const {selectionStart} = input;
  input.focus();
  if (selectionStart > 0) {
    moveCursorTo(selectionStart - 1);
  }
  input.focus();
}

function ArrowRight() {
  const { selectionStart, value } = input;
  input.focus();
  if (selectionStart < value.length) {
    moveCursorTo(selectionStart + 1);
  }
  input.focus();
}

function Shift(e, isDown) {
  let target;
  if (e.dataset && e.dataset.code === 'ShiftLeft') {
    target = e;
  } else {
    target = e.target.tagName === 'div' ? e.target : e.target.closest('div');
  }
  if (target.classList.contains('active') && isDown) {
    return;
  }
  target.classList.toggle('active');
}

function ChangeLang(e) {
  const target = e.target.tagName === 'div' ? e.target : e.target.closest('div');
  target.dataset.lang = target.dataset.lang === 'ru' ? 'en' : 'ru';
  target.innerText = `Change language: ${target.dataset.lang.toUpperCase()}`;
  const keyButtons = document.querySelectorAll('[data-key-code]');
  const keysArray = target.dataset.lang === 'ru' ? ruKeys : enKeys;
  keyButtons.forEach((el) => {
    const { main, shiftMode } = keysArray.find((elem) => elem.code === el.dataset.keyCode);
    el.querySelector('.main').innerText = main;
    el.querySelector('.shift-mode').innerText = shiftMode;
  });
}

export { Backspace, Delete, Shift, Space, ArrowRight, ArrowLeft, ChangeLang, enter, moveCursorTo }

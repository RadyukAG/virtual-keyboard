function shiftMode(e) {
  let target;
  if (e.target) {
    target = e.target.dataset.code === 'ShiftLeft' ? e.target : e.target.closest('div');
  } else {
    target = e;
  }
  const isShift = target.classList.contains('active');
  const keyButtons = document.querySelectorAll('[data-key-code]');
  const capsLock = document.querySelector('[data-code="Caps Lock"]');
  const capsLockActive = capsLock.dataset.active;
  if (!isShift) {
    if (capsLockActive) {
      keyButtons.forEach((el) => {
        if (el.dataset.keyCode.startsWith('Key')) {
          el.querySelector('.main').classList.add('hidden');
          el.querySelector('.shift-mode').classList.remove('hidden');
        } else {
          el.querySelector('.main').classList.remove('hidden');
          el.querySelector('.shift-mode').classList.add('hidden');
        }
      });
    } else {
      keyButtons.forEach((el) => {
        el.querySelector('.main').classList.remove('hidden');
        el.querySelector('.shift-mode').classList.add('hidden');
      });
    }
  } else if (capsLockActive) {
    keyButtons.forEach((el) => {
      if (el.dataset.keyCode.startsWith('Key')) {
        el.querySelector('.main').classList.remove('hidden');
        el.querySelector('.shift-mode').classList.add('hidden');
      } else {
        el.querySelector('.main').classList.add('hidden');
        el.querySelector('.shift-mode').classList.remove('hidden');
      }
    });
  } else {
    keyButtons.forEach((el) => {
      el.querySelector('.shift-mode').classList.remove('hidden');
      el.querySelector('.main').classList.add('hidden');
    });
  }
}

export default shiftMode;

function shiftMode(e) {
  let target;
  if (e.target) {
    target = e.target.dataset.code === 'ShiftLeft' ? e.target : e.target.closest('div');
  } else {
    target = e;
  }
  const isShift = target.classList.contains('active');
  const keyButtons = document.querySelectorAll('[data-key-code]');
  if (!isShift) {
    keyButtons.forEach((el) => {
      el.querySelector('.main').classList.remove('hidden');
      el.querySelector('.shift-mode').classList.add('hidden');
    });
  } else {
    keyButtons.forEach((el) => {
      el.querySelector('.shift-mode').classList.remove('hidden');
      el.querySelector('.main').classList.add('hidden');
    });
  }
}

export default shiftMode;

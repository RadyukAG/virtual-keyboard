function capsLockHandler(e) {
  const target = document.querySelector('[data-code="Caps Lock"]');
  target.classList.toggle('active');
  const active = target.dataset.active;
  let keyButtons = Array.from(document.querySelectorAll('[data-key-code]'));
  keyButtons = keyButtons.filter((el) => el.dataset.keyCode.startsWith('Key'));
  if (!active) {
    target.dataset.active = true;
    keyButtons.forEach((el) => {
      el.querySelector('.main').classList.add('hidden');
      el.querySelector('.shift-mode').classList.remove('hidden');
    });
  } else {
    target.dataset.active = '';
    keyButtons.forEach((el) => {
      el.querySelector('.main').classList.remove('hidden');
      el.querySelector('.shift-mode').classList.add('hidden');
    });
  }
}

export default capsLockHandler;

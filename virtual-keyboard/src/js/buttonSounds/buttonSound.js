const sound = {
  ru: new Audio('../../../assets/audio/sound-ru.mp3'),
  en: new Audio('../../../assets/audio/sound-en.mp3'),
};

export function initializeSounds() {
  const soundButton = document.querySelector('[data-code="Sound"]');
  soundButton.dataset.isSoundOn = true;
  sound.ru.load();
  sound.en.load();
}

export function playSound() {
  const langBtn = document.querySelector('[data-code="ChangeLang"]');
  const lang = langBtn.dataset.lang ? langBtn.dataset.lang : 'en';
  const audio = new Audio();
  audio.src = sound[lang].src;
  audio.play();
}

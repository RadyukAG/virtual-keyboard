import { moveCursorTo } from '../shared/buttonHandlers';

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
const mic = document.querySelector('.mic-button');
function disableMic() {
  mic.dataset.status = 'inactive';
  mic.style.backgroundImage = "url('../../assets/icons/mute.png')";
}
mic.addEventListener('click', (e) => {
  if (e.target.dataset.status === 'active') {
    recognition.removeEventListener('end', recognition.start);
    recognition.stop();
    disableMic();
  } else {
    const langElement = document.querySelector('[data-code=ChangeLang');
    recognition.lang = langElement.dataset.lang ? langElement.dataset.lang : 'en';
    recognition.start();
    recognition.addEventListener('end', recognition.start);
    e.target.dataset.status = 'active';
    e.target.style.backgroundImage = "url('../../assets/icons/microphone.png')";
  }
});

let request;
recognition.addEventListener('result', (e) => {
  const input = document.querySelector('.input-area');
  request = e.results[0][0].transcript;
  const { value, selectionStart, selectionEnd } = input;
  input.value = `${value.slice(0, selectionStart)}${request}${value.slice(selectionEnd)}`;
  moveCursorTo(selectionEnd + request.length);
  input.focus();
});

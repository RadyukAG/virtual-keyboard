const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
const mic = document.querySelector('.mic-button');
function disableMic() {
  mic.dataset.status = 'inactive';
  mic.style.backgroundImage = "url('../../assets/icons/mute.png')";
}
mic.addEventListener('click', (e) => {
  if (e.target.dataset.status === 'active') {
    recognition.stop();
    disableMic();
  } else {
    recognition.start();
    e.target.dataset.status = 'active';
    e.target.style.backgroundImage = "url('../../assets/icons/microphone.png')";
  }
});

let request;
recognition.addEventListener('end', (e) => {
  console.log(e.results);
  disableMic();
});

recognition.addEventListener('result', (e) => {
  request = e.results[0][0].transcript;
  console.log(request);
});

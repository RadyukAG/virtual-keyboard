function buttonSoundHandler(e) {
  e.target.dataset.isSoundOn = e.target.dataset.isSoundOn ? '' : true;
  e.target.classList.toggle('sound-off');
}

export default buttonSoundHandler;

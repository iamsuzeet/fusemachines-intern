const removeTransition = function(e) {
  if (e.propertyName !== 'transform') return; // skip if it's not a transform
  this.classList.remove('playing');
};

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

const playSound = e => {
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!sound) return; //stop the function from running all together;
  sound.currentTime = 0; //rewind to the start
  sound.play();
  key.classList.add('playing');
};

window.addEventListener('keydown', playSound);


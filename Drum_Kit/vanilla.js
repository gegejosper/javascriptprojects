  function playSound (keyCode){
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${keyCode}"]`);
    if (!audio) return; //stop the function from running all together
    audio.currentTime = 0; //rewind the audio from the start
    audio.play();
    key.classList.add('playing');
  }
  function playViaClick(e){
    const keyCode = e.dataset.key;
    playSound(keyCode);
  }
  function playViaKeydown(e){
    const keyCode = e.keyCode;
    playSound(keyCode);
  }

  // window.addEventListener('keyup', (e) => {
  //   const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  //   //console.log(e.keyCode);
  //   key.classList.remove('playing');
  // });
  
  function removeTransition(e){
    //e.classList.remove('playing');
    if(e.propertyName !== 'transform') return; // skip if it is not a transform;
    this.classList.remove('playing');
  }
  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));

  //window.addEventListener('click', playViaClick);

  window.addEventListener('keydown', playViaKeydown);
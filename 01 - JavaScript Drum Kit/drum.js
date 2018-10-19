const playSickBeatz = e => {
  const keyPressed = e.keyCode
  const audio = document.querySelector(`audio[data-key="${keyPressed}"]`)
  const key = document.querySelector(`.key[data-key="${keyPressed}"]`)
  if (!audio) return
  audio.currentTime = 0 // reset audio to allow faster playing
  audio.play()
  key.classList.add('playing')
}
window.addEventListener('keydown', playSickBeatz)

function sickTransitionDone(e) {
  if (e.propertyName !== 'transform') return
  this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key')
keys.forEach(key => {
  key.addEventListener('transitionend', sickTransitionDone)
})

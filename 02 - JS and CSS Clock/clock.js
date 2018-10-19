const secondHand = document.querySelector('.second-hand')
const hourHand = document.querySelector('.hour-hand')
const minHand = document.querySelector('.min-hand')
const startingDegrees = 90

const calculateTime = () => {
  const time = new Date()
  const hours = time.getHours()
  const minutes = time.getMinutes()
  const seconds = time.getSeconds()

  return { hours, minutes, seconds }
}

function clockWork() {
  const { hours, minutes, seconds } = calculateTime()
  const sDegrees = (seconds / 60) * 360 + startingDegrees
  const mDegrees = (minutes / 60) * 360 + (seconds / 60) * 6 + startingDegrees
  const hDegrees = (hours / 12) * 360 + (minutes / 60) * 30 + startingDegrees
  secondHand.style.transform = `rotate(${sDegrees}deg)`
  minHand.style.transform = `rotate(${mDegrees}deg)`
  hourHand.style.transform = `rotate(${hDegrees}deg)`

  console.log(hours, minutes, seconds)
}
setInterval(clockWork, 1000)

clockWork()

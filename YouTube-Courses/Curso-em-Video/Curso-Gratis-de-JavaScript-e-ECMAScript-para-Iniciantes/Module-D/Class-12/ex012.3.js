var currentSystemTime = new Date()
var hour = currentSystemTime.getHours()
console.log(`It's now ${hour} o'clock.`)

if (hour <= 7) {
  console.log(`It's still early morning. Go rest!`)
} else if (hour < 12) {
  console.log('Good morning!')
} else if (hour <= 17) {
  console.log('Good afternoon!')
} else {
  console.log('Goodnight!')
}
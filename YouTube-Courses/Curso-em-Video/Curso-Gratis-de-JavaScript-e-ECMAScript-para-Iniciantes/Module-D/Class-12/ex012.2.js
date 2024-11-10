/*
1 - 7 hours = Early morning
8 - 11 hours = Morning
12 - 17 hours = Afternoon
18 - 23 hours = Night
*/
var hour = 1
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
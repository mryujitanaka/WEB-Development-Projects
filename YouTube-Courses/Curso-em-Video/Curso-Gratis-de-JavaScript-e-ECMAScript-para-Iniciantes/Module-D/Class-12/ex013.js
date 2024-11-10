var currentSystemDate = new Date()
var dayOfTheWeek = currentSystemDate.getDay()
// dayOfTheWeek = 7

/*
0 = Sunday
1 = Monday
2 = Tuesday
3 = Wednesday
4 = Thursday
5 = Friday
6 = Saturday
*/

console.log(`JavaScript day of the week: ${dayOfTheWeek}`)
switch (dayOfTheWeek) {
  case 0:
    console.log('Today is: Sunday')
    break
  case 1:
    console.log('Today is: Monday')
    break
  case 2:
    console.log('Today is: Tuesday')
    break
  case 3:
    console.log('Today is: Wednesday')
    break
  case 4:
    console.log('Today is: Thursday')
    break
  case 5:
    console.log('Today is: Friday')
    break
  case 6:
    console.log('Today is: Saturday')
    break
  default:
    console.log('[ERROR] Invalid day!')
    break
}
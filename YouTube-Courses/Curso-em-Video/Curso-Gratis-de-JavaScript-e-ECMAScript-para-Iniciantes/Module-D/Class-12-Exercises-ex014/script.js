function whenLoadingTheWebsite() {
  var msgDiv = window.document.getElementById('msgDiv')
  var image = window.document.getElementById('image')
  var currentDate = new Date()
  var currentDate = currentDate.getHours()

  msgDiv.innerHTML = `It's ${currentDate} o'clock.`

  if (currentDate >= 0 && currentDate < 12) {
    // Morning
    image.src = 'img/morning.png'
    document.body.style.background = '#F8CD9E'
  } else if (currentDate >= 12 && currentDate <= 17) {
    // Afternoon
    image.src = 'img/afternoon.png'
    document.body.style.background = '#DDBC90'
  } else {
    // Night
    image.src = 'img/night.png'
    document.body.style.background = '#405570'
  }
}

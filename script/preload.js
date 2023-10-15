function updateStyling() {
  // json theme format :
  // light: nav, body, accent, font
  // dark: nav, body, accent, font
  var key = localStorage.getItem("theme")
  if (!key) return
  var theme = key.split("#")
  theme = theme.filter(function(j) {
    return j !== ""
  })
  if (theme.length < 8) return
  for (let j = 0; j < theme.length; ++j)
    theme[j] = "#" + theme[j]
  
  document.documentElement.style.setProperty('--navColor', theme[0])
  document.documentElement.style.setProperty('--bodyColor', theme[1])
  document.documentElement.style.setProperty('--accentColor', theme[2])
  document.documentElement.style.setProperty('--fontColor', theme[3])
  
  document.documentElement.style.setProperty('--navColorDark', theme[4])
  document.documentElement.style.setProperty('--bodyColorDark', theme[5])
  document.documentElement.style.setProperty('--accentColorDark', theme[6])
  document.documentElement.style.setProperty('--fontColorDark', theme[7])
  
}

document.addEventListener("DOMContentLoaded", () => {
  //handle deafult theme
  updateStyling()
	fetch('./data/last-update.txt').then(response => response.text())
	.then(text => document.getElementById('last-update').innerHTML = text)
	//handle clock if exist
	var clock = document.getElementById('clock')
	if (clock) {
    var clckIntrv
    var hourTick = clock.getElementById('hour-tick')
    var minuteTick = clock.getElementById('minute-tick')
  	clock.addEventListener('load', () => {
      const d = new Date()
      const locale = window.navigator.language
      clock.getElementById('day-name').innerHTML = d.toLocaleDateString(locale, { weekday: 'long' })
      clock.getElementById('date-day').innerHTML = d.toLocaleDateString(locale, { day: 'numeric' })
      clock.getElementById('date-my').innerHTML = d.toLocaleDateString(locale, { month: 'short', year: 'numeric' })
      var update = function (a) { 
      	let ticks = a.getMinutes() * 6.0 + (d.getSeconds()/10.0)
      	minuteTick.setAttribute('transform', 'rotate('+ticks+' 100 100)')
      	ticks /= 360.0
      	ticks += a.getHours() * 30.0
      	hourTick.setAttribute('transform', 'rotate('+ticks+' 100 100)')
      }
      update(d)
      setTimeout(() => {
        update(new Date())
    	  clckIntrv = setInterval(update(new Date()), 1000)
      }, 59 - d.getSeconds()
      )
  	})
  	clock.addEventListener('unload', () => {
      if(!clckIntrv) return
    	clearInterval(clckIntrv)
    	clckIntrv = null
  	})
	}
	
})



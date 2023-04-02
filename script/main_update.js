//first time
var hourTick = document.getElementById('hour-tick');
var minuteTick = document.getElementById('minute-tick');
//setelah jendela dimuat
window.addEventListener('load', function(){
	fetch('../data.txt').then(response => response.text()).then(text => document.getElementById('data_updated').innerHTML = text);
});
//menghandle update per menit
window.addEventListener('resize', function(){
});
window.addEventListener('error', function(){
});
window.addEventListener('message', function(){
	updateTheme();
});
window.addEventListener('offline', function(){
});
window.addEventListener('online', function(){
});
let nIntervId;
window.addEventListener('focus', function(){
	nIntervId = setInterval(() => {
	  update(new Date())
	}, 1000); // per minutes = 60000 ms
});
window.addEventListener('blur', function(){
	clearInterval(nIntervId);
});
//sebelum jendela hancur
window.addEventListener('beforeunload', function(){
});
//setelah jendela hancur
window.addEventListener('unload', function(){
});

function update(d) {
	let secp = 6.0 * d.getSeconds();
	let mntp = 6.0 * d.getMinutes() + secp / 60.0;
	let hourp = 30.0 * d.getHours() + mntp / 12.0;
	minuteTick.setAttribute('transform', 'matrix(1 0 0 1 100 100) rotate('+mntp+')');
	hourTick.setAttribute('transform', 'matrix(1 0 0 1 100 100) rotate('+hourp+')');
}
//setelah script terdefinisi
var isDarkTheme;
function updateTheme() { 
	// Mengecek apakah browser mendukung prefers-color-scheme
	let darkTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
	if (isDarkTheme != darkTheme) {
		if (darkTheme) {
			
		} else {
			
		}
		isDarkTheme = darkTheme;
	}
}
//update day

const d = new Date();
const locale = window.navigator.language;
const optionsDay = { weekday: 'long' };
document.getElementById('day-name').innerHTML = d.toLocaleDateString(locale, optionsDay);
const optionsDate = { day: 'numeric' };
document.getElementById('date-day').innerHTML = d.toLocaleDateString(locale, optionsDate);
const optionsMY = { month: 'short', year: 'numeric' };
document.getElementById('date-my').innerHTML = d.toLocaleDateString(locale, optionsMY);

update(d);
//first time
var datetimeSpan = document.getElementById('date_time');
var hourTick = document.getElementById('hour-tick');
var minuteTick = document.getElementById('minute-tick');

const dateFormat = {
	weekday: 'long',
	day: '2-digit',
	month: 'short',
	year: 'numeric'
};

update();
let nIntervId = setInterval(update(), 1000); // per minutes = 60000 ms
window.addEventListener('unload', function(){
	clearInterval(nIntervId);
});

function update() {
	fetch('../data.txt').then(response => response.text()).then(text => document.getElementById('data_updated').innerHTML = text);
	let d = new Date();
	datetimeSpan.innerHTML = d.toLocaleString('id', dateFormat);
	let secp = 6.0 * d.getSeconds();
	let mntp = 6.0 * d.getMinutes() + secp / 60.0;
	let hourp = 30.0 * d.getHours() + mntp / 12.0;
	minuteTick.setAttribute('transform', 'matrix(1 0 0 1 100 100) rotate('+mntp+')');
	hourTick.setAttribute('transform', 'matrix(1 0 0 1 100 100) rotate('+hourp+')');
}
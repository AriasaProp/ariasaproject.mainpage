var datetimeSpan = document.getElementById('datetime');

var hourTick = document.getElementById('hour-tick');
var minuteTick = document.getElementById('minute-tick');

const dateFormat = {weekday:'long', day:'2-digit', month:'short', year:'numeric'};

update();
let nIntervId = setInterval(update(), 60000); // per minutes = 60000 ms


function update() {
	let d = new Date();
	datetimeSpan.innerHTML = d.toLocaleString('id', dateFormat);
	let hourDeg = 360.0 * d.getHours() / 12;
	let minuteDeg = 360.0 * d.getMinutes() / 60;
	hourTick.setAttribute('transform', 'matrix(1 0 0 1 100 100) rotate('+hourDeg+')');
	minuteTick.setAttribute('transform', 'matrix(1 0 0 1 100 100) rotate('+minuteDeg+')');
}

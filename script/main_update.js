var datetimeSpan = document.getElementById('datetime');
const dateFormat = {hour:'2-digit', minute:'2-digit', weekday:'long', day:'2-digit', month:'short', year:'numeric'};

update();
let nIntervId = setInterval(update(), 60000); // per minutes = 60000 ms


function update() {
	let d = new Date();
	datetimeSpan.innerHTML = d.toLocaleString('id', dateFormat);
}

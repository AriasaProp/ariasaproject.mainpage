var nIntervId;

function update() {
	var dt = new Date();
	document.getElementById("datetime").innerHTML = dt.toLocaleString();
}

$(function() {
	nIntervId = setInterval(update, 1000*60);
});
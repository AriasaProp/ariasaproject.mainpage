

// update footer
fetch('./data/last-update.txt').then(response => response.text())
.then(text => document.getElementById('last-update').innerHTML = text);

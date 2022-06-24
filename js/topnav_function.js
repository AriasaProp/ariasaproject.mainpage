function expand()
{
  var x = document.getElementById("ntopnav");
  if (x.className === "topnav") {
	x.className += " mini";
  } else {
	x.className = "topnav";
  }
}
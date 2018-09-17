// A function that adds and removes the class "active" on the section you click on.

function toggle() {
  //Add or remove the "active" class.
  this.classList.toggle("active");

  //Toggle between plus and minus icon depending on which one is currently showing
  var iconEl = this.getElementsByTagName("i");
  iconEl[0].classList.toggle("fa-plus");
  iconEl[0].classList.toggle("fa-minus");
}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById("section1").onclick = toggle
document.getElementById("section2").onclick = toggle
document.getElementById("section3").onclick = toggle

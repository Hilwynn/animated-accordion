function toggle() {
  //Toggle between plus and minus icon depending on which one is currently showing
  var iconEl = this.getElementsByTagName("i");
  iconEl[0].classList.toggle("fa-plus");
  iconEl[0].classList.toggle("fa-minus");

  var descEl = this.nextElementSibling;
    console.log(descEl); // Get the next sibling, i.e. the description div

  var getHeight = function () {
    descEl.style.display = 'block'; // Make it visible
    var height = descEl.scrollHeight + 'px'; // Get its height
    descEl.style.display = ''; //  Hide it again
    return height;
  };

  if (this.classList.contains("active")) {
    // Make a variable for clicked element to use in the setTimeOut function
    var clickedEl = this;

    // Give the element a height to change from
    descEl.style.height = descEl.scrollHeight + 'px';

    // Set the height back to 0
    window.setTimeout(function () {
      descEl.style.height = '0';
    }, 1);

  // When the transition is complete, hide it
    window.setTimeout(function () {
      console.log(clickedEl);
      clickedEl.classList.remove('active');
    }, 350);
  } else {
    var height = getHeight(); // Get the natural height
    this.classList.add('active'); // Add the "active class"
    descEl.style.height = height; // Update the max-height

    // Once the transition is complete, remove the inline max-height so the content can scale responsively
    window.setTimeout(function () {
  		descEl.style.height = '';
  	}, 350);
  }
}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById("section1").onclick = toggle
document.getElementById("section2").onclick = toggle
document.getElementById("section3").onclick = toggle

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var smallMenu = document.getElementById("small-menu");

// Get the offset position of the navbar
var sticky = smallMenu.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    smallMenu.classList.add("sticky")
  } else {
    smallMenu.classList.remove("sticky");
  }
}
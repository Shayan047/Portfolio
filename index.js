window.addEventListener("scroll", function() {
  var scroll = this.scrollY;
  if (scroll == 0) {
    document.querySelector("nav").classList.remove("scroll");
  }
  else {
    document.querySelector("nav").classList.add("scroll");
  }
})

var toggleButton = document.querySelector(".toggle-btn");
var navbarLinks = document.querySelector("ul");
var subButton = document.querySelector(".sub-btn");


toggleButton.addEventListener("click", function() {
  navbarLinks.classList.toggle("active");
  subButton.classList.toggle("active");
})

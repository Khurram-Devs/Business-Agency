var nav = document.getElementsByClassName("nav")[0];
window.addEventListener("scroll", function () {
  let value = window.scrollY;
  if (value > 0) {
    nav.classList.add("scrolled");
  } else if (value < 100) {
    nav.classList.remove("scrolled");
  }
});

var menu = document.getElementById("bar");
var items = document.getElementById("navbar");

menu.onclick = function () {
  if (items.style.right == "-360px") {
    items.style.right = "0";
  } else {
    items.style.right = "-360px";
  }
};

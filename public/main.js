// toggle

function toggleMenu() {
  var menuToggle = document.querySelector(".toggle");
  var menu = document.querySelector(".primary_nav");
  var menu_two = document.querySelector(".two");

  menuToggle.classList.toggle("active");
  menu.classList.toggle("active");
  menu_two.classList.toggle("active");
}

var forEach = function (array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]);
  }
};
var BridesmaidsImageText = document.querySelectorAll(".BridesmaidsImageText");
forEach(BridesmaidsImageText, function (index, value) {
  value.addEventListener("click", function () {
    this.classList.toggle("about-is-showing");
  });
});

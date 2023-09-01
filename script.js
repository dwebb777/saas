document.querySelector(".menu-toggle").addEventListener("click", function () {
  var menu = document.querySelector(".menu")
  var hero = document.querySelector(".hero")
  var top = document.querySelector(".top")
  var headbutton = document.querySelector(".header-btn")

  if (menu.style.display === "none") {
    menu.style.display = "flex"
  } else {
    hero.style.display = "none"
    menu.style.display = "none"
    top.style.background = "unset"
    headbutton.style.display = "block"
  }
})

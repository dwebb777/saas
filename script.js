document.querySelector(".menu-toggle").addEventListener("click", function () {
  var menu = document.querySelector(".menu")
  var hero = document.querySelector(".hero")
  var top = document.querySelector(".top")
  var headButton = document.querySelector(".header-btn")
  var menuToggle = document.querySelector(".menu-toggle")

  if (menu.style.display === "none") {
    menu.style.display = "flex"
  } else {
    hero.style.display = "none"
    menu.style.display = "none"

    menuToggle.style.marginTop = "14rem"
    top.style.background = "unset"
    headButton.style.display = "block"
  }
})

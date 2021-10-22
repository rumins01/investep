let winHeight = window.innerHeight
let theme = "primary"

window.addEventListener("load", function () {
  let positionY = window.scrollY

  winHeight = window.innerHeight

  checkAndToggleNavColor()

  window.addEventListener("resize", function () {
    winHeight = window.innerHeight
    checkAndToggleNavColor()
  })

  window.addEventListener("wheel", checkAndToggleNavColor, { passive: true })
})

function checkAndToggleNavColor() {
  if (checkNeedNavColorChange()) toggleNavColor()
}

function checkNeedNavColorChange() {
  let positionY = window.scrollY

  if (
    (positionY > winHeight - 64 && theme == "primary") ||
    (positionY <= winHeight + 64 && theme == "white")
  ) {
    return true
  } else {
    return false
  }
}

function toggleNavColor() {
  let navbars = [...document.getElementsByTagName("nav")]
  let navbarTexts = [...document.getElementsByClassName("navbar-text")]
  let navbarButtons = [...document.getElementsByClassName("navbar-button")]

  const navbarClasses = ["bg-primary", "bg-white"]
  const navbarTextClasses = ["text-primary", "text-white"]
  const navbarButtonClasses = [
    "border-primary",
    "text-primary",
    "hover:bg-primary",
    "hover:text-primary",
    "border-white",
    "text-white",
    "hover:bg-white",
    "hover:text-white",
  ]

  navbars.map((navbar) =>
    navbarClasses.map((navbarClass) => navbar.classList.toggle(navbarClass))
  )
  navbarTexts.map((navbarText) =>
    navbarTextClasses.map((navbarTextClass) =>
      navbarText.classList.toggle(navbarTextClass)
    )
  )
  navbarButtons.map((navbarButton) =>
    navbarButtonClasses.map((navbarButtonClass) =>
      navbarButton.classList.toggle(navbarButtonClass)
    )
  )

  theme = theme == "primary" ? "white" : "primary"
}

function collapsedNavOpen() {
  let collapsedNav = document.getElementById("collapsed-nav")

  collapsedNav.classList.remove("hidden")
  collapsedNav.classList.add("flex", "flex-col")
}

function collapsedNavClose() {
  let collapsedNav = document.getElementById("collapsed-nav")

  collapsedNav.classList.remove("flex", "flex-col")
  collapsedNav.classList.add("hidden")
}

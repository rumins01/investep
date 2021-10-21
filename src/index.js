let winHeight = window.innerHeight
let sections = document.getElementsByTagName("section")
let currentPage = 0
let theme = "primary"

window.addEventListener("resize", function () {
  winHeight = window.innerHeight
})

window.addEventListener("load", function () {
  let scrollStatus = {
    wheeling: false,
    functionCall: false,
  }
  let scrollTimer = false

  window.addEventListener(
    "wheel",
    function (e) {
      scrollStatus.wheeling = true
      let direction = e.deltaY < 0 ? "up" : "down"
      let currentPageOffset = currentPage * winHeight

      if (!scrollStatus.functionCall) {
        if (direction == "down" && currentPage <= sections.length - 2) {
          window.scrollTo(0, currentPageOffset + winHeight)
          currentPage++
        } else if (direction == "down" && currentPage == sections.length - 1) {
          currentPage++
        } else if (direction == "up" && currentPage > 0) {
          window.scrollTo(0, currentPageOffset - winHeight)
          currentPage--
        }

        if (
          (currentPage > 0 && theme == "primary") ||
          (currentPage == 0 && theme == "white")
        ) {
          this.setTimeout(
            () => {
              changeNavbarColor()
            },
            direction == "down" ? 400 : 0
          )
        }

        scrollStatus.functionCall = true
      }
      window.clearInterval(scrollTimer)
      scrollTimer = window.setTimeout(function () {
        scrollStatus.wheeling = false
        scrollStatus.functionCall = false
      }, 300)
    },
    { passive: true }
  )

  // window.addEventListener(
  //   "scroll",
  //   function (e) {
  //     e.preventDefault()
  //     scrollStatus.wheeling = true
  //     let direction = e.deltaY < 0 ? "up" : "down"
  //     let currentPageOffset = currentPage * winHeight

  //     if (!scrollStatus.functionCall) {
  //       if (direction == "down" && currentPage <= sections.length - 2) {
  //         window.scrollTo(0, currentPageOffset + winHeight)
  //         currentPage++
  //       } else if (direction == "down" && currentPage == sections.length - 1) {
  //         currentPage++
  //       } else if (direction == "up" && currentPage > 0) {
  //         window.scrollTo(0, currentPageOffset - winHeight)
  //         currentPage--
  //       }

  //       if (
  //         (currentPage > 0 && theme == "primary") ||
  //         (currentPage == 0 && theme == "white")
  //       ) {
  //         this.setTimeout(
  //           () => {
  //             changeNavbarColor()
  //           },
  //           direction == "down" ? 400 : 0
  //         )
  //       }

  //       scrollStatus.functionCall = true
  //     }
  //     window.clearInterval(scrollTimer)
  //     scrollTimer = window.setTimeout(function () {
  //       scrollStatus.wheeling = false
  //       scrollStatus.functionCall = false
  //     }, 300)
  //   },
  //   false
  // )
})

function scrollPage(e, scrollStatus, scrollTimer) {}

function changePageNumber(pageNumber) {
  let pageDiff = Math.abs(currentPage - pageNumber)

  currentPage = pageNumber

  if (
    (currentPage > 0 && theme == "primary") ||
    (currentPage == 0 && theme == "white")
  ) {
    this.setTimeout(
      () => {
        changeNavbarColor()
      },
      pageDiff == 1 && theme == "white" ? 0 : 400
    )
  }
}

function changeNavbarColor() {
  let navbar = document.getElementsByTagName("nav")
  let navbarTexts = document.getElementsByClassName("navbar-text")
  let navbarButtons = document.getElementsByClassName("navbar-button")

  if (theme === "primary") {
    for (let i = 0; i < navbar.length; i++) {
      navbar[i].classList.remove("bg-primary")
      navbar[i].classList.add("bg-white")
    }
    for (let i = 0; i < navbarTexts.length; i++) {
      navbarTexts[i].classList.remove("text-white")
      navbarTexts[i].classList.add("text-primary")
    }
    for (let i = 0; i < navbarButtons.length; i++) {
      navbarButtons[i].classList.remove("border-white")
      navbarButtons[i].classList.remove("text-white")
      navbarButtons[i].classList.remove("hover:bg-white")
      navbarButtons[i].classList.remove("hover:text-primary")
      navbarButtons[i].classList.add("border-primary")
      navbarButtons[i].classList.add("text-primary")
      navbarButtons[i].classList.add("hover:bg-primary")
      navbarButtons[i].classList.add("hover:text-white")
    }

    theme = "white"
  } else {
    for (let i = 0; i < navbar.length; i++) {
      navbar[i].classList.remove("bg-white")
      navbar[i].classList.add("bg-primary")
    }
    for (let i = 0; i < navbarTexts.length; i++) {
      navbarTexts[i].classList.remove("text-primary")
      navbarTexts[i].classList.add("text-white")
    }
    for (let i = 0; i < navbarButtons.length; i++) {
      navbarButtons[i].classList.remove("border-primary")
      navbarButtons[i].classList.remove("text-primary")
      navbarButtons[i].classList.remove("hover:bg-primary")
      navbarButtons[i].classList.remove("hover:text-white")
      navbarButtons[i].classList.add("border-white")
      navbarButtons[i].classList.add("text-white")
      navbarButtons[i].classList.add("hover:bg-white")
      navbarButtons[i].classList.add("hover:text-primary")
    }

    theme = "primary"
  }
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

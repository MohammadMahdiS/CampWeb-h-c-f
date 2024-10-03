// navBtn if selected one add class "nav__btn--open" if selected again remove class "nav__btn--open"
const navBtn = document.querySelector(".nav__btn")
const navMenu = document.querySelector('.nav-menu')

let navOpen = false;
navBtn.addEventListener("click", function() {
    if (navOpen) {
        navBtn.classList.remove("nav__btn--open")
        navMenu.classList.remove("nav-menu--open")
        navOpen = false
    }else {
        navBtn.classList.add("nav__btn--open")
        navMenu.classList.add("nav-menu--open")
        navOpen = true
    }
})
// Nav Menu (720px)

const nav = document.querySelector("nav");
const menuButton = document.querySelector(".menu-button");
const menuUl = document.querySelector("nav ul");

menuButton.addEventListener('click', () => {
    menuUl.classList.toggle('show');
})

const navLink = document.querySelectorAll(".navbar-link");

navLink.forEach((link) => 
    link.addEventListener("click", () => {
        menuUl.classList.remove('show');
    })
);
// Scroll to Top Button

const scrollToTop = document.querySelector(".scroll-to-top");

scrollToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left:0,
        behavior: "smooth",
    })
});
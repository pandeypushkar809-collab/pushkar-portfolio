// Navbar
const header = document.querySelector("header");

// Window Scroll Event
window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }

});
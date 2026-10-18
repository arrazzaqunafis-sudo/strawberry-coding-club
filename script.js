// toggle class active
const nafisnav = document.querySelector(".nafis-nav");

// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  nafisnav.classList.toggle("active");
};

// klik diluar sidebar untuk menghilangkan navbar
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !nafisnav.contains(e.target)) {
    nafisnav.classList.remove("active");
  }
});


const navbar = document.getElementById("navbar");
const hero = document.getElementById("hero");

function cekNavbar() {
    if (window.scrollY < hero.offsetHeight - navbar.offsetHeight /2) {
        navbar.classList.add("transparent");
    } else {
        navbar.classList.remove("transparent");
    }
}

window.addEventListener("scroll", cekNavbar);
window.addEventListener("resize", cekNavbar);

cekNavbar();

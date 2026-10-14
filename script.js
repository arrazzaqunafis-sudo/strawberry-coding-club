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

const menuMobile = document.querySelector(".menu");
const navLinks = document.querySelector("ul");
const icon = document.querySelector(".menu i");

menuMobile.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  icon.classList.toggle("fa-times");
  icon.classList.toggle("fa-bars");
});

// Mobile nav toggle
const menuToggle = document.getElementById("menuToggle");
const headerNav = document.querySelector(".header__nav");
const headerActions = document.querySelector(".header__actions");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    headerNav?.classList.toggle("is-open");
    headerActions?.classList.toggle("is-open");
  });
}

// Simple year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

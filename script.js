// Ambil elemen
const menuButton = document.querySelector("#menu");
const navbarNav = document.querySelector(".navbar-nav");

// Toggle menu saat tombol hamburger di klik
menuButton.addEventListener("click", (e) => {
  e.preventDefault(); // biar ga reload ke atas
  navbarNav.classList.toggle("active");
});

// Tutup menu otomatis kalau salah satu link diklik
document.querySelectorAll(".navbar-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    navbarNav.classList.remove("active");
  });
});
// animasi
document.addEventListener("DOMContentLoaded", function () {
  new TypeIt("#typing", {
    strings: [""],
    speed: 500,
  }).go();
});
document.addEventListener("DOMContentLoaded", function () {
  new TypeIt("#type", {
    strings: [""],
    speed: 500,
  }).go();
});

window.addEventListener("DOMContentLoaded", function () {
  // Dark mode
  const btnDark = document.querySelector(".darkMode-btn");

  btnDark.addEventListener("click", function () {
    document.querySelector("body").classList.toggle("dark");
  });

  // Navbar
  const nav = document.querySelector(".nav");

  window.addEventListener("scroll", function () {
    if (window.scrollY >= 1) {
      nav.classList.add("fix");
    } else {
      nav.classList.remove("fix");
    }
  });
});

window.addEventListener("DOMContentLoaded", function () {
  // Dark mode
  const btnDark = document.querySelector(".darkMode-btn");

  btnDark.addEventListener("click", function () {
    document.querySelector("body").classList.toggle("dark");
  });

  //   Loader
  const loader = document.querySelector(".loader-wrapper");
  document.body.classList.add("loading");
  setTimeout(() => {
    loader.style.opacity = "0";

    setTimeout(() => {
      loader.style.display = "none";
      document.body.classList.remove("loading");
    }, 500);
  }, 500);

  // Navbar
  const nav = document.querySelector(".nav");
  window.addEventListener("scroll", function () {
    if (window.scrollY >= 1) {
      nav.classList.add("fix");
    } else {
      nav.classList.remove("fix");
    }
  });

  //   Up BUTTON
  const upBtn = document.querySelector(".up-wrapper");
  window.addEventListener("scroll", function () {
    if (window.scrollY >= 250) {
      upBtn.classList.add("show");
    } else {
      upBtn.classList.remove("show");
    }
  });

  upBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  
  //   BURGER
  const burger = document.querySelector(".nav-menu"),
    burgerBtn = document.querySelector(".burger-btn");

  burgerBtn.addEventListener("click", function () {
    burger.classList.toggle("nav-menu__active");
  });

  //   CARUSEL
  const track = document.querySelector(".carousel-track");
  const slides = document.querySelectorAll(".slide");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");

  let currentIndex = 0;
  const slideWidth = slides[0].clientWidth;

  function updateSlide() {
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  let slideInterval;
  function autoSlide() {
    slideInterval = setInterval(nextSlide, 5000);
  }

  function nextSlide() {
    if (currentIndex === slides.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }

    updateSlide();
  }

  function prevSlide() {
    if (currentIndex === 0) {
      currentIndex = slides.length - 1;
    } else {
      currentIndex--;
    }

    updateSlide();
  }

  nextBtn.addEventListener("click", () => {
    clearInterval(slideInterval);
    nextSlide();
    autoSlide();
  });
  prevBtn.addEventListener("click", () => {
    clearInterval(slideInterval);
    prevSlide();
    autoSlide();
  });

  autoSlide();
});

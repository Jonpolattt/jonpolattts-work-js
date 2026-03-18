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

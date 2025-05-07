const heroSliderTrack = document.querySelector(".hero-slider-track");
const heroSlides = document.querySelectorAll(".hero-slide");

let currentSlide = 0;
const totalSlides = heroSlides.length;

function moveToNextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  const offset = currentSlide * -100;
  heroSliderTrack.style.transition = "transform 1s ease-in-out"; // Smooth transition
  heroSliderTrack.style.transform = `translateX(${offset}%)`;
}

// Move to the next slide every 3 seconds
setInterval(moveToNextSlide, 3000);

// Initially set the first slide visible
heroSliderTrack.style.transform = "translateX(0%)";

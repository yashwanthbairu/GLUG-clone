const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

let currentIndex = 0;

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// Function to update the slide position
function updateSlidePosition() {
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Event listener for "Next" button
nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalSlides; // Loop back to the first slide
  updateSlidePosition();
});

// Event listener for "Previous" button
prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Loop back to the last slide
  updateSlidePosition();
});

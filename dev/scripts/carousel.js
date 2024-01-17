// Section with examples of which use cases we are solving, presented in a very simple carousel view with a link for further reading.
const carouselSection = document.getElementById('use-cases');

// Carousel with controls and indicators to cycle the slides
const carousel = carouselSection.querySelector('.carousel');
const slides = carousel.querySelectorAll('.slide');
const prevButton = carouselSection.querySelector('.prev-slide');
const nextButton = carouselSection.querySelector('.next-slide');
const indicators = carouselSection.querySelectorAll('.indicator');

let currentSlideIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = 'block';
            indicators[i].classList.add('active');
        } else {
            slide.style.display = 'none';
            indicators[i].classList.remove('active');
        }
    });
}

function showNextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
}

function showPreviousSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    showSlide(currentSlideIndex);
}

function showSlideByIndicator(index) {
    currentSlideIndex = index;
    showSlide(currentSlideIndex);
}

prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        showSlideByIndicator(index);
    });
});

showSlide(currentSlideIndex);

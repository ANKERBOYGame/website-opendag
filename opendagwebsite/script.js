let slideIndex = 1;
let slideInterval; // Interval to auto-slide
let isPaused = false; // Tracks if the slideshow is paused
showSlides(slideIndex);
startAutoSlide();

// Next/previous controls
function plusSlides(n) {
    clearInterval(slideInterval);
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    clearInterval(slideInterval);
    showSlides(slideIndex = n);
    if (n === 1) { // If "Home" is clicked (assuming it's the first slide)
        startAutoSlide();
    } else {
        isPaused = true; // Pause auto-sliding if other buttons are clicked
    }
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Start auto-slide with a 5-second interval
function startAutoSlide() {
    isPaused = false; // Reset the paused state
    slideInterval = setInterval(() => {
        if (!isPaused) {
            plusSlides(1);
        }
    }, 5000); // Change slide every 5 seconds
}

// Pause auto-slide if a button is clicked
function pauseSlideShow() {
    clearInterval(slideInterval);
}

// Resume the slideshow and start from the first slide
function resetSlideShow() {
    slideIndex = 1;
    showSlides(slideIndex);
    startAutoSlide();
}

// Typewriter effect
const text = "Software Development!";
let i = 0;
let isDeleting = false;
const typingSpeed = 150;  // Typing speed (in ms)
const deletingSpeed = 100; // Deleting speed (in ms)
const pause = 2000; // Pause after typing and before deleting (in ms)

function typeWriter() {
    const element = document.getElementById("typing-text");

    // Update the text content by either typing or deleting characters
    if (isDeleting) {
        i--;
    } else {
        i++;
    }

    // Set the content of the element
    element.innerHTML = text.substring(0, i);

    // If text is fully typed, pause and start deleting
    if (i === text.length && !isDeleting) {
        setTimeout(() => isDeleting = true, pause); // Pause before deleting
    }

    // If text is fully deleted, pause and start typing again
    if (i === 0 && isDeleting) {
        isDeleting = false;
    }

    // Set the speed based on typing or deleting
    const currentSpeed = isDeleting ? deletingSpeed : typingSpeed;
    setTimeout(typeWriter, currentSpeed);
}

// Start the animation when the page loads
window.onload = () => {
    typeWriter();
    startAutoSlide();
};
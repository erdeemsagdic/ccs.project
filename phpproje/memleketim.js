let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
        dots[i].classList.toggle('active', i === index);
    });
}

document.querySelector('.next-btn').addEventListener('click', () => {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
});

document.querySelector('.prev-btn').addEventListener('click', () => {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        slideIndex = index;
        showSlide(slideIndex);
    });
});

// Add click event listener to each image
slides.forEach(slide => {
    const image = slide.querySelector('.slide-image');
    image.addEventListener('click', () => {
        window.location.href = image.getAttribute('data-url');
    });
});

// Initial display
showSlide(slideIndex);
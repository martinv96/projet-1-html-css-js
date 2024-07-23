

document.addEventListener('DOMContentLoaded', function() {
    


let slideIndex = 0;
showSlides(slideIndex);

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.querySelectorAll('.carousel-images img');
    if (n >= slides.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    }
    let newTransform = `translateX(${-slideIndex * 100}%)`;
    document.querySelector('.carousel-images').style.transform = newTransform;
}

setInterval(() => {
    changeSlide(1);
}, 3000); // Change image every 3 seconds


})
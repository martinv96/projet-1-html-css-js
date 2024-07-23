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


let slideIndex2 = 0;
    showSlides2(slideIndex2);

    function changeSlide2(n) {
        showSlides2(slideIndex2 += n);
    }

    function showSlides2(n) {
        let slides2 = document.querySelectorAll('#carousel2 .carousel-images2 img');
        if (n >= slides2.length) {
            slideIndex2 = 0;
        } else if (n < 0) {
            slideIndex2 = slides2.length - 1;
        }
        let newTransform2 = `translateX(${-slideIndex2 * 717}px)`;
        document.querySelector('#carousel2 .carousel-images2').style.transform = newTransform2;
    }

    document.querySelector('.prev').addEventListener('click', () => {
        changeSlide2(-1);
    });

    document.querySelector('.next').addEventListener('click', () => {
        changeSlide2(1);
    });




})
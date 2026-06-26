// Email copy to clipboard functionality
// Snackbar message display
var snackbarHideTimeoutId = null;

function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
    showEmailCopiedMessage();
}

function showEmailCopiedMessage() {
    var snackbar = document.getElementById("snackbar");

    if (snackbarHideTimeoutId) {
        window.clearTimeout(snackbarHideTimeoutId);
    }

    snackbar.classList.remove("show");
    void snackbar.offsetWidth;
    snackbar.classList.add("show");

    snackbarHideTimeoutId = window.setTimeout(function () {
        snackbar.classList.remove("show");
    }, 2000);
}

// Carousel functionality
// Carousel functionality

document.querySelectorAll(".carousel-container").forEach(initCarousel);

function initCarousel(carousel) {
    carousel.dataset.index = 0;
    showSlides(carousel, 0);
}

function plusSlides(button, n) {
    const carousel = button.closest(".carousel-container");
    let index = Number(carousel.dataset.index);

    showSlides(carousel, index + n);
}

function showSlides(carousel, index) {
    const slides = carousel.querySelectorAll(".carousel-slide");

    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;

    slides.forEach(slide => {
        slide.style.display = "none";
    });

    slides[index].style.display = "block";
    carousel.dataset.index = index;
}
// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// function showSlides(n) {
//     let i;
//     let slides = document.getElementsByClassName("carousel-slide");
//     if (n > slides.length) { slideIndex = 1 }
//     if (n < 1) { slideIndex = slides.length }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slides[slideIndex - 1].style.display = "block";
// }
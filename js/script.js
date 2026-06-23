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
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("carousel");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";

}
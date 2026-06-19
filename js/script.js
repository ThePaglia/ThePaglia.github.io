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
// FOOTER AUTODATE
function getYear() {
    var currentYear = new Date().getFullYear();
    document.getElementById('year').textContent = currentYear;
}

// HEADER HIDE
var scrollValue = 0

function getHeight() {
    if (scrollValue >= document.documentElement.scrollTop)
        {document.getElementById('header').classList.remove("hidden")}
    else
        {document.getElementById('header').classList.add("hidden")}

    scrollValue = document.documentElement.scrollTop; // Actualizamos el valor almacenado al actual
}

window.addEventListener('load', getYear);
window.addEventListener('scroll', getHeight);
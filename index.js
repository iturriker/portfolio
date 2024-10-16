// FOOTER AUTODATE
function getYear() {
    var currentYear = new Date().getFullYear();
    document.getElementById('year').textContent = currentYear;
}

// HEADER HIDE

var scrollValue = 0

function handleHeaderScroll() {
    if (document.documentElement.scrollTop > 0)
        {
            document.getElementById('header').classList.add("hidden");
            document.getElementById('header-button').classList.remove("hidden");
        }
    else
        {
            document.getElementById('header').classList.remove("hidden");
            document.getElementById('header-button').classList.add("hidden");
        }
    
    document.getElementById('header-button').classList.remove("clicked");
    document.getElementById('header').classList.remove("opaque");
    scrollValue = document.documentElement.scrollTop; // Actualizamos el valor almacenado al actual
}

function handleHeaderButtonClick() {
    if (document.getElementById('header-button').classList.contains("clicked"))
        {
            document.getElementById('header-button').classList.remove("clicked");
            document.getElementById('header').classList.add("hidden");
            document.getElementById('header').classList.remove("opaque");
        }
    else
        {
            document.getElementById('header-button').classList.add("clicked");
            document.getElementById('header').classList.remove("hidden");
            document.getElementById('header').classList.add("opaque");
        }
}

window.addEventListener('load', getYear);
window.addEventListener('scroll', handleHeaderScroll);
document.getElementById('header-button').addEventListener('click', handleHeaderButtonClick);
document.getElementById('header-button').classList.add("hidden");
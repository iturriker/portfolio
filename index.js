// FOOTER AUTODATE
function getYear() {
    var currentYear = new Date().getFullYear();
    document.getElementById('year').textContent = currentYear;
}

// HEADER HIDE

var scrollValue = 0

function tryShowHeaderNavByScroll() {
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

    if (scrollValue >= document.documentElement.scrollTop)
        {
            document.getElementById('header-button').classList.remove("clicked");
        }
    else
        {
            document.getElementById('header-button').classList.remove("clicked");
        }

    scrollValue = document.documentElement.scrollTop; // Actualizamos el valor almacenado al actual
}

function clickheaderButton() {
    if (document.getElementById('header-button').classList.contains("clicked"))
        {
            document.getElementById('header-button').classList.remove("clicked")
        }
    else
        {
            document.getElementById('header-button').classList.add("clicked")
        }

    if (document.getElementById('header').classList.contains("hidden"))
        {
            document.getElementById('header').classList.remove("hidden")
        }
    else
        {
            document.getElementById('header').classList.add("hidden")
        }

    scrollValue = document.documentElement.scrollTop; // Actualizamos el valor almacenado al actual
}

window.addEventListener('load', getYear);
window.addEventListener('scroll', tryShowHeaderNavByScroll);
document.getElementById('header-button').addEventListener('click', clickheaderButton);
document.getElementById('header-button').classList.add("hidden");
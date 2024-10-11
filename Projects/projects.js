//AUTODATE
function getYear() {
    var currentYear = new Date().getFullYear();
    document.getElementById('year').textContent = currentYear;
}

function getHeight() {
    if (document.documentElement.scrollTop == 0)
        {document.getElementById('header').classList.remove("hidden");}
    else
        {document.getElementById('header').classList.add("hidden")}
}

getYear();
window.addEventListener('scroll', getHeight);
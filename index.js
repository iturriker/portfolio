// FOOTER
function getYear() {
    var currentYear = new Date().getFullYear();
    document.getElementById('year').textContent = currentYear;
}

// HEADER & BURGER BUTTON
var burgerButton = document.getElementById("burger-button");
var header = document.getElementById("header");

function handleHeaderScroll() {
    if (document.documentElement.scrollTop > 0)
        {
            header.classList.add("hidden");
            burgerButton.classList.remove("hidden");
        }
    else
        {
            header.classList.remove("hidden");
            burgerButton.classList.add("hidden");
        }
    
    burgerButton.classList.remove("active");
    header.classList.remove("opaque");
}

function handleBurgerButtonClick() {
    if (burgerButton.classList.contains("active"))
        {
            burgerButton.classList.remove("active");
            header.classList.add("hidden");
            header.classList.remove("opaque");
        }
    else
        {
            burgerButton.classList.add("active");
            header.classList.remove("hidden");
            header.classList.add("opaque");
        }
}

// EVENTS
window.addEventListener('load', getYear);
window.addEventListener('scroll', handleHeaderScroll);
burgerButton.addEventListener('click', handleBurgerButtonClick);
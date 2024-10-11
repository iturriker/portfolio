//AUTODATE
function getYear() {
    var currentYear = new Date().getFullYear();
    document.getElementById('year').textContent = currentYear;
}

var currentIndex = 0;

function navigate(direction) {
    const galleryContainer = document.querySelector('.image-gallery-container');
    const totalImages = document.querySelectorAll('.image-gallery-item').length;
    
    currentIndex = (currentIndex + direction + totalImages) % totalImages;
    const offset = -currentIndex * 100;
    
    galleryContainer.style.transform = `translateX(${offset}%)`;
}

function getHeight() {
    if (document.documentElement.scrollTop == 0)
        {document.getElementById('header').classList.remove("hidden");}
    else
        {document.getElementById('header').classList.add("hidden")}
}

//AUTOPLAY
var autoplayInterval = 1;

function startAutoplay(interval) {
    stopAutoplay();  // Detiene cualquier autoplay anterior para evitar múltiples intervalos.
    autoplayInterval = setInterval(() => {navigate(1)}, interval);
}

function stopAutoplay() {
    clearInterval(autoplayInterval);
}

getYear();
startAutoplay(2000);
window.addEventListener('scroll', getHeight);
document.querySelector('.prev-button').addEventListener('click', () => {navigate(-1)});
document.querySelector('.next-button').addEventListener('click', () => {navigate(1)});
// Detener autoplay cuando el usuario interactúa con los botones de navegación.
document.querySelectorAll('.nav-button').forEach(button => {button.addEventListener('click', stopAutoplay)});
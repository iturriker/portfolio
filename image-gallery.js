var currentIndex = 0;

function navigate(direction) {
    const galleryContainer = document.querySelector('.image-gallery-container');
    const totalImages = document.querySelectorAll('.image-gallery-item').length;
    
    currentIndex = (currentIndex + direction + totalImages) % totalImages;
    const offset = -currentIndex * 100;
    
    galleryContainer.style.transform = `translateX(${offset}%)`;
}

// AUTOPLAY GALLERY
var autoplayInterval = 1;

function startAutoplay(interval) {
    stopAutoplay();  // Detiene cualquier autoplay anterior para evitar múltiples intervalos.
    autoplayInterval = setInterval(() => {navigate(1)}, interval);
}

function stopAutoplay() {
    clearInterval(autoplayInterval);
}

startAutoplay(2000);
document.querySelector('.prev-button').addEventListener('click', () => {navigate(-1)});
document.querySelector('.next-button').addEventListener('click', () => {navigate(1)});
// Detener autoplay cuando el usuario interactúa con los botones de navegación.
document.querySelectorAll('.nav-button').forEach(button => {button.addEventListener('click', stopAutoplay)});
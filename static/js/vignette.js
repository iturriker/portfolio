const vignettes = document.querySelectorAll('.vignette');

window.addEventListener('scroll', () => {
    vignettes.forEach(vignette => {
        const title = vignette.querySelector('.vignette-title');
        const vignetteRect = vignette.getBoundingClientRect();

        if (vignetteRect.top < -1)
        {
            title.classList.add('collapse');
        }
        else
        {
            title.classList.remove('collapse');
        }
    });
});
const vignettes = document.querySelectorAll('.vignette');

window.addEventListener('scroll', () => {
    vignettes.forEach(vignette => {
        const mask = vignette.querySelector('.h2-mask');
        const vignetteRect = vignette.getBoundingClientRect();

        if (vignetteRect.top < -1)
        {
            mask.classList.add('collapse');
        }
        else
        {
            mask.classList.remove('collapse');
        }
    });
});
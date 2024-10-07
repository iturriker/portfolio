function blendColors(color1, color2, percentage) {
    var color1Components = color1.match(/\d+/g).map(Number);
    var color2Components = color2.match(/\d+/g).map(Number);

    var blendedColor = color1Components.map(function(component, index) {
        return Math.round(component + (color2Components[index] - component) * percentage);
    });

    return `rgb(${blendedColor[0]}, ${blendedColor[1]}, ${blendedColor[2]})`;
}

function getScrollHeight() {
    var height = window.scrollY || document.documentElement.scrollTop;
    var totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrollPercentage = height / totalHeight;

    var startColor = "rgb(255, 255, 255)"; // Blanco
    var endColor = "rgb(0, 0, 128)"; // Verde

    var blendedColor = blendColors(startColor, endColor, scrollPercentage);
    document.body.style.backgroundColor = blendedColor;
}

function getYear() {
    var currentYear = new Date().getFullYear();
    document.getElementById('year').textContent = currentYear;
}

getYear();
window.addEventListener('scroll', getScrollHeight);
const svgs = document.querySelectorAll("svg.lines");

let time = 0;

function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

svgs.forEach(svg => {
    const viewBox = svg.getAttribute("viewBox").split(" ").map(Number);
    const minY = viewBox[1];
    const maxY = viewBox[1] + viewBox[3];

    const waves = svg.querySelectorAll("path");

    waves.forEach(wave => {
        const d = wave.getAttribute("d");
        const match = d.match(/M\s*([\d.-]+)\s*([\d.-]+)\s*C\s*([\d.-]+)\s*([\d.-]+),\s*([\d.-]+)\s*([\d.-]+),\s*([\d.-]+)\s*([\d.-]+)/);
        if (!match) return;

        wave.start = [Number(match[1]), Number(match[2])];   // punto inicial
        wave.points = match.slice(3).map(Number);            // puntos de control
        wave.amplitude = Math.random() * 20 + 20;            // amplitud de oscilación
        wave.frequency = Math.random() * 0.25 + 0.5;         // frecuencia
        wave.minY = minY;                                    // guardar límites
        wave.maxY = maxY;
    });
});

function animateWaves() {
    time += 0.02;

    svgs.forEach(svg => {
        const waves = svg.querySelectorAll("path");

        waves.forEach(wave => {
            let y0 = wave.start[1] + Math.sin(time * wave.frequency * 0.85) * wave.amplitude;
            let y1 = wave.points[1] + Math.sin(time * wave.frequency) * wave.amplitude;
            let y2 = wave.points[3] + Math.cos(time * wave.frequency * 1.3) * wave.amplitude;
            let y3 = wave.points[5] + Math.sin(time * wave.frequency * 0.7) * wave.amplitude;

            // Clamp con minY / maxY propios
            y0 = clamp(y0, wave.minY, wave.maxY);
            y1 = clamp(y1, wave.minY, wave.maxY);
            y2 = clamp(y2, wave.minY, wave.maxY);
            y3 = clamp(y3, wave.minY, wave.maxY);

            const d = `M${wave.start[0]} ${y0} C${wave.points[0]} ${y1}, ${wave.points[2]} ${y2}, ${wave.points[4]} ${y3}`;
            wave.setAttribute("d", d);
        });
    });

    requestAnimationFrame(animateWaves);
}

animateWaves();
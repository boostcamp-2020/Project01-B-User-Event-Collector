function getRandomHex() {
    return Math.floor(Math.random() * 255).toString(16);
}

function getRandomColor() {
    const r = getRandomHex().padStart(2, '0');
    const g = getRandomHex().padStart(2, '0');
    const b = getRandomHex().padStart(2, '0');
    return `#${r}${g}${b}`;
}

export { getRandomColor };

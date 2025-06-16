const poemText = `Like stars that shine in darkest night,
Your love fills me with pure delight.
Through storms and sun, through joy and pain,
My heart for you shall ever remain.`;

const typewriter = document.getElementById('poem-text');
let charIndex = 0;

function typeWriter() {
    if (charIndex < poemText.length) {
        typewriter.textContent += poemText.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 100);
    }
}

// Start the typewriter effect when page loads
window.onload = typeWriter;

// Add click event to restart animation
document.querySelector('.poem').addEventListener('click', () => {
    typewriter.textContent = '';
    charIndex = 0;
    typeWriter();
});

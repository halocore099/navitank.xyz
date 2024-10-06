// Wait for initial blur animation
setTimeout(() => {
    initializeStars();
}, 500); // Start creating stars after a slight delay

function initializeStars() {
    // Create stars
    function createStar() {
        const star = document.createElement('div');
        star.className = 'star';
    
        // Random size between 2 and 6 pixels (increased max size)
        const size = Math.random() * 4 + 2;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
    
        // Random position
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
    
        // Add twinkling animation
        const animationDuration = Math.random() * 3 + 2; // Between 2 and 5 seconds
        star.style.animation = `fadeIn 1.5s ease-out forwards, twinkle ${animationDuration}s ease-in-out infinite`;
    
        document.getElementById('stars-container').appendChild(star);
    
        // Animate star movement
        let yPos = parseFloat(star.style.top);
        setInterval(() => {
            yPos -= 0.05;
            if (yPos < -5) {
                yPos = 105;
                star.style.left = `${Math.random() * 100}%`;
            }
            star.style.top = `${yPos}%`;
        }, 50);
    
        return star;
    }
    // Create initial stars
    for (let i = 0; i < 100; i++) {
        createStar();
    }

    // Add new stars periodically
    setInterval(() => {
        if (document.getElementsByClassName('star').length < 150) {
            createStar();
        }
    }, 1000);
}

// Parallax effect
document.addEventListener('mousemove', (e) => {
    const container = document.getElementById('stars-container');
    const stars = document.getElementsByClassName('star');
    
    const mouseX = (e.clientX / window.innerWidth - 0.5) * 20;
    const mouseY = (e.clientY / window.innerHeight - 0.5) * 20;

    for (let star of stars) {
        const depth = Math.random() * 0.5 + 0.5;
        const translateX = mouseX * depth;
        const translateY = mouseY * depth;
        star.style.transform = `translate(${translateX}px, ${translateY}px)`;
    }
});
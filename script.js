
setTimeout(() => {
    initializeStars();
}, 500); 

function initializeStars() {
    // Create stars
    function createStar() {
        const star = document.createElement('div');
        star.className = 'star';
    
        const size = Math.random() * 4 + 2;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
    

        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
    
   
        const animationDuration = Math.random() * 3 + 2; // 
        star.style.animation = `fadeIn 1.5s ease-out forwards, twinkle ${animationDuration}s ease-in-out infinite`;
    
        document.getElementById('stars-container').appendChild(star);

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
  
    for (let i = 0; i < 100; i++) {
        createStar();
    }

    setInterval(() => {
        if (document.getElementsByClassName('star').length < 150) {
            createStar();
        }
    }, 1000);
}

// Add event listener for go back button
document.getElementById('go-back-button').addEventListener('click', () => {
    window.open('https://navitank.xyz', '_blank');
});

// Add event listener for no hello link
document.getElementById('no-hello-link').addEventListener('click', () => {
    window.open('https://navitank.xyz/nohello', '_blank');
});



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


const buttons = document.querySelectorAll('.social-button');

buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.1)';
    });

    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
    });
});

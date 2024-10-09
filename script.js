document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('bgVideo');
    const dropdownBtn = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');
    const tiltElement = document.querySelector('.tilt-effect');
    
    function adjustVideoSize() {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const videoRatio = video.videoWidth / video.videoHeight;
        const windowRatio = windowWidth / windowHeight;

        if (windowRatio > videoRatio) {
            video.style.width = '100%';
            video.style.height = 'auto';
        } else {
            video.style.width = 'auto';
            video.style.height = '100%';
        }
    }

    video.addEventListener('loadedmetadata', adjustVideoSize);
    window.addEventListener('resize', adjustVideoSize);

    // Add this function to restart the video when it ends
    function restartVideo() {
        video.currentTime = 0;
        video.play();
    }

    video.addEventListener('ended', restartVideo);

    // Toggle dropdown on click
    dropdownBtn.addEventListener('click', function() {
        dropdownContent.classList.toggle('show');
    });

    // Close dropdown when clicking outside
    window.addEventListener('click', function(event) {
        if (!event.target.matches('.dropbtn')) {
            if (dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
            }
        }
    });

    // More intense tilt effect
    tiltElement.addEventListener('mousemove', function(e) {
        const tiltMax = 15; // Increased from 5 to 15 for more intensity
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const tiltX = (x - centerX) / centerX * tiltMax;
        const tiltY = (y - centerY) / centerY * tiltMax;
        
        this.style.transform = `perspective(1000px) rotateX(${-tiltY}deg) rotateY(${tiltX}deg) scale(1.05)`;
    });

    tiltElement.addEventListener('mouseleave', function() {
        this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
});
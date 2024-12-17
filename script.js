document.addEventListener('DOMContentLoaded', function() {
    const dropdownBtn = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');
    const tiltElement = document.querySelector('.tilt-effect');

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

    // Tilt effect
    tiltElement.addEventListener('mousemove', function(e) {
        const tiltMax = 15;
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

    // Mute toggle functionality
    const video = document.getElementById('bgVideo');
    const muteButton = document.getElementById('muteToggle');
    
    function updateMuteButton() {
        const muteIcon = muteButton.querySelector('i');
        if (muteIcon) {
            muteIcon.className = video.muted ? 'fas fa-volume-mute' : 'fas fa-volume-up';
        }
    }

    muteButton.addEventListener('click', function() {
        video.muted = !video.muted;
        updateMuteButton();
    });

    document.addEventListener('click', function() {
        if (video.muted) {
            video.muted = false;
            updateMuteButton();
        }
    }, { once: true });
});

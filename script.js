document.addEventListener('DOMContentLoaded', function() {
    console.log('ZD4>?Ttc@7Ejxt4L+~2FGh1pM=]5#?JQaawzMu!Z]WZ^X%5=WNV=iFyxsNgF%t@u!rLe>EZ^iUxwZ6?+CyJXJHc2Xyyx!bvAxYko');
    console.log('Well let me tell you something... you will never find out what this does neither will you ever know.\n Try all u want but you will fail.\n Stress and anxiety will take over your body as you grasp for the answer on your last breath.\n You die... in pain, as you wish you would have done something else in your life.......')
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

    // Add this new code for mute toggle functionality
    const video = document.getElementById('bgVideo');
    const muteButton = document.getElementById('muteToggle');
    
    function updateMuteButton() {
        muteButton.querySelector('.mute-icon').textContent = video.muted ? '🔈' : '🔊';
    }

    muteButton.addEventListener('click', function() {
        video.muted = !video.muted;
        updateMuteButton();
    });

    // Try to unmute video after a user interaction
    document.addEventListener('click', function() {
        if (video.muted) {
            video.muted = false;
            updateMuteButton();
        }
    }, { once: true });
});

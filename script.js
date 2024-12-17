document.addEventListener('DOMContentLoaded', function() {
    const dropdownBtn = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');
    const tiltElement = document.querySelector('.tilt-effect');
    const DISCORD_ID = '529476730088587314';

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

    async function updateDiscordStatus() {
        const response = await fetch(`https://api.lanyard.rest/v1/users/${DISCORD_ID}`);
        const data = await response.json();
        
        const avatar = document.getElementById('discord-avatar');
        const username = document.getElementById('discord-username');
        const activity = document.getElementById('discord-activity');
        
        avatar.src = `https://cdn.discordapp.com/avatars/${DISCORD_ID}/${data.data.discord_user.avatar}`;
        username.textContent = `${data.data.discord_user.username}#${data.data.discord_user.discriminator}`;
        
        if (data.data.activities.length > 0) {
            activity.textContent = `Playing ${data.data.activities[0].name}`;
        } else {
            activity.textContent = 'Online';
        }
    }
    
    updateDiscordStatus();
    setInterval(updateDiscordStatus, 30000);
    
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

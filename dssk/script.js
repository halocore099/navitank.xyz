// Core encryption/decryption functions remain the same
const encryptString = (str) => {
    return btoa(str.split('').map(char => 
        String.fromCharCode(char.charCodeAt(0) + 5)
    ).join(''));
};

const decryptString = (str) => {
    return atob(str).split('').map(char =>
        String.fromCharCode(char.charCodeAt(0) - 5)
    ).join('');
};

// Constants
const PASSWORD = encryptString("Lightthecampfire");
const SECRET_KEY = encryptString("ZD4>?Ttc@7Ejxt4L+~2FGh1pM=]5#?JQaawzMu!Z]WZ^X%5=WNV=iFyxsNgF%t@u!rLe>EZ^iUxwZ6?+CyJXJHc2Xyyx!bvAxYko");

// Commands
const COMMANDS = {
    'home': 'https://navitank.xyz/',
    'exit': null, // Will be handled specially
    'naviguard': 'https://naviguard.navitank.xyz/',
    'nohello': 'https://navitank.xyz/nohello',
    'help': null // Will be handled specially
};

// Dark Souls themed quotes remain the same
const FAILURE_QUOTES = [/* ... previous quotes ... */];
const SUCCESS_QUOTE = "Ahh, you were at my side all along. My true mentor... My guiding moonlight...";

// Help message
const HELP_MESSAGE = `
Available commands:
- home: Go to NaviTank homepage
- exit: Return to previous page
- naviguard: Go to NaviGuard
- nohello: Learn about proper chat etiquette
- help: Show this message
`;

input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const userInput = input.value.toLowerCase().trim();
        input.value = '';
        
        // Handle commands
        if (COMMANDS.hasOwnProperty(userInput)) {
            if (userInput === 'help') {
                output.innerHTML = `<div style="color: #00ff00">${HELP_MESSAGE}</div>`;
                return;
            }
            if (userInput === 'exit') {
                window.history.back();
                return;
            }
            window.location.href = COMMANDS[userInput];
            return;
        }
        
        // Handle password check
        if (userInput === decryptString(PASSWORD)) {
            output.innerHTML = `<div style="color: #ffffff">
                ${SUCCESS_QUOTE}<br><br>
                SECRET KEY: ${decryptString(SECRET_KEY)}
            </div>`;
        } else {
            const randomQuote = FAILURE_QUOTES[Math.floor(Math.random() * FAILURE_QUOTES.length)];
            output.innerHTML = `<div style="color: #808080">${randomQuote}</div>`;
        }
    }
});

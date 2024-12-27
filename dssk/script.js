// Ensure input and output elements are selected correctly
const input = document.querySelector('input'); // Make sure this matches your input element
const output = document.querySelector('#output'); // Ensure this is your output element's ID

// Encryption and Decryption functions
const encryptString = (str) => btoa(str.split('').map(char => 
    String.fromCharCode(char.charCodeAt(0) + 5)
).join(''));

const decryptString = (str) => atob(str).split('').map(char =>
    String.fromCharCode(char.charCodeAt(0) - 5)
).join('');

// Encrypted password and secret key
const PASSWORD = encryptString("Lightthecampfire");
const SECRET_KEY = encryptString("ZD4>?Ttc@7Ejxt4L+~2FGh1pM=]5#?JQaawzMu!Z]WZ^X%5=WNV=iFyxsNgF%t@u!rLe>EZ^iUxwZ6?+CyJXJHc2Xyyx!bvAxYko");

// Helper function to update the output element
const updateOutput = (message, color = '#ffffff') => {
    output.innerHTML = `<div style="color: ${color}">${message}</div>`;
};

// Command mappings
const COMMANDS = {
    'home': 'https://navitank.xyz/',
    'exit': null,
    'naviguard': 'https://naviguard.navitank.xyz/',
    'nohello': 'https://navitank.xyz/nohello',
    'help': null
};

// Failure quotes array
const FAILURE_QUOTES = [
    "Bearer... Seek souls. Larger, more powerful souls. Seek the King, that is the only way. Lest this land swallow you whole... As it has so many others.",
    "Life is brilliant. Beautiful. It enchants us, to the point of obsession. Some are true to their purpose, though they are but shells, flesh, and mind.",
    "Many monarchs have come and gone. One drowned in poison, another succumbed to flame. Still another slumbers in a realm of ice.",
    "The First Flame quickly fades. Darkness will shortly settle. But one day, tiny flames will dance across the darkness.",
    "You shall never know what this means, for the truth is buried in the depths of despair. Seek it if you must, but remember — the journey will only bring suffering. The path you choose will lead to madness, for some truths are best left unseen. Your soul will be the price for knowledge, and in the end, you shall wish you never sought the light.",
    "I may be small, but I will die a colossus."
];

// Success quote
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

// Event listener for the input element
input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const userInput = input.value.trim(); // Remove trim().toLowerCase() to keep original case
        input.value = '';
        
        // Command handling
        if (COMMANDS.hasOwnProperty(userInput.toLowerCase())) {
            if (userInput.toLowerCase() === 'help') {
                updateOutput(HELP_MESSAGE, '#00ff00');
                return;
            }
            if (userInput.toLowerCase() === 'exit') {
                window.history.back();
                return;
            }
            window.location.href = COMMANDS[userInput.toLowerCase()];
            return;
        }
        
        // Password check - compare with original case
        if (userInput === decryptString(PASSWORD)) {
            output.innerHTML = `<div style="color: #00ff00">
                ${SUCCESS_QUOTE}
                <br><br>
                SECRET KEY: ${decryptString(SECRET_KEY)}
            </div>`;
        } else {
            const randomQuote = FAILURE_QUOTES[Math.floor(Math.random() * FAILURE_QUOTES.length)];
            updateOutput(randomQuote, '#808080');
        }
    }
});

const encryptString = (str) => btoa(str.split('').map(char => 
    String.fromCharCode(char.charCodeAt(0) + 5)
).join(''));

const decryptString = (str) => atob(str).split('').map(char =>
    String.fromCharCode(char.charCodeAt(0) - 5)
).join('');

const PASSWORD = encryptString("Lightthecampfire");
const SECRET_KEY = encryptString("ZD4>?Ttc@7Ejxt4L+~2FGh1pM=]5#?JQaawzMu!Z]WZ^X%5=WNV=iFyxsNgF%t@u!rLe>EZ^iUxwZ6?+CyJXJHc2Xyyx!bvAxYko");

const COMMANDS = {
    'home': 'https://navitank.xyz/',
    'exit': null,
    'naviguard': 'https://naviguard.navitank.xyz/',
    'nohello': 'https://navitank.xyz/nohello',
    'help': null
};

const FAILURE_QUOTES = [
    "Bearer... Seek souls. Larger, more powerful souls. Seek the King, that is the only way. Lest this land swallow you whole... As it has so many others.",
    "Life is brilliant. Beautiful. It enchants us, to the point of obsession. Some are true to their purpose, though they are but shells, flesh, and mind.",
    "Many monarchs have come and gone. One drowned in poison, another succumbed to flame. Still another slumbers in a realm of ice.",
    "The First Flame quickly fades. Darkness will shortly settle. But one day, tiny flames will dance across the darkness.",
    "You shall never know what this means, for the truth is buried in the depths of despair. Seek it if you must, but remember — the journey will only bring suffering. The path you choose will lead to madness, for some truths are best left unseen. Your soul will be the price for knowledge, and in the end, you shall wish you never sought the light.",
    "I may be small, but I will die a colossus."
];

const SUCCESS_QUOTE = "Ahh, you were at my side all along. My true mentor... My guiding moonlight...";
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
        
        if (COMMANDS.hasOwnProperty(userInput)) {
            if (userInput === 'help') {
                updateOutput(HELP_MESSAGE, '#00ff00');
                return;
            }
            if (userInput === 'exit') {
                window.history.back();
                return;
            }
            window.location.href = COMMANDS[userInput];
            return;
        }
        
        if (userInput === decryptString(PASSWORD)) {
            updateOutput(`${SUCCESS_QUOTE}<br><br>SECRET KEY: ${decryptString(SECRET_KEY)}`);
        } else {
            const randomQuote = FAILURE_QUOTES[Math.floor(Math.random() * FAILURE_QUOTES.length)];
            updateOutput(randomQuote, '#808080');
        }
    }
});

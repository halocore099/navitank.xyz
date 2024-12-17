const encryptString = (str) => {
    return btoa(str.split('').map((char) => 
        String.fromCharCode(char.charCodeAt(0) + 5)
    ).join(''));
};

const decryptString = (str) => {
    return atob(str).split('').map((char) =>
        String.fromCharCode(char.charCodeAt(0) - 5)
    ).join('');
};

const PASSWORD = encryptString("Lightthecampfire");
const SECRET_KEY = encryptString("ZD4>?Ttc@7Ejxt4L+~2FGh1pM=]5#?JQaawzMu!Z]WZ^X%5=WNV=iFyxsNgF%t@u!rLe>EZ^iUxwZ6?+CyJXJHc2Xyyx!bvAxYko");

const FAILURE_QUOTES = [
    "Bearer... Seek souls. Larger, more powerful souls. Seek the King, that is the only way. Lest this land swallow you whole... As it has so many others.",
    "Many monarchs have come and gone. One drowned in poison, another succumbed to flame. Still another slumbers in a realm of ice.",
    "Life is brilliant. Beautiful. It enchants us, to the point of obsession. Some are true to their purpose, though they are but shells, flesh and mind.",
    "I may be small, but I will die a colossus.",
    "The First Flame quickly fades. Darkness will shortly settle. But one day, tiny flames will dance across the darkness.",
    "Ahh, you were at my side all along. My true mentor... My guiding moonlight..."
];

const SUCCESS_QUOTE = "You shall never know what this means, for the truth is buried in the depths of despair. Seek it if you must, but remember — the journey will only bring suffering. The path you choose will lead to madness, for some truths are best left unseen. Your soul will be the price for knowledge, and in the end, you shall wish you never sought the light.";

input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const attempt = input.value;
        input.value = '';

        if (attempt === decryptString(PASSWORD)) {
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

const headingText = "404 Not Found Welcome to the VOID\n";

const text = `\nSeems like you've taken a wrong turn. go back and try again.
`;

let i = 0;
let j = 0;
const speed = 75; // typing speed in milliseconds

function typeHeading() {
    if (j < headingText.length) {
        document.getElementById("heading").innerHTML += headingText.charAt(j);
        j++;
        setTimeout(typeHeading, speed);
    } else {
        typeWriter();
    }
}

function typeWriter() {
    let target = document.getElementById("typing-text");
    if (i < text.length) {
        // Insert each character or chunk of HTML
        if (text.substring(i, i + 6) === '<span ') {
            let spanEnd = text.indexOf('</span>', i) + 7;
            target.innerHTML += text.substring(i, spanEnd);
            i = spanEnd;
        } else {
            target.innerHTML += text.charAt(i);
            i++;
        }
        setTimeout(typeWriter, speed);
    } else {
        // Stop cursor blinking after typing finishes
        document.querySelector('.typewriter-text').style.borderRight = 'none';
        // Add Go Back link after typing is done
        addGoBackLink();
    }
}

function addGoBackLink() {
    setTimeout(() => {
        const link = document.createElement('span');
        link.innerText = 'Go Back';
        link.style.color = 'white'; // White text color
        link.style.cursor = 'pointer'; // Change cursor to pointer
        link.style.marginTop = '20px';
        link.style.fontSize = '0.8rem'; // Make the text smaller
        link.onclick = function () {
            window.history.back();
        };
        document.getElementById("typing-text").appendChild(link);

        // Call function to add the second button after 15 seconds
        ;
    }, 1500);
}



window.onload = typeHeading;

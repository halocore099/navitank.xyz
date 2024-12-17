const headingText = "404 Not Found Welcome to the VOID\n";
const text = `\nSeems like you've taken a wrong turn. Go back and try again.\n`;

let i = 0;
let j = 0;
const speed = 75;

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
        document.querySelector('.typewriter-text').style.borderRight = 'none';
        addGoBackLink();
    }
}

function addGoBackLink() {
    setTimeout(() => {
        const link = document.createElement('span');
        link.innerText = 'Go Back';
        link.style.color = 'white';
        link.style.cursor = 'pointer';
        link.style.marginTop = '20px';
        link.style.fontSize = '0.8rem';
        link.onclick = function() {
            window.history.back();
        };
        document.getElementById("typing-text").appendChild(link);
        
        setTimeout(() => {
            const waiting = document.createElement('div');
            waiting.innerText = 'What are you still doing here?';
            waiting.style.color = '#666';
            waiting.style.marginTop = '20px';
            document.getElementById("typing-text").appendChild(waiting);
            
            setTimeout(() => {
                const confused = document.createElement('div');
                confused.innerText = "I dont understand the point of sitting here...";
                confused.style.color = '#444';
                confused.style.marginTop = '20px';
                document.getElementById("typing-text").appendChild(confused);
                
                setTimeout(() => {
                    const secretBtn = document.createElement('button');
                    secretBtn.innerText = "Am I real?";
                    secretBtn.style.background = 'transparent';
                    secretBtn.style.border = '1px solid #333';
                    secretBtn.style.color = '#333';
                    secretBtn.style.padding = '5px 10px';
                    secretBtn.style.cursor = 'pointer';
                    secretBtn.onclick = function() {
                        console.log('navitank.xyz/dssk/');
                    };
                    document.getElementById("typing-text").appendChild(secretBtn);
                }, 15000);
            }, 10000);
        }, 30000);
    }, 1500);
}

window.onload = typeHeading;
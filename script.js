const texts = [
    "Hello, My Name Is Raman Raj Singh",
    "I am an AI & Data Science student",
    "I love working on Machine Learning projects"
];
const textContainer = document.querySelector(".about"); // Selects the text container
const aboutLink = document.getElementById("about-link"); // Selects the "About" link

let lineIndex = 0;
let charIndex = 0;
let isTyping = false; // To prevent multiple clicks from interfering

function typeEffect() {
    if (isTyping) return; // Prevent multiple clicks from overlapping the effect
    isTyping = true; // Lock function while typing effect is running

    lineIndex = 0;
    charIndex = 0;
    textContainer.innerHTML = ""; // Clear previous text

    function typeLine() {
        if (lineIndex < texts.length) {
            if (charIndex === 0) {
                textContainer.innerHTML = ""; // Clear previous line
            }

            if (charIndex < texts[lineIndex].length) {
                textContainer.innerHTML += texts[lineIndex][charIndex];
                charIndex++;
                setTimeout(typeLine, 100); // Typing speed
            } else {
                setTimeout(() => {
                    charIndex = 0;
                    lineIndex++;
                    typeLine();
                }, 1000); // Delay before next line starts
            }
        } else {
            isTyping = false; // Unlock function after all lines are typed
        }
    }

    typeLine(); // Start typing effect
}

// Run typing effect when the page loads
typeEffect();

// Add click event to the "About" link
aboutLink.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent the default anchor behavior (jumping to #)
    typeEffect(); // Restart typing effect
});

document.addEventListener('DOMContentLoaded', function () {
    const track = document.querySelector('.carousel-track');
    const images = Array.from(track.children);
    images.forEach(image => {
        const clone = image.cloneNode(true);
        track.appendChild(clone);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const tabs = document.getElementById('nav-tabs');

    hamburger.addEventListener('click', function () {
        tabs.classList.toggle('active');
    });
});

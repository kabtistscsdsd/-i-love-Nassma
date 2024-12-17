// Code Verification
const correctCode = "84";
const loginContainer = document.getElementById('login-container');
const finalMessageContainer = document.getElementById('final-message');
const codeInput = document.getElementById('code-input');
const submitButton = document.getElementById('submit-code');
const errorMessage = document.getElementById('error-message');

// Background Word Display
const backgroundWord = document.getElementById('background-word');
const words = ["Love", "Joy", "Happiness", "Forever", "Beautiful"];
let wordIndex = 0;

// Event Listener for Code Submission
submitButton.addEventListener('click', () => {
    const enteredCode = codeInput.value.trim();
    if (enteredCode === correctCode) {
        loginContainer.classList.add('hidden');
        finalMessageContainer.classList.remove('hidden');
        showBackgroundWords();
    } else {
        errorMessage.classList.remove('hidden');
    }
});

// Show Words in the Background Every 10 Seconds
function showBackgroundWords() {
    setInterval(() => {
        backgroundWord.textContent = words[wordIndex];
        backgroundWord.style.opacity = 1;

        setTimeout(() => {
            backgroundWord.style.opacity = 0;
        }, 8000); // Fade out after 8 seconds

        wordIndex = (wordIndex + 1) % words.length; // Cycle through words
    }, 10000); // Change word every 10 seconds
}

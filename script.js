let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessCount = 0;

function checkGuess() {
    const userGuess = document.getElementById('userGuess').value;
    const feedback = document.getElementById('feedback');

    if (!userGuess) {
        feedback.textContent = "Please enter a number!";
        return;
    }

    guessCount++;

    if (userGuess == randomNumber) {
        feedback.textContent = `🎉 Correct! You guessed it in ${guessCount} tries.`;
        feedback.style.color = '#4caf50';
        document.getElementById('reset-btn').style.display = 'block';
    } else if (userGuess < randomNumber) {
        feedback.textContent = "📉 Too low! Try again.";
        feedback.style.color = '#ffeb3b';
    } else {
        feedback.textContent = "📈 Too high! Try again.";
        feedback.style.color = '#ffeb3b';
    }
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    guessCount = 0;
    document.getElementById('feedback').textContent = "";
    document.getElementById('reset-btn').style.display = 'none';
    document.getElementById('userGuess').value = "";
}

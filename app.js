const game1 = new Hangman('shreyash thakur', 4);

const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');


puzzleEl.textContent = game1.getPuzzle();
guessesEl.textContent = game1.remainingGuesses;




window.addEventListener('keypress', function(event){
    const guess = String.fromCharCode(event.charCode);
    game1.makeGuess(guess);
    puzzleEl.textContent = game1.getPuzzle();
    guessesEl.textContent = game1.remainingGuesses;
    game1.calculateStatus();
    console.log(game1.status);
});

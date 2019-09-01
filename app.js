const game1 = new Hangman('shreyash thakur', 4);

const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');

puzzleEl.textContent = game1.puzzle;
guessesEl.textContent = game1.statusMessage;

getPuzzle((error, puzzle) => {
    if(error){
        console.log("An error occured while fetching the puzzle, ", error);
    }
    else{
        console.log(puzzle);
    }
});



window.addEventListener('keypress', function(event){
    const guess = String.fromCharCode(event.charCode);
    game1.makeGuess(guess);
    puzzleEl.textContent = game1.puzzle;
    guessesEl.textContent = game1.statusMessage;
    game1.calculateStatus();
    console.log(game1.status);
});

let game;
const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');
const resetEl = document.querySelector('#reset');

const startGame = async () => {
    const puzzle = await getPuzzle(4);
    game = new Hangman(puzzle, 5);
    render();
}

const render = () => {
    puzzleEl.textContent = game.puzzle;
    guessesEl.textContent = game.statusMessage;
}

resetEl.addEventListener('click', startGame);


startGame();


window.addEventListener('keypress', function(event){
    const guess = String.fromCharCode(event.charCode);
    game.makeGuess(guess);
    render();
    game.calculateStatus();
    console.log(game.status);
});






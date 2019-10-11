import Hangman from './hangman.js'
import getPuzzle from './request.js'

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
    puzzleEl.innerHTML = '';
    guessesEl.textContent = game.statusMessage;

    game.puzzle.split('').forEach((letter) => {
        const letterEl = document.createElement('span');
        letterEl.textContent = letter;
        puzzleEl.appendChild(letterEl);
    })
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






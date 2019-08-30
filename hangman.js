const Hangman = function(word, remainingGuesses){
    this.word = word.toLowerCase().split('');
    this.remainingGuesses = remainingGuesses;
    this.guessedLetters = [];
}


Hangman.prototype.getPuzzle = function(){
    let puzzle = '';
    this.word.forEach((letter) => {
        if(this.guessedLetters.includes(letter) || letter === ' '){
            puzzle += letter;
        }
        else{
            puzzle += '*';
        }
    });
    return puzzle;
}


Hangman.prototype.makeGuess = function(guess){
    guess = guess.toLowerCase();
    if(!this.guessedLetters.includes(guess)){
        this.guessedLetters.push(guess);
        
        if(!this.word.includes(guess)){
            this.remainingGuesses--;
        }
    }
}


const game1 = new Hangman('shreyash thakur', 4);
console.log(game1.getPuzzle());
console.log(game1.remainingGuesses);


window.addEventListener('keypress', function(event){
    const guess = String.fromCharCode(event.charCode);
    game1.makeGuess(guess);
    console.log(game1.getPuzzle());
    console.log(game1.remainingGuesses);
});


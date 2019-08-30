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




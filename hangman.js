const Hangman = function(word, remainingGuesses){
    this.word = word.toLowerCase().split('');
    this.remainingGuesses = remainingGuesses;
    this.guessedLetters = [];
    this.status = 'playing';
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


Hangman.prototype.calculateStatus = function(){
    const gameCompleted = this.word.join('') === this.getPuzzle();
    if(this.remainingGuesses === 0 && !gameCompleted){
        this.status = 'failed';
    }
    else if(this.remainingGuesses !== 0 && gameCompleted){
        this.status = 'finished';
    }
    else{
        this.status = 'playing';
    }
}


Hangman.prototype.makeGuess = function(guess){
    guess = guess.toLowerCase();
    if(!this.guessedLetters.includes(guess)){
        this.guessedLetters.push(guess);
        
        if(!this.word.includes(guess)){
            this.remainingGuesses--;
        }
    }
    this.calculateStatus();
}





class Hangman {
    constructor(word, remainingGuesses){
        this.word = word.toLowerCase().split('');
        this.remainingGuesses = remainingGuesses;
        this.guessedLetters = [];
        this.status = 'playing';
    }

    getStatusMessage(){
        if(this.status === 'playing'){
            return `Guesses left: ${this.remainingGuesses}`;
        }
        else if(this.status === 'failed'){
            return `Nice try! The word was "${this.word.join('')}"`;
        }
        else{
            return 'Great work! You guessed the word';
        }
    }

    getPuzzle(){
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

    calculateStatus(){
        const gameCompleted = this.word.join('') === this.getPuzzle();
        if(this.remainingGuesses <= 0 && !gameCompleted){
            this.status = 'failed';
        }
        else if(this.remainingGuesses > 0 && gameCompleted){
            this.status = 'finished';
        }
        else{
            this.status = 'playing';
        }
    }

    makeGuess(guess){
        if(this.status !== 'playing') return;
        guess = guess.toLowerCase();
        if(!this.guessedLetters.includes(guess)){
            this.guessedLetters.push(guess);
            
            if(!this.word.includes(guess)){
                this.remainingGuesses--;
            }
        }
        this.calculateStatus();
    }
}


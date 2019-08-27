const Hangman = function(word, remainingGuesses){
    this.word = word.toLowerCase().split('');
    this.remainingGuesses = remainingGuesses;
    this.guessedLetters = ['e', 'o'];
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


const h2 = new Hangman('HellO World', 5);
console.log(h2.getPuzzle());




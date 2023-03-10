function guessTheNumber() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    let computerGuess = Math.floor(Math.random() * 100);
    let guess;

    let recursiveAsyncReadLine = function () {
        readline.question('Gues the number (0-100): ', number => {
            guess = Number(number);
            if (guess <= 100 && guess >= 0) {
                if (guess === computerGuess) {
                    console.log("You guess it!");
                    return readline.close();
                }
                else if (guess < computerGuess) {
                    console.log("Too low!");
                    recursiveAsyncReadLine();
                }
                else if (guess > computerGuess) {
                    console.log("Too high!");
                    recursiveAsyncReadLine();
                }
            } else {
                console.log('Invalid Input! Try again...');
                recursiveAsyncReadLine();
            }

        });
    }
    recursiveAsyncReadLine();
}
guessTheNumber()
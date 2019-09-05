// Create variables with different array names using each letter of the word as its item
var nickelodeon = ["n", "i", "c", "k", "e", "l", "o", "d", "e", "o", "n"];
var whatever = ["w", "h", "a", "t", "e", "v", "e", "r"];
var gameboy = ["g", "a", "m", "e", "b", "o", "y"];
var screenname = ["s", "c", "r", "e", "e", "n", "n", "a", "m", "e"];
var friends = ["f", "r", "i", "e", "n", "d", "s"];
var blockbuster = ["b", "l", "o", "c", "k", "b", "u", "s", "t", "e", "r"];
var britney = ["b", "r", "i", "t", "n", "e", "y"];

//Create other variables that will be used in the game
var Letters = false
var wins = 0;
var guessesLeft = 6;
var words = [nickelodeon, whatever, gameboy, screenname, friends, blockbuster, britney];
var lettersGuessed = [];
var lettersGuessed2 = [];
var answerDisplay = [];
var word

//First function chooses a word from the array at random
function game() {
    var word = words[Math.floor(Math.random() * words.length)];
    var answerArray = [];
    for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }
    var remainingLetters = word.length;


    {
        document.onkeyup = function (event) {


            if ((event.key >= "a") && (event.key <= "z")) {
                var guess = event.key;
            }
            else { event.key = "" };

            if
            ((lettersGuessed.length <= 13) &&
                (guess !== lettersGuessed[" "])) {
                lettersGuessed.push(guess)
            }
            else {
                lettersGuessed2.push(guess)
            };


            for (var j = 0; j < word.length; j++) {
                if
                (word[j] === guess) {
                    answerArray[j] = guess;
                    remainingLetters--;
                    Letters = true;




                }
                else if ((guess != answerArray[0]) && (guess != answerArray[1]) && (guess != answerArray[2]) && (guess != answerArray[3])
                        && (guess != answerArray[4]) && (guess != answerArray[5]) && (guess != answerArray[6]) && (guess != answerArray[7]) && (guess != answerArray[8]))
                        {
                            Letters= false;
                        }
                
            
          
            }
            if ((remainingLetters === 0) && (word === nickelodeon)) {
                alert("Sweet, dude! You got it! It's Nickelodeon.")
                game();
                wins++;
                lettersGuessed = [];
                lettersGuesed2 = [];
                guessesLeft = 6;

            }
            else if ((remainingLetters === 0) && (word === whatever)) {
                alert("Sweet, dude! You got it! It's 'whatever'.");
                wins++;
                game();
                lettersGuessed = [];
                lettersGuessed2 = [];
                guessesLeft = 6;
            }

            else if ((remainingLetters === 0) && (word === gameboy)) {
                alert("Sweet, dude! You got it! It's gameboy.");
                wins++;
                game();
                lettersGuessed = [];
                lettersGuessed2 = [];
                guessesLeft = 6;

            }
            else if ((remainingLetters === 0) && (word === screenname)) {
                alert("Sweet, dude! You got it! It's screenname.");
                wins++;
                game();
                lettersGuessed = [];
                lettersGuessed2 = [];
                guessesLeft = 6;
            }

            else if ((remainingLetters === 0) && (word === friends)) {
                alert("Sweet, dude! You got it! It's friends.");
                wins++;
                game();
                lettersGuessed = [];
                lettersGuessed2 = [];
                guessesLeft = 6;

            }
            else if ((remainingLetters ===0) && (word === blockbuster)) {
                alert("Sweet, dude! You got it! It's blockbuster.");
                wins ++;
                game();
                lettersGuessed = [];
                lettersGuessed2 = [];
                guessesLeft = 6;
            }
            else if ((remainingLetters ===0) && (word === britney)) {
                alert("Sweet, dude! You got it! It's Britney, bitch!");
                wins ++;
                game();
                lettersGuessed = [];
                lettersGuessed2 = [];
                guessesLeft = 6;
            }    

            if (guessesLeft <= 0) {
                alert("As if! Try again, loser");
                game();
                guessesLeft = 6;
                lettersGuessed = [];
                lettersGuessed2 = [];
                
            };
            if (Letters === false) {
                guessesLeft --;
            };


//Return the first element that matches the respective ID
 document.querySelector("#wins").innerHTML = wins;
 document.querySelector("#theWord").innerHTML = answerArray.join("");
 document.querySelector("#guesses").innerHTML = guessesLeft
document.querySelector("#lettersGuessed").innerHTML = lettersGuessed
document.querySelector("#lettersGuessed2").innerHTML = lettersGuessed2
        }
    }
}
game();
var spaceLingo = [
    "black hole",
    "galaxy",
    "supernova",
    "dark matter",
    "eclipse",
    "quasar",
    "spaghettification",
    "exoplant",
];


var livesRemain = 9;
var win = 0;
var loss = 0;

var wrongChoices = [];
var correctGuesses = [];
var phraseGuesses = [];
var numberOfBlanks = "";

var phrases = ""


function startGame() {
    
    phrases = spaceLingo[Math.floor(Math.random() * spaceLingo.length)];
    console.log(phrases);
    
    correctGuesses = phrases.split('');
    console.log(correctGuesses);

    for (var i = 0; i < correctGuesses.length; i++) {

        if (correctGuesses[i] === " ") {
            phraseGuesses.push("&nbsp;");
        }
        else {
            phraseGuesses.push('_');
            numberOfBlanks++;
        }

        document.getElementById('blanks').innerHTML = phraseGuesses

    }

    document.getElementById('blanks').innerHTML = phraseGuesses.join(' ');

}

startGame();



function reset() {
    livesRemain
    wrongChoices
    correctGuesses
    phraseGuesses
    startGame()

};

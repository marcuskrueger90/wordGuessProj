var spaceLingo = [
    "black hole",
    "galaxy",
    "supernova",
    "dark matter",
    "dark matter",
    "quasar",
    "spaghettification",
    "exoplant",
];

correctGuesses = [];
phraseGuesses = [];
numberOfBlanks = "";

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
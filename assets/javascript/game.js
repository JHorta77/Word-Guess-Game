var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var players = ["bergeron", "carlo", "debrusk", "chara", "krug", "krejci", "pastrnak", "marchand", "mcavoy", "rask", "wagner", "miller"];


var gameStarted = false;
var currentWord;
var currentImage;
var wordAsDashes;
var guessesLeft;
var lettersGuessed;
var numWins = 0;
var numLosses = 0;
var getNewWord;
var wordPlace;
var correctGuesses;
var wordAsArr = [];
var dashesArray = [];

function initialize() {
    gameStarted = true;
    lettersGuessed = [];
    correctGuesses = 0;
    wordPlace = Math.floor(Math.random() * 12);
    currentWord = players[wordPlace];
    guessesLeft = 17 - currentWord.length;
    currentImage = playersWithImage[wordPlace].img;
    wordAsDashes = makeIntoDashes(currentWord);
    wordAsArr = currentWord.split('');
    dashesArray = wordAsDashes.split('');
    document.getElementById("currentWord").innerHTML = wordAsDashes;
    document.getElementById("lettersGuessed").innerHTML = "--";
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
}


function makeIntoDashes(word) {
    var dashes = "";
    for (var i = 0; i < word.length - 1; i++) {
        dashes += "_ ";
    }
    dashes += "_";
    return dashes;
}


function playGame(letter) {
    var letter = letter.toLowerCase();


    if (alphabet.indexOf(letter) > -1) {
        if (wordAsArr.indexOf(letter) > -1) {
            correctGuesses++;
            displayLetter(letter);
        }
        else {
            if (lettersGuessed.indexOf(letter) > -1) {
                return;
            }
            else {
                guessesLeft--;
                document.getElementById("guessesLeft").innerHTML = guessesLeft;
                lettersGuessed.push(letter);
                document.getElementById("lettersGuessed").innerHTML = lettersGuessed.join(' ');
                if (guessesLeft == 0) {
                    alert("Sorry! The correct answer is " + currentWord);
                    initialize();
                    numLosses++;
                    document.getElementById("losses").innerHTML = numLosses;
                }
            }
        }
    }
}


function displayLetter(letter) {

    for (var i = 0; i < currentWord.length; i++) {
        if (letter == wordAsArr[i]) {
            dashesArray[i * 2] = letter;
            console.log(dashesArray);
        }
    }
    document.getElementById("currentWord").innerHTML = dashesArray.join("");
    checkForWin();
}


function checkForWin() {
    if (dashesArray.indexOf("_") === -1) {
        alert("You got it! The correct answer is " + currentWord);
        numWins++;
        document.getElementById("wins").innerHTML = numWins;
        initialize();
    }
}

document.onkeyup = function (event) {
    if (!gameStarted) {
        document.getElementById("letsPlay").innerHTML = "";
        initialize();
        document.getElementById("currentWord").innerHTML = wordAsDashes.split(",");
        console.log(currentWord);
        gameStarted = true;
    }
    else {
        playGame(event.key);
    }
}

var playersWithImage = [
    {
        name: "bergeron",
        img: "./assets/images/Bergy.jpg"
    },
    {
        name: "chara",
        img: "./assets/images/Big Z.jpg"
    }, {
        name: "mcavoy",
        img: "./assets/images/Charlie+McAoy.jpg"
    }, {
        name: "wagner",
        img: "./assets/images/chris-wagner.jpg"
    }, {
        name: "debrusk",
        img: "./assets/images/debrusk.jpg"
    }, {
        name: "miller",
        img: "./assets/images/kevan-miller.jpg"
    }, {
        name: "krejci",
        img: "./assets/images/Krejci.jpg"
    }, {
        name: "krug",
        img: "./assets/images/krug.jpg"
    }, {
        name: "marchand",
        img: "./assets/images/Marchy.jpg"
    }, {
        name: "pastrnk",
        img: "./assets/images/Pasty.jpg"
    }, {
        name: "rask",
        img: "./assets/images/Tuukka-Rask.jpg"
    },
    {
        name: "carlo",
        img: "./assets/images/Brandon-Carlo.jpg"
    },
]



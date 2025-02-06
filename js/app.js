/*-------------- Constants -------------*/
const wordSelection = [
    'Bears', 'Bengals', 'Bills', 'Broncos', 'Browns', 'Bucaneers', 'Cardinals', 'Chargers',
    'Cheifs', 'Colts', 'Commanders', 'Cowboys', 'Dolphins', 'Eagles', 'Falcons', 'Forty Niners',
    'Giants', 'Jaguars', 'Jets', 'Lions', 'Packers', 'Panthers', 'Patriots', 'Raiders',
    'Rams', 'Ravens', 'Saints', 'Seahawks', 'Steelers', 'Texans', 'Titans', "Vikings",
]

/*---------- Variables (state) ---------*/
let word;
let correct;
let goodChoice;
let wrongSelection;
let spaceman
let min = 0;
let max = 31;

/*----- Cached Element References  -----*/
const inputs = document.querySelector(".inputs")
const hintBox = document.querySelector("hint span")
const wrongLetter = document.querySelector(".wrong-letter span")
const lettersTyped = document.querySelector(".typing-input")
const submitBttn = document.querySelector("#submit")
const restartBttn = document.querySelector("#restart")



/*-------------- Functions -------------*/

//This function pulls a random word from the wordSelection array
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  let randomNumber = getRandomInt(0, 31);
  //console.log(randomNumber); // Outputs a random integer between 0 and 31
  console.log(wordSelection[randomNumber]); // outputs a random word
  console.log(wordSelection[randomNumber].length) //outputs the amount of letters in random word 

// This funtion returns true or false if the letter typed is in the current word
function correctLetter(letter) {
    const randomWord = wordSelection[randomNumber]

if (randomWord.toLowerCase().includes(letter.toLowerCase())) {
    console.log(`Letter '${letter}' is in the word '${randomWord}'`);
    return true;
} else {
    console.log(`letter '${letter}' is NOT in the word '${randomWord}'`);
    return false;
}
}

const letter =''
console.log(correctLetter('e'));




/*----------- Event Listeners ----------*/


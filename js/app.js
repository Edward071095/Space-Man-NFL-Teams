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
let wrongLetters = [];
let min = 0;
let max = 31;
let guessedLetter
let randomNumber
const spaceMan = 'Spaceman'
/*----- Cached Element References  -----*/
//const inputs = document.querySelector(".inputs")
const hintBox = document.querySelector(".hint")
const wrongLetterEl = document.querySelector(".wrong-letter")
//const lettersTyped = document.querySelector(".typing-input")
//const submitBttn = document.querySelector("#submit")
//const restartBttn = document.querySelector("#restart")

const guessBox = document.querySelector("#guess-input")
const spaceManBoxEl = document.querySelector(".spaceman-box")


/*-------------- Functions -------------*/

//This function pulls a random word from the wordSelection array
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
function getWord(){
   randomNumber = getRandomInt(0, 31);
  //console.log(randomNumber); // Outputs a random integer between 0 and 31
  console.log(wordSelection[randomNumber]); // outputs a random word
  hintBox.innerText = wordSelection[randomNumber].length //outputs the amount of letters in random word 
}
getWord()
// This funtion returns true or false if the letter typed is in the current word
function correctLetter(letter) {
    const randomWord = wordSelection[randomNumber]

if (randomWord.toLowerCase().includes(letter.toLowerCase())) {
    console.log(`Letter '${letter}' is in the word '${randomWord}'`);
    return true;
} else {
    console.log(`letter '${letter}' is NOT in the word '${randomWord}'`);
    wrongLetters.push(letter)
    spaceManBoxEl.value = spaceMan.slice(0, wrongLetters.length)
    console.log(wrongLetters)
    for (let i = 0; i < wrongLetters.length; i++) {
        console.log(wrongLetters[i]);
      }
    return false;
}
}

const str = wordSelection[randomNumber]
const found = wordSelection[randomNumber].match


function submit() {
   guessedLetter = guessBox.value
   correctLetter(guessedLetter)
   guessBox.value = ''
   printWrongLetters()
}

function printWrongLetters() {
  wrongLetterEl.innerText = wrongLetters.join(", ")
}

function restart() {
    wrongLetters = []
    spaceManBoxEl.value = ''
    wrongLetterEl.innerText = ''
    getWord()
}

let newWordArray = [];
let teamName = wordSelection[randomNumber]

function initArray(ary, teamName) {
    let strLength = teamName.length;
    console.log("The team name has " + strLength + " characters");
    for (let i = 0; i < strLength; i++) {
        ary[i] = "*";
    }
    return ary;
}

newWordArray = initArray(newWordArray, teamName);

let guess;
let team;
let regex;
let matches;

guess = "o";
regex = new RegExp(guess, 'gi');  // 'g' global, 'i' case insensitive
matches = teamName.matchAll(regex);
for (const match of matches) {
    console.log(`Found "${match[0]}" at index ${match.index}`);
    newWordArray[match.index] = guess;
}

team = newWordArray + "";  // turn the array into a string
team = team.replaceAll(",",""); // get rid of commas
console.log("Current guess: " + team + "\n");





/*----------- Event Listeners ----------*/


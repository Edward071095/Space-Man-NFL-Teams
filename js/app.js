/*-------------- Constants -------------*/
const wordSelection = [
    'Bears', 'Bengals', 'Bills', 'Broncos', 'Browns', 'Bucaneers', 'Cardinals', 'Chargers',
    'Cheifs', 'Colts', 'Commanders', 'Cowboys', 'Dolphins', 'Eagles', 'Falcons', '49ers',
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
let randomWord = ''
const spaceMan = 'Spaceman'
/*----- Cached Element References  -----*/
//const inputs = document.querySelector(".inputs")
let hintContainersEl = document.querySelector(".hint-containers")
const wrongLetterEl = document.querySelector(".wrong-letter")
//const lettersTyped = document.querySelector(".typing-input")
//const submitBttn = document.querySelector("#submit")
//const restartBttn = document.querySelector("#restart")

const guessBox = document.querySelector("#guess-input")
const spaceManBoxEl = document.querySelector(".spaceman-box")
const invalidSubmission = document.querySelector(".invalid-submission")



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
  randomWord = wordSelection[randomNumber]; // outputs a random word
  createBoxes()
}
function createBoxes(team){
    let displayAll = team === randomWord
    let hintsEl = null
    if (team?.length === 1) {
        hintContainersEl.remove()
        hintContainersEl = document.createElement('div')
        hintContainersEl.classList.add("hint-containers")
        hintsEl = document.querySelector(".hints")
    }
  const randomWordArray = randomWord.split('')
  randomWordArray.forEach((el, idx) => {
  const tempEl = document.createElement('div') 
  tempEl.textContent = (displayAll || team === el) ? el : ''

  tempEl.id = `box-${idx}`
  hintContainersEl.appendChild(tempEl)
  if (hintsEl) hintsEl.appendChild(hintContainersEl)
  })
  //hintContainersEl.innerText = wordSelection[randomNumber].length //outputs the amount of letters in random word 
}
getWord()
// This funtion returns true or false if the letter typed is in the current word
function correctLetter(letter) { 
if (letter.length === 1 || letter.length === randomWord.length) {
    if (randomWord.toLowerCase().includes(letter.toLowerCase())) {
        createBoxes(letter)
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
} else { 
    invalidSubmission.innerText = 'Invalid Entry: Only 1 Letter or The Whole Word Is Allowed.' 
    setTimeout(() => {
        invalidSubmission.innerText = ''
    }, 3000)
}
}
const str = wordSelection[randomNumber]
const found = wordSelection[randomNumber].match


function submit() {
   guessedLetter = guessBox.value
   correctLetter(guessedLetter.trim())
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


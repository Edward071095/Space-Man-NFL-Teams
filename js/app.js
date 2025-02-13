/*-------------- Constants -------------*/
const wordSelection = [
    'bears', 'bengals', 'bills', 'broncos', 'browns', 'bucaneers', 'cardinals', 'chargers',
    'cheifs', 'colts', 'commanders', 'cowboys', 'dolphins', 'eagles', 'falcons', '49ers',
    'giants', 'jaguars', 'jets', 'lions', 'packers', 'panthers', 'patriots', 'raiders',
    'rams', 'ravens', 'saints', 'seahawks', 'steelers', 'texans', 'titans', "vikings",
]
const spaceMan = 'Spaceman'
const messages = {
    errorMessage: {time: 3000, text: 'Invalid Entry: Only 1 Letter or The Whole Word Is Allowed.'}, 
    winMessage:  {time: 10000, text: 'You Win! Tell A Friend!'},
    lossMessage: {time: 10000, text: 'You Lose. Try Again.'},
    threeStrikeMessage: {time: 5000, text: '3 Invalid Entries. You Lose A Turn.'}

}

/*---------- Variables (state) ---------*/
let word;
let randomWordArray; 
let goodChoice;
let wrongLetters = [];
let min = 0;
let max = 31;
let guessedLetter
let randomNumber
let randomWord = ''
let threeStrikes = 0
let lossTurnNum = 0
/*----- Cached Element References  -----*/
//const inputs = document.querySelector(".inputs")
let hintContainersEl = document.querySelector(".hint-containers")
const wrongLetterEl = document.querySelector(".wrong-letter")
//const lettersTyped = document.querySelector(".typing-input")
const submitBttn = document.querySelector("#submit-button")
//const restartBttn = document.querySelector("#restart")
const hintsEl = document.querySelector(".hints")
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
  randomWord = wordSelection[randomNumber]; // outputs a random word
  createBoxes()
}

let rightLetter = [];

function createBoxes(){
    randomWordArray = randomWord.split('')
    randomWordArray.forEach((el, idx) => {
        const tempEl = document.createElement('div') 
        //tempEl.textContent = (displayAll || team === el) ? el : ''
        if (rightLetter.includes(el)) {
            tempEl.textContent = el; 
        } else {
            tempEl.textContent = '';
        }
        tempEl.id = `box-${idx}`

        hintContainersEl.appendChild(tempEl)
        
    })
  
}
function guessLetter(guess) {
    // Ensure the guessed letter is part of the random word and isn't already guessed
    if (randomWord.includes(guess) && !rightLetter.includes(guess)) {
        rightLetter.push(guess); // Add the guess to the list of correct guesses
        
    }
}
getWord()

function showLetters(theArr, word, showAll = false) {
    
    theArr.map((data, idx) => {
        //debugger
        const boxClass = `#box-${showAll ? idx : data}`;
        const currentBoxEl = hintContainersEl.querySelector(boxClass);
        if (currentBoxEl) {
            currentBoxEl.textContent = showAll ? data : word;
        }
    });
}

function showMessage(message, time) {
    invalidSubmission.innerText = message
    setTimeout(() => {
        invalidSubmission.innerText = ''
    }, time)
}
function updateSpaceman() {
    spaceManBoxEl.value = spaceMan.slice(0, (wrongLetters.length + lossTurnNum))

}
// This funtion returns true or false if the letter typed is in the current word
function correctLetter(letter) { 
    if (letter.length === 1 ) {
        if (randomWord.toLowerCase().includes(letter.toLowerCase())) {
            const indicesArray = grabIndices(letter);
            showLetters(indicesArray, letter)
        } else {
            wrongLetters.push(letter)
            updateSpaceman()
        }
        threeStrikes = 0
    } else if (letter.length === randomWord.length)  {
        if (letter === randomWord) {
            showLetters(randomWordArray, letter, true)
            showMessage(messages.winMessage.text, messages.winMessage.time)
            toggleSubmit(true)
        }
        threeStrikes = 0
    } else { 
        showMessage(messages.errorMessage.text, messages.errorMessage.time)
        threeStrikes++
        if (threeStrikes === 3 ) {
            showMessage(messages.threeStrikeMessage.text, messages.threeStrikeMessage.time)
            lossTurnNum++
            updateSpaceman()
            threeStrikes = 0
        }
    }
    
    if ((wrongLetters.length + lossTurnNum) === spaceMan.length) { 
        showMessage(messages.lossMessage.text, messages.lossMessage.time)
        toggleSubmit(true)
    }
}
const str = wordSelection[randomNumber]
const found = wordSelection[randomNumber].match

// function guessedLetter() {
//     const guess = guessBox.value.toLowerCase();
//     if (wordSelection.includes(guess) && !rightLetter.includes(guess)) {
//         rightLetter.push(guess);
//     }
//     correctLetter();
//     guessBox.value = '';
// }
// correctLetter()


function grabIndices(letter) {
    const indices = randomWordArray.map((char, index) => {
        if (char === letter) {
            return index;
        } else {
            return -1;
        }
    }).filter(index => index !== -1);
    return indices;
}



function submit() {
   guessedLetter = guessBox.value
   correctLetter(guessedLetter.trim())
   guessBox.value = ''
   printWrongLetters()
}

function printWrongLetters() {
  wrongLetterEl.innerText = wrongLetters.join(", ")
}

function clearBoxes() {
    hintContainersEl.remove()
    hintContainersEl = document.createElement("div")
    hintContainersEl.classList.add('hint-containers')
    hintsEl.appendChild(hintContainersEl)
}

function restart() {
    clearBoxes()
    wrongLetters = []
    spaceManBoxEl.value = ''
    wrongLetterEl.innerText = ''
    getWord()
    toggleSubmit(false)
    guessBox.value = ''
}

let newWordArray = [];
let teamName = wordSelection[randomNumber]

function initArray(ary, teamName) {
    let strLength = teamName.length;
    for (let i = 0; i < strLength; i++) {
        ary[i] = "*";
    }
    return ary;
}

function toggleSubmit(disable) {
    submitBttn.disabled = disable
}





/*----------- Event Listeners ----------*/

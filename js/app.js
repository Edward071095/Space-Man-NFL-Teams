/*-------------- Constants -------------*/
const wordSelection = [
    ['Bears', 'Bengals', 'Bills', 'Broncos', 'Browns', 'Bucaneers', 'Cardinals', 'Chargers'],
    ['Cheifs', 'Colts', 'Commanders', 'Cowboys', 'Dolphins', 'Eagles', 'Falcons', 'Forty Niners'],
    ['Giants', 'Jaguars', 'Jets', 'Lions', 'Packers', 'Panthers', 'Patriots', 'Raiders'],
    ['Rams', 'Ravens', 'Saints', 'Seahawks', 'Steelers', 'Texans', 'Titans', "Vikings"],
]

/*---------- Variables (state) ---------*/
let word;
let correct;
let goodChoice;
let wrongSelection;
let spaceman


/*----- Cached Element References  -----*/
const inputs = document.querySelector(".inputs")
const hintBox = document.querySelector("hint span")
const wrongLetter = document.querySelector(".wrong-letter span")
const lettersTyped = document.querySelector(".typing-input")
const submitBttn = document.querySelector("#submit")
const restartBttn = document.querySelector("#restart")



/*-------------- Functions -------------*/


/*----------- Event Listeners ----------*/


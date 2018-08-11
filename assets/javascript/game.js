// Global Variables
//--------------------------------------------------------------
//Arrays & Variables go here (to hold data)

//All of the possible options for words to guess!
var wordOptions = ["hangman", "hangwoman", "hungman", "noose", "hangery"];

//Array that will hold teh chosen word
var selectedWord ="";

//What letters are in the word...
var letters = [];

//To Calulate the number of blanks
var numBlanks = 0;

//Array that will hold the number of blanks and successes
var blanksAndSuccesses = [];

//Array for wrong guesses
var wrongLetters =[];


//The Movie The Game Counter
var winCount = 0;
var lossCount = 0;
var guessesLeft = 0;


//Functions
//--------------------------------------------------------------




//Main Process
//--------------------------------------------------------------
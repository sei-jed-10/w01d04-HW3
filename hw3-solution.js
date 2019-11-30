// JS Arrays and Loops Week1 Homework3

// Exercise 1:
// Create a function that will get the sum of the numbers between 1 and n and return the answer

const summation = function (num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
      sum += i;
  }
  return sum;
}
summation(5) // should return 15 because 1+2+3+4+5=15


// Exercise 2:
// Create a program to get the sum of all the even numbers in a group
const summationEven = function (num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
      if (i % 2 === 0) {
          sum += i;
      }

  }
  return sum;
}

 console.log(summationEven(5)); // should return 6 because 2+4=6
 
// Exercise 3:  
// Write a function that will tell you all of the words in an array that contain the letter `a`
const wordsWithA = function(wordsArray) {
  const solutionArray = []
  for (let i = 0; i < wordsArray.length; i++) {
      if (wordsArray[i].indexOf('a') >= 0) {
          solutionArray.push(wordsArray[i])
      }
  }
  return solutionArray;
}

 wordsWithA(['cat', 'rabbit', 'dog', 'frog']) // should return ['cat', 'rabbit']

 
// Exercise 4: 
// Create a function to reverse the letters in a word
const reverse = function (word) {
  let lettersArray = word.split('');
  return lettersArray.reverse().join('');
}

reverse("caterpillar") // should return "rallipretac"


// Exercise 5:
// Create a function that takes an array of words and combines them with a dash
const addDashes = function (wordsArray) {
  return wordsArray.join('-');
}
  
  addDashes(['test1', 'test2', 'test3']) // should return "test1-test2-test3"
  
// Extra Practice Optional 6,7,8,9,10,11 

// Exercise 6:
// Function that will count up to a number and back down and return a string of the climb

const countUpAndDown = function (num) { 
  let result = []
  for (let i = 1; i <= num; i++) {
      result.push(i);
  }
  for (let i = num - 1; i >= 1; i--) {
      result.push(i);
  }
  return result.join(" ");
}

countUpAndDown(3) // should return "1 2 3 2 1"


// Exercise 7:
// Create a function to get the average of a group of numbers 

const avg = function (numsArray) {
  let total = 0;
  for (let i = 0; i < numsArray.length; i++) {
      total += numsArray[i];
  }
  return total / numsArray.length;
}

  avg([8, 2, 2, 4]) // should return 4
 

// Exercise 8: 
// Write a function that will tell you all of the words in an array that contain a specified letter
const wordsWithLetter= function(letter, wordsArray) {
  const solutionArray = []
  for (let i = 0; i < wordsArray.length; i++) {
      if (wordsArray[i].indexOf(letter) >= 0) {
          solutionArray.push(wordsArray[i])
      }
  }
  return solutionArray;
}

 wordsWithLetter("g", ['cat', 'rabbit', 'dog', 'frog']) // should return ['dog', 'frog']


// Exercise 9: 
// Function that returns the longest word in sentence
const longestWord= function(sentence) {
  const words = sentence.split(" ");
  let longestWord = "";
  for (let i = 0; i < words.length; i++) {
      if (words[i].length > longestWord.length) {
          longestWord = words[i];
      }
  }
  return longestWord;
}
longestWord("The cat in the house") // should return "house"


// Exercise 10: 
// Function that returns the largest even number

const largestEvenNumber= function(numbersArray) {
  let largestEven = 0;
  for (let i = 0; i < numbersArray.length; i++) {
      if ( (numbersArray[i] % 2 === 0) && (numbersArray[i] > largestEven) ) {
          largestEven = numbersArray[i];
      }
  }
  return largestEven;
}
 largestEvenNumber([1,2,3,10,4,7,0]) // should return "10"


// BONUS
// Create word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
// Create two global arrays: one to hold the letters of the word (e.g. `['F', 'O', 'X']`), and one to hold the current guessed letters (e.g. it would start with `['_', '_', '_]'` and end with `['F', 'O', 'X']`)`.
// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.

var wordLetters     = ['G', 'O', 'A', 'T'];
var guessedLetters  = ['_', '_', '_', '_'];

function guessLetter(letter) {
    var goodGuess = false;
    var moreToGuess = false;
    for (var i = 0; i < wordLetters.length; i++) {
        if (wordLetters[i] == letter) {
            guessedLetters[i] = letter;
            goodGuess = true;
        }
        if (guessedLetters[i] == '_') {
            moreToGuess = true;
        }
    }
    if (goodGuess) {
        console.log('Yay, you found a letter!');
        console.log(guessedLetters.join(''));
        if (!moreToGuess) {
            console.log('YOU WON!');
        } 
    } else {
        console.log('Oh noes, thats not right!');
    }
}

guessLetter('G');
guessLetter('I');
guessLetter('O');
guessLetter('A');
guessLetter('T');

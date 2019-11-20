//EXercise 1
let m=0;
function summation(n)
{
for(let x=0; x <=n; x++ )
{
    m +=x 

}
return m;
}
console.log(summation(6))

// //Exercise 2:
let evenAdd =0; 

function summationEven(n)
{
for(let x=0; x <=n; x++ )
{
    if(x%2 ==0)
    {
        evenAdd +=x
    }
     

}
return evenAdd;
}
console.log(summationEven(5))

// Exercise 3:


var words = ['cat', 'rabbit', 'dog', 'frog'];

var str = 'a';

function wordsWithA(words, str) {

  // split the string into an array
   str = str.split('');

  // `filter` returns an array of array elements according
  // to the specification in the callback when a new word
  // is passed to it
  return words.filter(function(word) {

    // that callback says to take every element
    // in the `str` array and see if it appears anywhere
    // in the word. If it does, it's a match, and
    // `filter` adds that word to the output array
    return str.every(function(char) {
      return word.includes(char);
    });
  });
}

const output = wordsWithA(words, str); // [ "absd", "dfsgbbgah" ]
console.log(output);

// Exercise 4:
function reverse(name)
{
    return name.split("").reverse().join("");
}

console.log(reverse("caterpillar"))

// Exercise 5:
let x;
function addDashes(info)
{
    
    for(let x=0; x<info.length; x++)
    {
        
        return ("\""+info[x] + "-" +info[x+1] + "-" + info[x+2] + "\"")
    }   
}
console.log(addDashes(['test1', 'test2', 'test3']));

// -----------------------Extra Practice Optional 

// Exercise 6:


// BONUS ---------------------------------
var wordLetters     = ['M', 'R', 'U'];
var guessedLetters  = ['_', '_', '_'];

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
        if(guessedLetters != "_")
        console.log("Correct, "+guessedLetters.join(''));
        if (!moreToGuess) {
            console.log('YOU WON, ' + guessedLetters.join(''));
        } 
    } else {
        console.log('Incorrect,' + guessedLetters );
    }
}

guessLetter('M');
guessLetter('R');
guessLetter('U');




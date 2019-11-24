//#### Exercise 1:
function nSum(arr) {
    return arr; 
      
}
 console.log(nSum([1 + 2 + 3+ 4 + 5]));

  //#### Exercise 2:
 function summationEven(number){
  let num = number;
  let sum = 0;
  for(var i = 1; i <= num; i++){
    if((i % 2) == 0){
      sum = sum + i;
    }
  }
  console.log(sum);
}
summationEven(5) 

  //#### Exercise 3:

  var animals = ['cat', 'rabbit', 'dog', 'frog'];
  function filterItems(arr, query) {
    return arr.filter(function(el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    })
  }
  
  console.log(filterItems(animals, 'a')); // ['cat', 'rabbit']

  //#### Exercise 4:

   var x = "caterpillar"
  function Alphabetsort(str){
    var x = str.split("");
    return x.sort().join("");
}
console.log(Alphabetsort("caterpillar"))
 
 //#### Exercise 5:
  
  const str =['test1', 'test2', 'test3']
  const dash = ['-', '-', '-'] 
         const combined = str[0] + dash[0] + str[1] + dash[1] + str[2]
  console.log(combined);

  //BOUNCE
  const wordLetters = ['G', 'O', 'A', 'T'];
//   const guessedLetters = ['_', '_', '_', '_']; 
  const prompt("Whats Your Guiss?")

if (guessedLetters[0] == wordLetters[0]) {
    alert( "Correct!" );
} else if (guessedLetters[0] !== wordLetters[0]) {
    alert( "Incorrect!" )
} else  (guessedLetters[1] == wordLetters[1]) { 
    alert( "correct!" );
} else if (guessedLetters[1] !== wordLetters[1]) {
    alert( "Incorrect!" );
} else ( guessedLetters[2] == wordLetters[2]) {
    alert ( "correct!" );
} else if (guessedLetters[2] !== wordLetters[2]) {
    alert( "Incorrect!" );
} else ( guessedLetters[3] == wordLetters[3]) {
    alert ( "You Win!" );
} else if (guessedLetters[3] !== wordLetters[3]){
     alert( "Incorrect!" );
}     
     // playing the game

// guessLetter('G'); // "Correct, G _ _ _"
// guessLetter('I'); // "Incorrect, G _ _ _"
// guessLetter('O'); // "Correct, G O _ _"
// guessLetter('A'); // "Correct, G O A _"
// guessLetter('L'); // "Incorrect, G O A _"
// guessLetter('T'); // "You Win, G O A T"
  
  

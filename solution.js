// // Ex. 1
// Create a function that will get the sum of the numbers
// between 1 and n and return the answer

function summation (n) {
    let sum = 0
    for (var f = 1; f <= n; f++) {
sum = sum + f
    }
    return sum
}
console.log (summation(5))

// // Ex. 2
// Create a program to get the sum
// of all the even numbers in a group

function summationEven (n) {
    var sum = 0
    for (var f = 1; f <= n; f++) {
if (f % 2 == 0) sum += f
    }
    return sum  
}

console.log (summationEven(5))

// // Ex. 3
// Write a function that will tell you
// all of the words in an array that contain the letter `a`

var arr = ['cat', 'rabbit', 'dog', 'frog']
var array = []
 function wordsWithA (arr) {
for (var f = 0; f < arr.length; f++){
  if (arr[f].includes("a") == true) {
    array.push(arr[f])
  }
}
return array
 }

 console.log (wordsWithA(arr))

// // Ex. 4
// Create a function to reverse the letters in a word
function reverse(str){
    let reversed = "";    
    for (var f = str.length - 1; f >= 0; f--){        
      reversed += str[f];
    }    
    return reversed;
  }

  console.log(reverse("aterpillar"))

// // Ex. 5
// Create a function that takes an array of
// words and combines them with a dash
let array = ["test1" ,"test2" ,"test3"]

function addDashes(array) {
  for (var i = 0; i <= array.length; i ++){
return array[i].toString()+"-"
    +array[i+1].toString()+"-"
    +array[i+2].toString()+"-"
    }
}

console.log (addDashes(array))

// // Ex. 7
// Create a function to get the average of a group of numbers 

var num = [8, 2, 2, 4]
var sum = 0;

for (var i = 0; i < num.length; i++) {
  sum += num[i]
}
let avg = (sum/(num.length))

console.log (avg)

// every time I make it function it return undefined ..
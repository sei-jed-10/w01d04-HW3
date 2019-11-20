# JS Arrays and Loops Week1 Homework3

## Instructions
1. Fork and clone this repository.
2. Change into the new directory`cd w01d04-HW3`
3. Create a file called solution.js and add all answers to it. 
---

#### Exercise 1:
Create a function that will get the sum of the numbers between 1 and n and return the answer

```
function summation(num){
  
  var res= 0;
  for(i=1; i<=num;i++ ) {
    
    res += i;
    
      }
  return res;
  
}

console.log(summation(5));

```

#### Exercise 2:
Create a program to get the sum of all the even numbers in a group

```
 function summation(num){
  
  var res= 0;
  for(i=1; i<=num;i++ ) {
    if(i%2==0)
    res += i;
    
      }
  return res;
  
}

console.log(summation(5));


```

 

#### Exercise 3:  
Write a function that will tell you all of the words in an array that contain the letter `a`

```
 
function wordsWithA(arr){
  
  var res= [];
  for(i=0 ; arr[i].indexOf('a')>=0 ;i++ ) {
    res += arr[i] + " ";
      }
  return res;
  
}

console.log(wordsWithA(['cat', 'rabbit', 'dog', 'frog']));




```

 
#### Exercise 4: 
Create a function to reverse the letters in a word

```

function reverse(wor){
  
  return wor.split('').reverse().join('');
  
}

console.log(reverse("caterpillar"));
```



#### Exercise 5:
 Create a function that takes an array of words and combines them with a dash

  ```
  
function addDashes(arr){
  
   var res= "";
  for(i=0 ; i< arr.length ;i++ ) {
    
    res += arr[i]+ "-";
    
      }
  return res;
}

console.log(addDashes(['test1', 'test2', 'test3']));
  ```
 ## Extra Practice Optional 6,7,8,9,10,11 

#### Exercise 6:
Function that will count up to a number and back down and return a string of the climb

```
  function countUpAndDown(num){
var res = [];
for(i=1 ; i<= num ;i++ ) {
   res.push(i)
}
     for(i=num-1 ;i>= 1 ;i-- ) {
      res.push(i)
          }
   
return res;
}
console.log(countUpAndDown(3));


```

#### Exercise 7:
Create a function to get the average of a group of numbers 

```
  function avg(arr){
  
   var res= 0;
  for(i=0 ; i< arr.length ;i++ ) {
    
    res += arr[i];
    
      }
  return res/arr.length;
}

console.log(avg([8, 6, 2, 4]));
 ```

#### Exercise 8: 
Write a function that will tell you all of the words in an array that contain a specified letter

```
  
function wordsWithLetter(lett,arr){
  
  var res= [];
  for(i=0 ; arr[i].indexOf(lett)>=0 ;i++ ) {
    res.push(arr[i]);
      }
  return res;
  
}

console.log(wordsWithLetter('t', ['cat', 'rabbit', 'dog', 'frog']));
 
// should return ['dog', 'frog']

```

#### Exercise 9: 
Function that returns the longest word in sentence

 ```

function longestWord(w){ 

 // var res= [];

  var res = w.split('');
   for(i=0 ; i<res.length ;i++ ) {
     if(res[i].length>=5)
        return res[i]
       }
  // return res;
  
 }
console.log(res[i].length);
console.log(longestWord("The cat in the house"));
 

}
```
#### Exercise 10: 
Function that returns the largest even number

```
 function largestEvenNumber(num){
   
  var res = 0;
  var ev = [];
    for(i=0 ; i<num.length ;i++ ) {
     if(num[i]%2 ==0){
       ev.push(num[i]);       
     }
 
       }
  ev.sort();
  console.log(ev);
  
  for (i=0 ; i<ev.length ;i++){
    if(ev[i]> ev[i+1])     
      res=ev[i]
  }
  return res;
}

console.log(largestEvenNumber([1,2,3,10,4,7,0]));


```



## BONUS

Create word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

- Create two global arrays: one to hold the letters of the word (e.g. `['F', 'O', 'X']`), and one to hold the current guessed letters (e.g. it would start with `['_', '_', '_]'` and end with `['F', 'O', 'X']`)`.
- Write a function called guessLetter that will:
  - Take one argument, the guessed letter.
  - Iterate through the word letters and see if the guessed letter is in there.
  - If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
  - When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
  - It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
  - Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.

```js
// start of the game
const wordLetters     = ['G', 'O', 'A', 'T'];
const guessedLetters  = ['_', '_', '_', '_'];

// playing the game
guessLetter('G'); // "Correct, G _ _ _"
guessLetter('I'); // "Incorrect, G _ _ _"
guessLetter('O'); // "Correct, G O _ _"
guessLetter('A'); // "Correct, G O A _"
guessLetter('L'); // "Incorrect, G O A _"
guessLetter('T'); // "You Win, G O A T"
```
**How To: Make it like Hangman:**
- Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
- Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
- Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.

### Deliverable  
1. When finished, `git add .`, `git commit -m " "`, `git push origin master` to your fork and submit a pull request.
2. Please fill up the following questions when you pull request:
- on a scale from 1 to 5, how comfortable were you with this assignment? (1 is very difficult)
- How long did it take?
- What was a challenge you had with this assignment?
- Is there anything that you'd like some further information on?
- Do you have any suggestions to improve this assignment?

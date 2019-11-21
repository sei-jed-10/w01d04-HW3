#### Exercise 1:
Create a function that will get the sum of the numbers between 1 and n and return the answer
function summation(num){
    var result=0;
 
     for(var i=1;i<=num;i++){
         result += i;
     }
     return result;
 }

```
summation(5); // should return 15 because 1+2+3+4+5=15
```

#### Exercise 2:
Create a program to get the sum of all the even numbers in a group
function summationEven(num){
    var result=0;
 
 for(var i=1;i<=num;i++){
     if(i % 2 === 0){
      result += i;
     }
     else{
      result=result;
     }
 } 
  return result;
 }
 summationEven(5); // should return 6 because 2+4=6
```
#### Exercise 3:  
Write a function that will tell you all of the words in an array that contain the letter `a`

```
function wordsWithA(arrayOfWords){
    var aWithA=[];
  for(var i=0;i<arrayOfWords.length;i++){
      for(var j=0;j<arrayOfWords[i].length;j++){
        if(arrayOfWords[i][j].includes('a')==true){
        aWithA.push(arrayOfWords[i]);
        }
      }   
  }
  return aWithA;
  }
  
  wordsWithA(['cat', 'rabbit', 'dog', 'frog']) ; // should return ['cat', 'rabbit']
```

 
#### Exercise 4: 
Create a function to reverse the letters in a word

```
function reverse(str){
    let reversed = "";    
    for (var i = str.length - 1; i >= 0; i--){        
      reversed += str[i];
    }    
    return reversed;
  }
  
  reverse("caterpillar") // should return "rallipretac"
  ```



#### Exercise 5:
 Create a function that takes an array of words and combines them with a dash

  ```
  function addDashes(aWDash){
    var result="";
     
         for(var i=0;i<aWDash.length;i++){
            if(i==aWDash.length-1){
            result += aWDash[i]; 
            }
            else{
                result += aWDash[i]+"-";
            }
          }
         
         return result;
    }
    
    addDashes(['test1', 'test2', 'test3']) // should return "test1-test2-test3"
  ```
  ## Extra Practice Optional 6,7,8,9,10,11 
#### Exercise 6:
Function that will count up to a number and back down and return a string of the climb

```
function countUpAndDown (num){
    for(var i=1;i<=num;i++){
    console.log(i+" ");
    if(i==num){
      var num2= num-1;
      for(var j=num2;j>=num-num2;j--){
      console.log(j+" ");
    }
    }
  }
  }

  countUpAndDown(3) // should return "1 2 3 2 1"
```

#### Exercise 7:
Create a function to get the average of a group of numbers 

```
function avg(arrayNum){
    var aNL=arrayNum.length;
    var sumOfNum=0;
    var avgResult=0;
    for(var i=0;i<aNL;i++){
    sumOfNum +=arrayNum[i];
    } 
    return avgResult=sumOfNum/aNL;
    }

  avg([8, 2, 2, 4]) // should return 4
 ```

#### Exercise 8: 
Write a function that will tell you all of the words in an array that contain a specified letter

```
function wordsWithLetter(whatChar, arrayOfWords){
    var aWithC=[];
  for(var i=0;i<arrayOfWords.length;i++){
      for(var j=0;j<arrayOfWords[i].length;j++){
        if(arrayOfWords[i][j].includes(whatChar)==true){
        aWithC.push(arrayOfWords[i]);
        }
      }   
  }
  return aWithC;
  }
  
  wordsWithLetter("g", ['cat', 'rabbit', 'dog', 'frog']) // should return ['dog', 'frog']
```

#### Exercise 9: 
Function that returns the longest word in sentence

 ```
longestWord("The cat in the house") // should return "house"
```
#### Exercise 10: 
Function that returns the largest even number

```
function largestEvenNumber(num){
    var largestNum;
      for(var i=0;i<num.length;i++){
        
          if(num[i]%2==0){
            if(num[i]>largestNum==true){
            largestNum=num[i];
            }
          largestNum=num[i];
          }
      } return(largestNum);
  }
  
  largestEvenNumber([1,2,3,10,4,7,0]) // should return "10"
```
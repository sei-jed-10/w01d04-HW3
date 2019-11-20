# JS Arrays and Loops Week1 Homework3

#### Exercise 1:

// Solution 
function summation(number){
    let num = number;
    let sum = 0;
    
    for(var i = 1; i <= num; i++){
      sum = sum + i;
    }
    console.log(sum);
  }    
summation(5) // should return 15 because 1+2+3+4+5=15  
---  

#### Exercise 2:

// Solution 
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
summationEven(5) // should return 6 because 2+4=6

---  
#### Exercise 3: 

// Solution 
function wordsWithA(array){          
    for(i = 0; i < array.length; i++){
      if(array[i].includes('a')){
        console.log(array[i]);
      }
    }  
}
wordsWithA(['cat', 'rabbit', 'dog', 'frog']); // should return ['cat', 'rabbit']
---  

#### Exercise 4: 

// Solution 
function reverse(letters){
    return letters.split('').reverse().join('');
  }
console.log(reverse("caterpillar")); // should return "rallipretac"
---  

#### Exercise 5:

// Solution 
function addDashes(array){
    console.log(array.join("-"));
}  
addDashes(['test1', 'test2', 'test3']) // should return "test1-test2-test3"
--- 

## Extra Practice Optional 6,7,8,9,10,11 

#### Exercise 6:

// Solution
function countUpAndDown(number){
    let num = number;
    for(i = 1; i <= num; i++){
      console.log(i);
    }
    for(i = num -1; i >= 1; i--){
       console.log(i);
    }
  }
countUpAndDown(3) // should return "1 2 3 2 1"
--- 

#### Exercise 7:

// Solution
function avg(array){
    var sum = 0;
    for(i = 0; i <= array.length; i++){
      sum += array[i];
      console.log(sum / array.length);
    } 
}
avg([8, 2, 2, 4]); // should return 4
--- 
  
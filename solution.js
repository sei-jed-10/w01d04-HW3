

//  11/20/2019
//  HW3
//  Fahad Alturkistani
//////////////////////////
//
//
//
////// Exercise 1:
function summation(n){
    var sum = 0;
    for (i=1; i<(n+1); i++){
      sum += i;
    }
    return sum;
  };
  summation(5);


////// Exercise 2;
function summation(n){
    var sum = 0;
    for (i=1; i<(n+1); i++){
      if(i%2 ==0){
      sum += i;
      }
    }
    return sum;
  };
  summation(5);


////// Exercise 3:
function summation(n){
    var sum = 0;
    for (i=1; i<(n+1); i++){
      if(i%2 ==0){
      sum += i;
      }
    }
    return sum;
  };
  summation(5);


////// Exercise 4:
function wordsWithA(words){
    var array = [];
    for (i=0; i<words.length;i++){
      if (words[i].includes('a') == true)
      {
        array.push(words[i]);
      }
    }
    return array;
  };
   wordsWithA(['cat', 'rabbit', 'dog', 'frog']);


////// Exercise 5:
function reverse(word){
    return word.split("").reverse().join("");
    };
    reverse("hello");


/////////////////////END OF SOLUTION


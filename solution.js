//#### Exercise 1:

function summation(x){
    var c  = 0
  
    for (i = 0 ; i <= 5 ; i ++){ 
     c += i 
    
  
    }
     console.log(c)
   }
  summation(5) 
 
//#### Exercise 2:

function summationEven(x){
    var c  = 0
  
    for (i = 0 ; i <= 5 ; i ++){ 
      if(i % 2 == 0){
     c += i 

      }
  
    }
     console.log(c)
   }
  summationEven(5) 

  //#### Exercise 3:  

  var found = [];
  function findLetter(x){
  for (var i = 0; i < x.length; i++) {
    if (x[i].includes("a") == true) {
      found.push(x[i]);
    }
  
  }
    console.log(found)
  
  } ;
  
  var words =['cat', 'rabbit', 'dog', 'frog']
  findLetter(words) ;

//#### Exercise 4: 

  function revString(str) {
    return str.split("").reverse().join("");
}

console.log(revString("caterpillar"))

//#### Exercise 5:

function summation(n){
    var c  = ""
  
  var arrTwo = []
    for (i = 0 ; i <= n.length ; i ++){ 
    
        c += n[i] +"_"

    }
        arrTwo.push(c)

           console.log(arrTwo)

   }

   var arrOne = ['test1', 'test2', 'test3']

  summation(arrOne)  ;

//#### Exercise 6:


  function countUpAndDown(x){
    var counterUP = 0 
    var counterDown = 0
    var arrNum = " "
     for (var i = 1 ; i <= x ; i ++){
  
    arrNum += " "+i
   
  
    } for (j = x -1  ; j > 0 ; j-- ){
       arrNum += " "+ j
       
   
  
    }
       console.log(arrNum)
  
  }
  console.log(typeof arrNum)
  countUpAndDown(3)

//#### Exercise 7:

  function avg(arr) {
    var x = 0 
  for(i = 0 ; i <= arr.length -1 ; i ++)
  {
  x += arr[i] 
  
  }
  console.log(x / 4 )
  
  }
  var arrNum =[8, 2, 2, 4] 
  avg(arrNum)

//#### Exercise 8: 

  var found = [];
  function findLetter(x){
  for (var i = 0; i < x.length; i++) {
    if (x[i].includes("g") == true) {
      found.push(x[i]);
    }
  
  }
    console.log(found)
  
  } ;
  
  var words =['cat', 'rabbit', 'dog', 'frog']
  findLetter(words) ;

  
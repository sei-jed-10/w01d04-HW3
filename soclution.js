///E :1
function summation(n){
    var sum=0;
     for (var i = 1; i <= n; i++){// to check all numbers
           sum+=i;// to sum all numbers
     }
     console.log(sum)
    
    } 
    summation(5)
 

///E :2
function sumEven(num){
    var sum=0;
     for (var i = 1; i <= num; i++){ //
        if (i% 2 == 0){ // check if the number is even
           sum+=i; // to sum all the even numbers
        }
     }
     console.log(sum)
    }
    
    sumEven(5)



///E :3

// Write a function that will tell you all of the words in an array that contain the letter `a`

function wordsWithA(array){
 var words = 0;
   for (i = 0; i < words.length; i++){
       if (words[0]== "cat"){
           console.log(words)
       }
   }
 
}
wordsWithA(words=["rabbit", "dog", "frog", "cat"])

// var wordsWithA = ["cat", "rabbit", "dog", "frog"]
//     if (wordsWithA.slice[] = "a")


///E :4
// Create a function to reverse the letters in a word

// ```
// reverse("caterpillar") // should return "rallipretac"

function reverse(word){
    var backwards = "";
    for (var i=word.length -1; i >= 0; i--){
        backwards += word[i];
    }
    return backwards;
}
console.log(reverse("caterpillar"))


///E :5

addDashes = ['test1', 'test2', 'test3']
console.log(addDashes.join("-"))
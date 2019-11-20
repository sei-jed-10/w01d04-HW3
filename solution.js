//Exercise 1:
//Create a function that will get the sum of the numbers between 1 and n and return the answer

function summation(number){
    var sum=0;
    for (i=1;i<=number;i++){
        sum+=i;
    }
    return sum;
}
console.log(summation(5));

//Exercise 2:
//Create a program to get the sum of all the even numbers in a group

function summationEven(number){
    var sum=0;
    for (i=1;i<=number;i++){
        if(i%2==0){
        sum+=i;
        }
    }
    return sum;
}

console.log(summationEven(5));

//Exercise 3:
//Write a function that will tell you all of the words in an array that contain the letter a
function wordsWithA(list){
    var words=[];
    for(i=0;i<list.length;i++){
        if(list[i].search("a")!=-1){
            words.push(list[i]);
        }
    }
    return words;
}

 console.log(wordsWithA(['cat', 'rabbit', 'dog', 'frog'])) // should return ['cat', 'rabbit']

//Exercise 4:
//Create a function to reverse the letters in a word
function reverse(word){
    var reversedWord="";
    for(i=word.length-1;i>=0;i--){
        reversedWord+=word[i];
    }
    return reversedWord;
}

console.log(reverse("caterpillar")) // should return "rallipretac"

//Exercise 5:
//Create a function that takes an array of words and combines them with a dash
function addDashes(arrayOfWords){
    var result="";
    for(i=0;i<arrayOfWords.length;i++){
        if(i==arrayOfWords.length-1){
            result+=arrayOfWords[i]
        }
        else{
            result+=arrayOfWords[i]+"-";
        }
    }
    return result;
}

console.log(addDashes(['test1', 'test2', 'test3'])) // should return "test1-test2-test3"


//Exercise 6:
//Function that will count up to a number and back down and return a string of the climb
function countUpAndDown(number){
    var climb="";
    for(i=1;i<=number;i++){
        climb+=i+" ";
    }
    for(i=number-1;i>=1;i--){
        climb+=i+" ";
    }
    return climb;
}
 console.log(countUpAndDown(3)) // should return "1 2 3 2 1"

//Exercise 7:
//Create a function to get the average of a group of numbers
function avg(listOfNumbers){
    var sum=0;
    for(i=0;i<listOfNumbers.length;i++){
        sum+=listOfNumbers[i];
    }
    var average=sum/(listOfNumbers.length)
    return average;
}
  console.log(avg([8, 2, 2, 4])) // should return 4

//Exercise 8:
//Write a function that will tell you all of the words in an array that contain a specified letter
function wordsWithLetter(letter,list){
    var words=[];
    for(i=0;i<list.length;i++){
        if(list[i].search(letter)!=-1){
            words.push(list[i]);
        }
    }
    return words;
}
 console.log(wordsWithLetter("g", ['cat', 'rabbit', 'dog', 'frog'])) // should return ['dog', 'frog']


//Exercise 9:
//Function that returns the longest word in sentence
function longestWord(sentence){
    var sentenceConverted=sentence.split(" ");
    var longestWord=sentenceConverted[0];
    for(i=1;i<sentenceConverted.length;i++){
        if(sentenceConverted[i].length>longestWord.length){
            longestWord=sentenceConverted[i];
        }
    }
    return longestWord;
}

console.log(longestWord("The cat in the house")) // should return "house"


//Exercise 10:
//Function that returns the largest even number
function largestEvenNumber(listOfNumbers){
    var max=listOfNumbers[0];
    for(i=1;i<listOfNumbers.length;i++){
        if(listOfNumbers[i]%2==0){
            if(listOfNumbers[i]>listOfNumbers[i-1]){
                max=listOfNumbers[i];
            }
        }

    }
    return max;
}
 console.log(largestEvenNumber([1,2,3,10,4,7,0])) // should return "10"


// #### Exercise 1:
var sum = 0;
function summation(n) {
    for (var i = 0; i < n + 1; i++) {
       sum = sum + i;
    }
    return sum
}
console.log(summation(5));

// #### Exercise 2:
var sum = 0;
function summation(n) {
    for (var i = 0; i < n + 1; i++) {
        if(i % 2 === 0) {
       sum = sum + i;
        }
    }
    return sum
}
console.log(summation(5));

// #### Exercise 3:  
var array = ['cat', 'rabbit', 'dog', 'frog'];
var array1 = []
function wordsWithA() {
    for(var i = 0; i < array.length; i++) {
        if(array[i].includes('a') === true) {
        array1.push(array[i])
        }   
    }
    return array1
}
wordsWithA();
console.log(array1);

// #### Exercise 4: 
function reverse(str) {
    var reversed =  str.split('').reverse().join('');
    return reversed;
}
console.log(reverse("caterpillar"));

// #### Exercise 5:
function addDashes(array) {
    var dash = array.join('-');
    return dash;
}
console.log(addDashes(['test1', 'test2', 'test3']));
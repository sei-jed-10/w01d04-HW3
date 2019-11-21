summation = input => {
    let sum = 0
    for (let i = 1; i < input+1; i++)  sum += i
    return sum
}
console.log(summation(5));

summationEven = (input) => {
    let sum = 0
    for (let i = 1; i < input+1; i++) {
        if (i % 2 == 0) {
            sum += i
        }
    }
    return sum
}
console.log(summationEven(5))

wordsWithA = (arr) => {
    let arrA = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].toUpperCase().includes('A')) {
            arrA.push(arr[i])
        }
    }
    return arrA
}
console.log(wordsWithA(['cat', 'rabbit', 'dog', 'frog']));

reverse = (word) => {
    return word.split("").reverse().join("")
}
console.log(reverse("Mohammed"))

addDashes = arr => {
    return arr.join("-")
}
console.log(addDashes(['test1', 'test2', 'test3']));

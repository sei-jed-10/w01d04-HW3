```
#1

```
function sum (N) {
  var total = 0;
    for(var i = 1; i <= N; i++){
      total += i;
    }
    console.log (total)
}

sum(5)

```
#2

```

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var total = 0;

for ( var i = 0 ; i < arr.length ; i = i + 1)
{
	if (arr[i] % 2 == 0)
	{
		total += arr[i]
	}
}

console.log(total)

### question: when i put var total; it didnt work when i put var total = 0; it worked

```
#3

```
let arr = ['apple','banana','orange','kiwi']

var words = []
for (let i = 0; i< arr.length ; ++i)
  {
    if (arr[i].indexOf('a')!== -1)
      {words.push(arr[i]);}
   
  }
 console.log(words)

```
#4

```

function reverseString(word) {
    var newString = "";
    for (var i = word.length - 1; i >= 0; i--) {
        newString += word[i];
    }
    return newString;
}
reverseString('caterpillar');


```
#5

```

  var addDashes = ['black', 'white', 'yellow'];
  console.log(addDashes.join('-'))














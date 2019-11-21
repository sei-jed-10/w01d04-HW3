Solution 1:
Create a function that will get the sum of the numbers between 1 and n and return the answer

var sum = 0;
function summation (n)
{
  for (i=0; i < n+1; i++)
  {
    //console.log(i)
    sum += i;
    
  }
  console.log(sum)
  
}
summation(5)

Solution 2:
Create a program to get the sum of all the even numbers in a group

var sum = 0;
function summation (n)
{
  for (i=0; i < n+1; i++)
  {
    if(i % 2 == 0)
    {
    //console.log(i)
    sum += i;
    }
    
  }
  console.log(sum)
  
}
summation(5)

Solution 3:
Write a function that will tell you all of the words in an array that contain the letter a

 
  
var startA = ['cat', 'rabbit', 'dog', 'frog'] 

function findingA()

{
  
  for (i = 0; i < startA.length; i++)
  {
    var word = startA[i].includes("a")
    if(word == true)
    {
      console.log(startA[i])
    }
  }
    
}
findingA()


Solution 4: 
Create a function to reverse the letters in a word

```
reverse("caterpillar") // should return "rallipretac"


function reverse(str)
{
  let rev = ""
  for ( i = str.length - 1; i>=0; i--)
  {
    rev = rev + str[i]
    

  }
  console.log(rev)
  


}

reverse("caterpillar")

Solution 5:
Create a function that takes an array of words and combines them with a dash

//addDashes(['test1', 'test2', 'test3']) // should return "test1-test2-test3"


var text = ["Blue","Purple","Black","Pink"]

function comb()

{
    console.log(text[0] + "-" + text[1] + "-" +text[2] + "-" +text[3])
    
}
comb()

Solution 6:
Function that will count up to a number and back down and return a string of the climb

 countUpAndDown(3) // should return "1 2 3 2 1"

 function countUpAndDown (num)
{

for (i = 0; i <num; i++ )
{
  console.log(i)
}
for(j = num; j >0; j--)
{
  console.log(j)
}
}
countUpAndDown (3)

Solution 7:
Create a function to get the average of a group of numbers

  avg([8, 2, 2, 4]) // should return 4

  var num = [8, 2, 2, 4]
  let total = 0;
  
  
  function averge()
  {
    
    for (i=0; i <num.length ; i++)
    {
      total = total +num[i];
      
    }
    total = (total/num.length)
    console.log(total)
  
  
  
    
  }
  averge()
  

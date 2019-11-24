function sum(n){
    let sum =0;
for(let i=0;i<=n;i++){

 sum+=i

}


console.log(sum)

} 

sum(5)

function sum1(n){
    let sum =0;
for(let i=0;i<=n;i++){
if(i%2==0){    
    sum+=i

}

}


console.log(sum)

} 

sum1(5)

 //Write a function that will tell you all of the words in an array that contain the letter `a`
 let frist ,second;
function wordsWithA(){
    
    let  word = ['cat', 'rabbit', 'dog', 'frog'] 
    for(let i=0;i<word.length;i++){ 
        let char='a';
        if( word[i].includes(char)==true)  {
          
           
           frist=word[i];
           second=word[i+1];
         return  [frist,second ];

        } 

    }

   /* for(let i=0;i<word.length;i++){ 
    if(word[i].charAt(1)===word[i].charAt(1))
        console.log( word);
    
     }*/
    
    
    }
     
    
    console.log(wordsWithA());

//```Create a function to reverse the letters in a word
//reverse("caterpillar") // should return "rallipretac"

 


function reverse1(word) {

    return word.split('').reverse().join('');
  
  }
  
  console.log(reverse1("caterpillar"))





 // addDashes(['test1', 'test2', 'test3']) // should return "test1-test2-test3"
  
function addDashes(){
    let word=['test1', 'test2', 'test3']
           //word[0]= word[0]+"-";
           //word[1]= word[1]+"-";
            return  word.join('-');
            
   
    }
    console.log(addDashes())

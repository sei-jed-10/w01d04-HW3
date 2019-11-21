//ex1 

function summ(){
    for(var i = 1 ; i <= 5  ; i++){
    
     for ( var j = i ; j<= i ; j++){
         var sum = j + i ;
       console.log(sum);
       
    //     console.log(' ' );
      }
    }
    } 
    
    summ();


    //ex2 


    function summ(){
        for(var i = 1 ; i <= 5  ; i++){
          var sum = 0;
        if (i % 2 == 0){
            sum = sum + i;
           console.log(sum);
          }  
        }
        }
        
        
        summ();
        



    //ex3

    var names = ['cat', 'rabbit', 'dog', 'frog'];

    const filterItems = (letters) => {
           return names.filter(name => name.indexOf(letters) > -1);
       } 
   
       console.log(filterItems('a'));
   




    //ex4 


    function alphabet_order(str)
    {
  return str.split('').reverse().join('');
    }
  console.log(alphabet_order("abdulrahman"));
  
    //ex5 

    const test = ['test','test1','test2'];

for(var i = 0 ; i<test.length-1 ; i++){
  
  test[i] = test[i] + '-';
  
}

console.log(test)
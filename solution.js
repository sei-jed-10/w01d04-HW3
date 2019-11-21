//1

function summation(num) {
    let temp;
    let r =0; 
    for(let i=0;i<num;i++) { // 0,1   
        temp = (i+1); //  1, 2, ,3 ,4 , 5
        r = r + temp; 
    }
    console.log(r); 
}


// 2 

function summation(num) {
    let temp;
    let r =0; 
    for(let i=0;i<num;i++) { // 0,1   
        temp = (i+1); //  1, 2, ,3 ,4 , 5
        if(temp%2==0) {
            r = r + temp;
        }    
    }
    console.log(r); 
}

// 3 


function wordsWithA(arr) {
    let nArray = [];
    for(let i=0;i<arr.length;i++) {
        if(arr[i].includes("a")) {
            nArray.push(arr[i]);
        }
    }
    console.log(nArray);
}

// 4 

// function reverse(word) {
//     strsplit = word.split(""); // b o g
//     let outp = "";
//     for(let i=0; i<strsplit.length;i++){
//         outp += strsplit[i]; // bog
//     }
//     outp.split('').reverse().join(''); 
//     console.log(outp);
// }


// 5 

function addDashes(...words) {
    let temp;
    let outArray = "";
    for(let i=0; i<words.length;i++) {
        temp = words[i];
        outArray = outArray +"-"+ temp;
    }
    console.log(outArray);
} 
// 6 

// 7 
function avr(...nums){
    let temp;
    let outA = 0 ;
    for(let i =0;i<nums.length;i++){
            temp = nums[i]; // 5,4,3,2
            outA = outA + temp; // 5-9-12-14
    } 
    console.log(Math.round(outA)/nums.length);
}

// 8 


function wordsWithLetter(letter,arr) {
    let nArray = [];
    for(let i=0;i<arr.length;i++) {
        if(arr[i].includes(letter)) {
            nArray.push(arr[i]);
        }
    }
    console.log(nArray);
}

// 9 

function longestWord(str) {
    strsplit = str.split(" ");
    let temp;
    let outP =0;
    for(let i=0; i<strsplit.length;i++) {
        temp = strsplit[i].length;// 5 4 3 
        outP = outP + temp;    // 5 9 12 
    }

}

// 10 

function longestNumber(...num) {
    let temp;
    for(let i=0; i<num.length;i++) {
        if(num[i] % 2 == 0){
        temp = Math.max(num[i]);
    }
}
    console.log(temp);
}
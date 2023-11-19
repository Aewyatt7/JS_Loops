console.log("Hello World!\n==========\n");

// Exercise 1 Section
for (let i = 1; i <= 100; i++) 
    if (i % 2 != 0) {
        console.log(i + " is odd");
    }

// Exercise 2 Section
console.log("Exercise 2\n==========\n");


for ( let i =1; i <= 100; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log(i + " FIZZBUZZ");
    }
    else if (i % 3 === 0){
        console.log(i +" FIZZ");
    }
    else if (i % 5 === 0){
        console.log(i + " BUZZ");
    }
}
//exercise 3 while & d0
console.log("Exercise 3 while&do \n==========\n");

//Begining of test is Line 29
let i = 1;
 while ( i <= 100) {
    //if i is an odd number
    if (i % 2 !==0) {
        console.log(i + " is odd");
    }
    i++;
};
//Line 38 is the begining of the due loop

i = 1;
 do{
    if (i % 2 !==0) {
        console.log(i +  " is odd");
    }
    i++;
} while (i < 101);

i = 1;
    while (i <= 100) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(i + " FIZZBUZZ");
        } else if (i % 3 === 0) {
            console.log(i + " FIZZ");
        } else if (i % 5 === 0) {
            console.log(i + " BUZZ");
        }
        i++;
    }

    //Exercise 4
    //creates a random number between 0and 500
    // Math.random is = to 0-1 
    let value = Math.round(Math.random() * 500);

    // creates a random number between 100 and 500
    let n = Math.round(Math.random() * (500 - 100)) + 10;

    console.log("value = "+ value)
    console.log("n = "+ n)
    
    let isFound = false
    for (let i =0; i < n; i++){
        if (i== value) { 
            console.log("found value!");
            isFound = true;
            break;
        }
    }
        if (!isFound) {
            console. log("Did not find value");
        
        }
// Exercise 5 Custom FizzBuzz
    console.log("Exercise 5 FizzBuzz \n==========\n");

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let u = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for ( let i =start; i <= u; i++){
    if (i % fizzDivisor === 0 && i % buzzDivisor === 0){
        console.log(i + " FIZZBUZZ");
    }
    else if (i % fizzDivisor === 0){
        console.log(i +" FIZZ");
    }
    else if (i % buzzDivisor === 0){
        console.log(i + " BUZZ");
    }
}
 


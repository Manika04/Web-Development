/*
    ~ CALLBACK FUNCTIONS - Any function that is passed as an argument to another function is known as callback function.

    ~ ERROR FIRST CALLBACK- A function whose 1st parameter is error is known as error first callback.

    ~ CALLBACK STACK- Isme sirf sync function hote hai execute aur yeh async functions ko node API list mein behje deta hai
    
    ~ NODE APIS LIST - Idhar humare saare async functions aate hai execute hone.

    ~ CALLBACK QUEUE - Idhar humare callback functions node api list se aake line up hote hai and jab callback stack khali ho jata hai toh event loop ki help se callback stack mein chale jate hai execute hone.

    ~ EVENT LOOP - its kind of a security guard. yeh function callback queue se uthake callback stack mei behje deta hai execute hone ke liye jab callback stack khali hoti hai.

    https://www.jsv9000.app/

*/

const fs = require('fs');

//here 'last' is parameter for printLastName function
function printFirstName(firstName, cb1, cb2){
    console.log(firstName);
    cb1('Saxena');
    //cb1(firstName);
    cb2(20);
}

function printLastName(lastName){
    console.log(lastName);
}

function printAge(age){
    console.log(age);
}

//here printLastName is passed as an argument
// printFirstName('Manika', printLastName, printAge);
// printLastName('Saxena');

//SYNCHRONOUS - Line by line chalega code.and agar bada function hoga toh code aage badhega nhi jab tak pura function chal nhi jat

console.log("Before");
let data = fs.readFileSync("f1.txt");
console.log(" " + data);
console.log('After');

//ASYNCHRONOUS - isme before phir after aur phir function print hoga. Ab cb aur cb2 mein se jiska kaam phele ho jayega voh callback queue mein chala jayega aur jab humare callback stack khali ho jayega toh jiska kaam phele hua hai voh print ho jayega.

console.log("Before");
fs.readFile('f1.txt', cb);
fs.readFile('f2.txt', cb2);
function cb(err, data){
    if(err){
        console.log(err);
    }else{
        console.log(" " + data);
    }
}
function cb2(err, data){
    if(err){
        console.log(err);
    }else{
        console.log(" " + data);
    }
}
console.log('After');







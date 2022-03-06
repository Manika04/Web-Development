/*
    ~ Promise is basically a object.
    ~ Working of promises is same as call back functions.. bas callback queue ki jagah yahan MICROTASK QUEUE hota hai.
    ~ Promise wale code ki higher priority hoti hai callback se. 
*/


const fs = require('fs');

console.log("Before");

// fs.readFile("f1.txt", function(err, data){
//     if(err){
//         console.log(err);
//     }

//     console.log("File Data -> " + data);
// });

let promise = fs.promises.readFile("f1.txt");
// console.log(promise); //idhar pending aayega

console.log("After");

// If promise is fullfilled tab "then" chalta hai or agar reject hota hai toh "catch" chalta hai
promise.then(function(data){
    console.log("File data -> " + data);
});

promise.catch(function(err){
    console.log(err);
});







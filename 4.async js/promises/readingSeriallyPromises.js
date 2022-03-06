const fs = require("fs");

console.log("Before");

// let fileRead = fs.promises.readFile('f1.txt');

// fileRead.then(cb);

// function cb(data){
//     console.log("File Data -> " + data);
//     let fileRead2 = fs.promises.readFile('f2.txt');
//     fileRead2.then(cb2);
// }

// function cb2(data){
//     console.log("File Data -> " + data);
//     let fileRead2 = fs.promises.readFile('f3.txt');
//     fileRead2.then(cb3);
// }

// function cb3(data){
//     console.log("File Data -> " + data);
    
// }

console.log("After");


//IMPROVEMENT
    let fileRead = fs.promises.readFile('f1.txt');

    fileRead.then(cb);

    function cb(data){
        console.log("File Data -> " + data);
        let fileRead2 = fs.promises.readFile('f2.txt');
        return fileRead2;
    }

    function cb2(data){
        console.log("File Data -> " + data);
        let fileRead3 = fs.promises.readFile('f3.txt');
        return fileRead3;
    }

    function cb3(data){
        console.log("File Data -> " + data);
        
    }

    fileRead.then(cb).then(cb2).then(cb3).catch(function(err){
        console.log(err);
    });
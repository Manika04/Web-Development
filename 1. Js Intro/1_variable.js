//JS is a dynamically typed language - where we dont have to specify the datatype of the variable like int, char etc. It is a synchronous single threaded language

//Variable declartion
//var, let, const

// var a; //variable will be initialized with undefined
// console.log(a);


var a = 2;
// console.log(a);
var a = 'I am a String';
// console.log(a);
var a = true;
// console.log(a);

//DataTypes in Js - number, string,boolean, undefined, null
// var b = 2.3 //number
// var c = 'd' //string
// var d = 'I am String' //string

//VAR LIMITATIONS
//1. Redeclartion
    var b = "hello"
    var b = "bye"
    // console.log(b)

    //Overcoming Redeclartion ---> use let keyword
    // let c = "hello"
    // let c = "bye"
    // console.log(c) // this will throw error

    // this is reassigning --> this is allowed to update the value of the variable
    let c = "hello"
    // console.log(c) 
    c = "bye" 
    // console.log(c) 

//2. Scoping --> block ke bahar bhi access kar sakte hai a ko
    // if(10%2==0){
    //     var a = 2
    //     console.log(a)
    // }    
    // console.log(a) 

    //Overcoming --> let keyword
    if(10%2==0){
        let r = 2 // yeh wala print hoga
        // console.log(r)
    } 

    // console.log(r) // yeh wala nhi hoga print

//3.Accessibility - variable declare karne se phele hi call kar sakte hai - 7_hoisting for more    


//CONST VARIABLE --> no redeclartion and no reassigning
    const p = 2;
    console.log(p);

//LOOPS
    // 1.FOR LOOP - Ex: PRIME NUMBER
    // var flag = true;
    // var num = 13;
    // for(var i = 2; i * i <= num; i++){
    //     if(num % i == 0){
    //         flag = false;
    //         break;
    //     }
    // }
    // if(flag == true){
    //     // console.log("Num is prime")
    // }
    // else{
    //     console.log("Num is not prime")
    // }

    //2.FOR IN LOOP --> 5_OBJECTS.JS   


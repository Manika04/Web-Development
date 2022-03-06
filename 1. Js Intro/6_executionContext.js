/* 22/1/22
    Js is synchronous single threaded language - meaning line by line code chalta hai

    EXECUTION CONTEXT - The environment where JS code is executed and Evaluated. yeh ek se zayada baar ban sakta hai.
    
    GLOBAL EXECUTION CONTEXT - by default an execution is provided from JS and that is known as global execution context in which whole code will reside. yeh ek baar hi banta hai.

    There are 2 sections :
        1. Memory Area - This was PHASE I
            here var a,b,sum1 and sum2 are key value pair
            var a : undefined
            var b : undefined
            func{
                body
            }
            sum1 : undefined
            sum2 : undefined

        2. Code Execution Area - PHASE II
            here variables ko value mil jayegi unki aur function ke liye ek naya execution context banega kyuki function ke andar ek variable hai and uske bhi yahi 2 phase honge
            

    1. https://www.javatpoint.com/javascript-execution-context
    2. https://medium.com/innovation-incubator/javascript-execution-context-c5d807d206f5  
*/ 

var a = 2;
var b = 3;

function add(m,n){
    var sum = m + n;
    return sum;
}

var sum1 = add(1,2); 
var sum2 = add(a,b); 

console.log(sum1); //3
console.log(sum2); //5
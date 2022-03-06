//NORMAL FUNCTION

    function sayHi(){
        console.log("Function says HI!")
    } // function declaration
    // sayHi() //function invokation

//PARAMETERS IN FUNCTION - EX: ADDING TWO NUM

    function add(a,b){ // a & b are parameters
        console.log("The sum is:",a+b)
    }
    // add(5,6) //5 & 6 are arguments 
    
    function product(a,b){
        console.log("The product is:",a*b)
    }
    // product(5,6)

//RETURN STATEMENT IN FUNCTIONS
    
    function diff(a,b){
        return (a-b)
    }
    // console.log(diff(5,3))
    let ans = diff(9,5);
    // console.log(ans)

//FUNCTIONS AS FIRST CLASS CITIZENS --> variables ko bhi call kar sakte hai function jaise i.e for js variable and functions are same or js variables aur functions mein anter nhi karta. You can assign a function to a variable and can call it. variable ke andar function create kar sakte hai.
    
    let sayHello = function(){
        console.log("Hello")
    }
    // sayHello() 

//IIFE(IMMEDIATELY INVOKED FUNCTION EXPRESSION) --> agar ek function ko ek baar hi call karna hai aur vahin karna hai tab IIFE use karege   

    let addition = (function(a,b){
        return a+b;
    })(4,3)
    console.log(addition)
//Arrow funtion is also know fat arrow functoion

let add = function(a, b){
    let sum = (a + b);
    console.log(sum);
}

add(3,4);

// converting above function into arrow function 
let add1 = (a, b) => {
    let sum1 = (a + b);
    console.log(sum1);
}

add1(3,4);

let regularFunc = function(){
    console.log("I am a regular function");
}
let regularFunc1 = function(name){
    console.log(`I am ${name}`);
}

let arrowFunc = () =>{
    console.log("I am a arrow function");
}

let arrowFunc1 = (name) =>{
    console.log(`I am ${name}`);
}

// regularFunc();
// regularFunc1("Adam");
// arrowFunc();
// arrowFunc1("Steve");

let person = {
    name: "adam",
    age: 27,

    showDetails : function(){
        console.log(this.name + " " + this.age);
    },

    showDetailsArrow :() => {
        console.log(this.name + " " + this.age);
    }
}

person.showDetails(); //adam 27
person.showDetailsArrow(); // undefined undefined

let test = () =>{
    console.log(this);
}
test(); //empty object 
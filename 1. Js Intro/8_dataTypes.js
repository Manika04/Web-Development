/* 
    There are 2 types of datatypes in JS:
    1. Primitive - number, string, boolean, undefined, null
    2. Non- Primitive(Reference) - objects, array 
*/


//PRIMITIVE
let a = 'Hello';
// console.log(a, typeof(a));

let b = 67.4;
// console.log(b, typeof(b));

let c = true;
// console.log(c, typeof(c));

let d = undefined;
// console.log(d, typeof(d));

let e = null;
// console.log(e, typeof(e)); //typeOf: object aayega- error hai-bug hai koi main js isliye aisa aata hai 



//CALL BY VALUE
let firstPerson1 = 'manika';
let secondPerson1 = firstPerson1;
firstPerson1 = 'chavi';
// console.log(firstPerson1); //chavi
// console.log(secondPerson1); //manika


//NON- PRIMITIVE(REFERENCE)
let arr = [1,2,3];
// console.log(arr, typeof(arr));

let obj = {
    name: "manika",
    age: 23
}
// console.log(obj, typeof(obj));

function greet(){
    console.log("hello");
}
// console.log(greet, typeof(greet));


//CALL BY REFERENCE
let firstPerson = {
    name: 'Manika',
    age: 22
}

let secondPerson = firstPerson;
firstPerson.name = 'chavi';

console.log(firstPerson);
console.log(secondPerson);




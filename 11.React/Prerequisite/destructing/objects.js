let obj = {
    name : 'Manika',
    state : 'Delhi',
    pincode : 110077
}

//destructing
// let {a, b, c} = obj; // we can to use oject ki keys to destructure
// console.log(a, b, c); //undefined undefined undefined

// let {name, state, pincode} = obj;
// let {state, name, pincode} = obj; // no change
// console.log(name, state, pincode);

//Nested obj
let obj1 = {
    name : 'Adam',
    address : {
        country : 'USA',
        state : {
            stateName : 'Texas',
            pincode : 122839
        }
    }
}

let {name} = obj1;
// let{address : {country}} = obj1;
let {address : {country : cd}} = obj1; //cd is alternative name
let {address : {state : {pincode}}} = obj1;

console.log(name);
// console.log(country);
console.log(cd);
console.log(pincode);
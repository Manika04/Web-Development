let arr = ['Hi', 'I', 'am', 'Manika'];

let a = arr[1]; //I
let b = arr[0]; //Hi

console.log(a);
console.log(b);

//Destructuring
// let [c, d, e, f] = arr;
// console.log(c, d, e, f);

// let [c, d,, f] = arr;
// console.log(c, d, f);

// let [c, d, e, f, g = "bye"] = arr;
let [c, d, e, f, g] = arr;
console.log(c, d, e, f, g);
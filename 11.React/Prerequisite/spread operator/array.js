//heap mein banti hai arr i.e uski values hongi([1, 2, 3, 4]) heap mein aur arr variable(arr, arr2) hoga stack mein and this variable arr will point to value in heap and arr2 bhi same cheez ko point karega isliye jab push karenge toh dono arr mein aa jayega element and this is know as access by refernce

let arr = [1, 2, 3, 4]; 
// let arr2 = arr;
let arr2 = [...arr]; //now 5 will not be pushed kyuki voh string mein hoke aa gaya hai and dusre memory address par chale jayega arr

arr.push(5);

//... -> spread operator
console.log(arr); //[1, 2, 3, 4, 5]

//[] hatt jayenge and now it will not treated as arr but as string
console.log(...arr); 

console.log(arr2); //[1, 2, 3, 4]
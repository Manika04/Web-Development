/* 22/1/22
    watch akshay saini's yt video

    TEMPORAL DEAD ZONE - it is just a area where if you try to access variables defined with let and const before their initialization you wont be able to do it.
                      OR
    let and const are hoisted, but there is a period between entering scope and being declared where they cannot be accessed. This period is the temporal dead zone (TDZ)

    https://medium.com/@Esakkimuthu/temporal-dead-zone-3dd6d3fbcbda
*/

console.log(a); //Undefined with var ; initialization error with let and const
greet();

var a = 2;
// let a = 2; // error dega upar wale console mein
function greet(){
    console.log("hello");
}

console.log(a);
greet();
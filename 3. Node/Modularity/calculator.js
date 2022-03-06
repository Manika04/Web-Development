function add(a,b){
    console.log("The sum is : ",a+b)
}
function sub(a,b){
    console.log("The difference is : ",a-b)
}
function mul(a,b){
    console.log("The product is : ",a*b)
}
function div(a,b){
    console.log("The quotient is : ",a/b)
}

//with this create our own module and can be used in different files
module.exports = {
    addition : add,
    subtract : sub,
    multiply : mul,
    division : div
}
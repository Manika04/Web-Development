let obj = {
    name : 'Adam',
    address : {
        country : 'USA',
        state : {
            stateName : 'Texas',
            pincode : 122839
        }
    }
}

//Nested objects ke liye bhi alag se spread operator use karna padega . Not an effective method
// let obj2 = {...obj, address : {...obj.address, state : {...obj.address.state}}}; //shallow copy

let obj2 = JSON.parse(JSON.stringify(obj)); //deep copy

obj.address.country = 'India';
obj.address.state.pincode = 11075;

console.log(obj);
console.log(obj2);
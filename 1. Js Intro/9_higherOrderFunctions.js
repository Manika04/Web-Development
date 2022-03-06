/*

    https://blog.bitsrc.io/understanding-higher-order-functions-in-javascript-75461803bad

    Higher order function are the functions that operate on other functions, either by taking them as arguments or by returning them.
    In simple words, A Higher-Order function is a function that receives a function as an argument or returns the function as output.
*/


let arr = [2,5,9,8,15,11,6];

//MAP FUNCTION - The map() method creates a new array by calling the callback function provided as an argument on every element in the input array. The map() method will take every returned value from the callback function and creates a new array using those values.

    let squareArr = arr.map(function squarer(val){
        return val * val;
    });

    // console.log(squareArr);
    // console.log(arr);

    let name = ['Manika','Nirjhar','chavi'];

    let nameArr = name.map(function(n){
        return n;
    });
    // console.log(nameArr);

    let fullName = ['Manika Saxena', 'Chavi Saxena','Nirjhar Saxena'];

    let fullNameArr = fullName.map(function(fn){
        let partsOfName = fn.split('');
        // let fName = partsOfName[0];
        // let lName = partsOfName[1];
        // return fName +". " + lName;
        return partsOfName;
    });

    // console.log(fullNameArr);

    const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];
    const inrtToUsd = 74;

    let conversion = transactions.map(function(money){
        // return money * inrtToUsd;
        return (money / inrtToUsd).toFixed(2);
        //To fixed bas 2 decimal place tak lega
    });
    // console.log(conversion);



//FILTER FUNCTION - The filter() method creates a new array with all elements that pass the test provided by the callback function i.e jahan par condition satsify ho rahi hai bas vohi elements new array mein aayege.

    let evenNoArr = arr.filter(function(n){
        if(n%2 == 0){
            return true;
        } 
        // return false;
    });

    // console.log(evenNoArr);

    let profit = transactions.filter(function(n){
        if(n > 0){
            return true;
        }
    });

    // console.log(profit);



//MAP-FILTER CHAIN
    let details = [
        {name: "A", age: 14, gender: "M"}, 
        {name: "B", age: 34, gender: "M"}, 
        {name: "C", age: 24, gender: "F"}, 
        {name: "D", age: 44, gender: "F"}, 
        {name: "E", age: 44, gender: "M"}, 
        {name: "I", age: 28, gender: "F"}, 
        {name: "G", age: 36, gender: "M"}, 
        {name: "H", age: 47, gender: "F"}
    ]

    let lage = details.filter(function(g){
        if(g.gender == 'F'){
            return true;
        }

    }).map(function(n){
        return n.age;
    });

    // let femaleAge = genderCheck.map(function(a){
    //     return a.age;
    // });
    // console.log(lage);


//FIND FUNCTION - same as filter but it does not return an array and returns the first element of an array that satisfy the given condition.
    const firstWithdrawl = transactions.find(function(n){
        return n < 0;
    });
    // console.log(firstWithdrawl);



//SOME FUNCTION - agar ek value bhi condition ko satisfy kar deti hai toh yeh true return kardega. It will return true if 1 or more than 1 element satisfies the condition
    let anyDeposit = transactions.some(function(n){
        return n > 0; //true
        // return n==0; //false
    });
    // console.log(anyDeposit);



//EVERY FUNCTION - every element should satisfy the condition
    let element = transactions.every(function(n){
        return n > 0;
    });
    // console.log(element); 
    
    
 
//REDUCE FUNCTION - takes 2 parameters accumulator and value  and will always give a single value
    let arr1 = [2,3,4,5,6];
    let add = arr1.reduce(function(sum, value){
        let updatedSum = sum + value;
        return updatedSum;
    }, 0);  //this 0 is initial value of sum and iski value change hoti rehgi i.e updateSum update hoke sum mein store ho raha hai
    // console.log(add);

    let mul = arr1.reduce(function(product, value){
        let updatedMul = product*value;
        return updatedMul;
    }, 1);

    // console.log(mul);


//FILTER - REDUCE CHAIN
    let positiveEle = transactions.filter(function(amt){
        return amt > 0;
    }).reduce(function(sum, value){
        return  sum + value;
    }, 0);
    // console.log(positiveEle);    

//REDUCE-RIGHT - Arr ki right side se start hoga  
    let sumFromRight = arr1.reduceRight(function(sum, value){
        updatedSumFromRight = sum + value;
        console.log(updatedSumFromRight);
        return updatedSumFromRight;
    }, 0);
    // console.log(sumFromRight);




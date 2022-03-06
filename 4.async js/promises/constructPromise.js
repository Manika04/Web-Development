/*
    ~ SYNTAX -> 
    let myPromise = new Promise(function(resolve, reject){
        //your code will go here
    });
    ~ resolve and reject are inbuilt callback functions/methods of promise.
*/

let promise = new Promise(function(resolve, reject){
    const a = "Manika";
    const b = "Manika"; //isse equal
    // const b = "manika"; //issse not equal aayega

    if(a == b){
        resolve(); //Yeh then ko call kardega jab resolve ho jayega i.e resolve is linked with then.
    }
    else{
        reject(); //reject is linked with catch
    }
});

// promise.then(function(){
//     console.log("a and b are equal");
// });

// promise.catch(function(){
//     console.log("a and b are not equal");
// });

promise.then(function(){
    console.log("a and b are equal");
}).catch(function(){
    console.log("a and b are not equal");
});


/*
    ANOTHER WAY 

    let promise = new Promise(function(resolve, reject){
        const a = "Manika";
        const b = "Manika";
        
        if(a == b){
            resolve("Yes they are equal"); 
        }
        else{
            reject("NO they are not equal"); 
        }
    });

    promise.then(function(data){
        console.log("Result coming from resolve Method -> " + data);
    }).catch(function(err){
        console.log("Result coming from reject Method -> " + err);
    });

*/
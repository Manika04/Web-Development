function placeOrder(drink){
    return new Promise(function(resolve, reject){
        if(drink === "coffee"){
            resolve('Order for coffee'); //order mein yeh pass hoga
        }
        else{
            reject('Order cannot be placed');
        }
    });
}

function processOrder(order){
    return new Promise(function(resolve){
        console.log("Order is being processed!");
        // resolve(`${order} Served`);
        resolve(order + ' Served');
    });
}

/*Promisified Solution
    placeOrder("coffee").then(function(demand){
        console.log(demand); //order for coffee is served
        let orderIsProcessed = processOrder(demand);
        return orderIsProcessed;
    }).then(function(orderServed){
        console.log(orderServed);
    }).catch(function(err){
        console.log(err); //order cannot be placed - reject
    });
*/

//ASYNC AWAIT SOLUTION
async function serveOrder(){
    try {
        let orderPlaced = await placeOrder("coffee");
        console.log(orderPlaced); //order for coffee

        let processedOrder = await processOrder(orderPlaced);
        console.log(processedOrder);
    } catch (error) {
        console.log(error);
    }
    
}

serveOrder();
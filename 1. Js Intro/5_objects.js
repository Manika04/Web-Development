//In JS objects are basically key value pair

//DECLARATION
    let obj = {}

//INITIALISATION    
    let person = {
        name: "Manika", //here 'name' is the key and string(manika) is the value
        age: 20,
        city: "Delhi"
    }    
    // console.log(person)
    

//ACCESSING A PROPERTY OF AN OBJECT    
    let cap = {
        firstName: "Steve",
        lastName: "Rogers",
        friends: ["Bucky", "Tony", "Dr Banner"],
        age: 102,
        isAvenger: true,
        address: { //nested object
            state: "Manhattan",
            city: "New York"
         },
        saysHi: function fn(){
            console.log("Captain says Hi")
        }
    } 

    // console.log(cap)
    // console.log(cap.firstName) //Dot Notation
    // console.log(cap['firstName']) //Bracket Notation
    // console.log(cap.address) //access a property of an object
    // console.log(cap.address.state) 
    // console.log(cap.friends[1])
    // cap.saysHi() //accessing function in object


//FOR IN LOOP --> since obj is not ordered therefore normal 'for' loop cannot be used thats why we use 'for in' loop to access each key in the object
//for every key in this object humne uski value nikal li
    for(let key in cap){
        console.log("key:",key, "value:",cap[key])
    }


//UPDATING THE VALUE IN OBJECT
    cap.isAvenger = false
    
//ADDING NEW PROPERTY TO THE OBJECT
    cap.movies = ["Age of ultron", "civil war"]    
    
//DELETE A PROPERTY
    delete cap.age    
    console.log(cap)


//Ques 1: Get the number of products whose price is atleast 100
const products = [
    { name: "T-Shirt", price: 25 },
    { name: "Headphones", price: 125 },
    { name: "Keyboard", price: 75 },
    { name: "Monitor", price: 200 },
];

//SOLUTION
    let price = products.filter(function(p){
        if(p.price >= 100){
            return true;
        }
    }).map(function(pr){
        return pr.price;
    }).length;

    // console.log(price);



/*Ques 2 : Get the movie Names from this Array of Objects
method and only get the movie name which has rating higher than or equal to 8*/

var newReleases = [
    {"id": 1,"title": "Die Hard","rating":9},
    {"id": 2,"title": "Bad Boys","rating":7},
    {"id": 3,"title": "The Chamber","rating": 10},
];

//SOLUTION
    let rating = newReleases.filter(function(r){
        if(r.rating >= 8){
            return true;
        }
    }).map(function(m){
        return m.title;
    })

    // console.log(rating);



//Ques 3 : You have to use map function and have to get all the students name in upperCase
let studentRecords = [ 
    {name: 'Abhishek', id: 123, marks : 98 },
    {name: 'Udai', id: 101, marks : 90 },
    {name: 'Himanshu', id: 200, marks : 96 },
    {name: 'Mrinal', id: 115, marks : 75 } 
];

//SOLUTION
    let ucName = studentRecords.map(function(s){
        return s.name.toUpperCase();
    })

    console.log(ucName);



//Ques 4 : Retrieve the details of students who scored more than 50 marks and have id greater than 120 from studentRecord 

//SOLUTION
    let details = studentRecords.filter(function(m){
        return m.marks >= 50 && m.id > 120
    });

    console.log(details);

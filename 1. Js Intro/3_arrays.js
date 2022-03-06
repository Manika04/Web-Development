//Array provides you an ordered collection of elements

let arr = []; //array declaration

let cars = ["ferrari", 2, true, 'Maruti'] //array initialized
// console.log("This is cars array:",cars);

//ACCESING THE ELEMENTS OF AN ARRAY
    // console.log(cars[0])
    // console.log(cars[1])

//1.REPLACE AN ELEMENT
    cars[1] = "Audi"
    // console.log(cars)

//2.ADD A NEW ELEMENT
    cars[4] = "Mercedes"
    // console.log(cars)
    cars[7] = "Tesla" 
    // console.log(cars) //beeche ke 2 items mein print ho jayega ki 2 empty spaces

//3.LENGTH OF ARRAY        
    // console.log(cars.length)



//ARRAY METHODS
    //1.pop METHOD() - This method removes the last element from the array
        // cars.pop()    
        // console.log(cars)

    //2.push METHOD() - This method adds an element at the end of the array
        // cars.push("Rolls Royce")
        // console.log(cars)    

    //3.shift METHOD() - This removes the element from the starting of an array
        // cars.shift()
        // console.log(cars)
        
    //4.unshift METHOD() - This adds element on 0th index
        // cars.unshift('Swift')    
        // console.log(cars)

    //5.slice METHOD() -  returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
        //cars.slice(0,1);
        // console.log(cars);
        
    //6.splice METHOD() - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
        // cars.splice(0,1);
        // console.log(cars);



//2D ARRAYS - MULTIDIMENSIONAL ARRAYS
    let matrix = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]   
    // console.log(matrix[0][1])     
    // console.log(matrix[1][2])     

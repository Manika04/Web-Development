//This is contructor function
function cars(name, model, color){
    this.name = name
    this.model = model
    this.color = color

    this.test = function(){
        console.log(`I am driving ${this.model}`)
    }
}

//new keyword gives "this" an empty object or returns an empty object. 
let car1 = new cars("Honda", "Honda City", "Black", );
let car2 = new cars("Maruti", "800", "white", );
console.log(car1);
car1.test();
console.log(car2);




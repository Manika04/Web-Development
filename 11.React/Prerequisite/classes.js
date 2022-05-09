//CLASSES IN JAVASCRIPT - used as/is a template of object
//contructor is an inbuilt function of JS

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    //function can be written inside class without specifying the 'function' keyword
    welcome(){
        console.log("Welcome " + this.name);
    }
}

//Inheritance
class Teacher extends Person{
    constructor(name, age, classStrength){
        // this.name = name;
        // this.age = age;

        //super() - fetches the argument from parent class
        super(name, age); 
        this.classStrength = classStrength;
    }
}

class Student extends Person{
    constructor(name, age, gpa){
        // this.name = name;
        // this.age = age;
        super(name, age);
        this.gpa = gpa;
    }
    hello(){
        super.welcome();
    }
}

let person1 = new Person("Adam", 27);
let teacher1 = new Teacher("Steve", 40, 30);
let student1 = new Student("Mark", 20, 9);

console.log(person1);
console.log(teacher1);
console.log(student1);

person1.welcome();
student1.hello();


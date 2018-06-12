class Greeter{
    greetMessage: string;

    constructor(message: string){
        this.greetMessage = message;
    }

    greet(){
        console.log(this.greetMessage);
    }
    greetForPrice(msg: string){
        console.log(msg);
    }
}

let obj = new Greeter("New Message");
obj.greet();

//Inheritance

class Animal{
    move(distance: number =0){
        console.log("Animal moved at "+distance);
    }
}

class Dog extends Animal{ // Dog is inheriting the property of Animal 
    bark(){
        console.log('Barking!');
    }
}
let dogobj = new Dog();
dogobj.bark();
dogobj.move(12);

//How to override methods in the base class with methods that are specialized for the subclass
class FirstPrice extends Greeter{
    constructor(message: string){
        super(message); // Calls the constructor of the base class
    }
    greet(msg: string = "First"){
        console.log('1st Price');
        super.greetForPrice(msg); 
    }
}

class SecondPrice extends Greeter{
    constructor(message: string){
        super(message); // Calls the constructor of the base class
    }
    greet(msg: string = "Second"){
        console.log('2st Price');
        super.greetForPrice(msg);
    }
}

let fpObj = new FirstPrice("Roll 1");
fpObj.greet();

let spObj: Greeter = new SecondPrice("Roll 2");
spObj.greet();

//Readonly modifier
class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor (theName: string) {
        this.name = theName;
    }
}
let dad = new Octopus("Man with the 8 strong legs");
//dad.name = "Man with the 3-piece suit"; // error! name is readonly.

//Parameter properties
//Parameter properties let you create and initialize a member in one place.
class Octopus2 {
    readonly numberOfLegs: number = 8;
    constructor(readonly name: string) {
    }
}

//Abstract Classes
/*Abstract classes are base classes from which other classes may be derived. 
They may not be instantiated directly. Unlike an interface, an abstract class may contain implementation details for its members. 
The abstract keyword is used to define abstract classes as well as abstract methods within an abstract class.*/

abstract class Department{
    constructor(public name: string){
    }
    printName(){
        console.log('Department Name is: '+this.name)
    }
    abstract printMeeting() : void;
}

class AccountingDepartment extends Department{
    constructor(){
        super("Accounting & Audit");
    }
    printMeeting(): void { //Implementing the abstratct method
        console.log("The Accounting Department meets each Monday at 10am.");
    }

    generateReports(): void {
        console.log("Generating accounting reports...");
    }
}
let department: Department; // ok to create a reference to an abstract type
//department = new Department(); // error: cannot create an instance of an abstract class
department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
department.printName();
department.printMeeting();
//department.generateReports(); // error: method doesn't exist on declared abstract type
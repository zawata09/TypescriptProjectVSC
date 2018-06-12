"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greetMessage = message;
    }
    Greeter.prototype.greet = function () {
        console.log(this.greetMessage);
    };
    Greeter.prototype.greetForPrice = function (msg) {
        console.log(msg);
    };
    return Greeter;
}());
var obj = new Greeter("New Message");
obj.greet();
//Inheritance
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function (distance) {
        if (distance === void 0) { distance = 0; }
        console.log("Animal moved at " + distance);
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log('Barking!');
    };
    return Dog;
}(Animal));
var dogobj = new Dog();
dogobj.bark();
dogobj.move(12);
//How to override methods in the base class with methods that are specialized for the subclass
var FirstPrice = /** @class */ (function (_super) {
    __extends(FirstPrice, _super);
    function FirstPrice(message) {
        return _super.call(this, message) || this;
    }
    FirstPrice.prototype.greet = function (msg) {
        if (msg === void 0) { msg = "First"; }
        console.log('1st Price');
        _super.prototype.greetForPrice.call(this, msg);
    };
    return FirstPrice;
}(Greeter));
var SecondPrice = /** @class */ (function (_super) {
    __extends(SecondPrice, _super);
    function SecondPrice(message) {
        return _super.call(this, message) || this;
    }
    SecondPrice.prototype.greet = function (msg) {
        if (msg === void 0) { msg = "Second"; }
        console.log('2st Price');
        _super.prototype.greetForPrice.call(this, msg);
    };
    return SecondPrice;
}(Greeter));
var fpObj = new FirstPrice("Roll 1");
fpObj.greet();
var spObj = new SecondPrice("Roll 2");
spObj.greet();
//Readonly modifier
var Octopus = /** @class */ (function () {
    function Octopus(theName) {
        this.numberOfLegs = 8;
        this.name = theName;
    }
    return Octopus;
}());
var dad = new Octopus("Man with the 8 strong legs");
//dad.name = "Man with the 3-piece suit"; // error! name is readonly.
//Parameter properties
//Parameter properties let you create and initialize a member in one place.
var Octopus2 = /** @class */ (function () {
    function Octopus2(name) {
        this.name = name;
        this.numberOfLegs = 8;
    }
    return Octopus2;
}());
//Abstract Classes
/*Abstract classes are base classes from which other classes may be derived.
They may not be instantiated directly. Unlike an interface, an abstract class may contain implementation details for its members.
The abstract keyword is used to define abstract classes as well as abstract methods within an abstract class.*/
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log('Department Name is: ' + this.name);
    };
    return Department;
}());
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, "Accounting & Audit") || this;
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log("The Accounting Department meets each Monday at 10am.");
    };
    AccountingDepartment.prototype.generateReports = function () {
        console.log("Generating accounting reports...");
    };
    return AccountingDepartment;
}(Department));
var department; // ok to create a reference to an abstract type
//department = new Department(); // error: cannot create an instance of an abstract class
department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
department.printName();
department.printMeeting();
//department.generateReports(); // error: method doesn't exist on declared abstract type

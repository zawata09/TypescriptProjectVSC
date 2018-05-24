"use strict";
//Basic types
//Basic Types in Typescript
//Boolean type
var isDone = false;
//Number Type
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
//String
var color = "blue";
color = 'red';
/*You can also use template strings, which can span multiple lines and have embedded expressions.
These strings are surrounded by the backtick/backquote (`) character, and embedded expressions are of the form ${ expr }.*/
var fullName = 'Mr. ABC';
var age = 23;
var greet = "Name is " + fullName + " and age is " + age;
//Array
var list = [1, 2, 3];
var strList = ['1', '2', '3'];
var numberList = [12, 13, 14];
//Tuple
/*Tuple types allow you to express an array where the type of a fixed number of elements is known, but need not be the same. For example,
you may want to represent a value as a pair of a string and a number*/
var x;
x = ['A', 1];
console.log(x[0].substr(1));
//console.log(x[1].substr(1))  //Will show error
//Enum is a way of giving more friendly names to sets of numeric values.
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {})); //default value is 0,1,2
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 1] = "Red";
    Color1[Color1["Green"] = 2] = "Green";
    Color1[Color1["Blue"] = 3] = "Blue";
})(Color1 || (Color1 = {})); //Assign value from 1..
var colorValue = Color1.Red; //Will show 1 as value of Red is 1
var colorName = Color1[2]; //Will show green
//Any [We will use it when we don't know the type of variable]
var anyName = 'String value';
anyName = 1;
anyName = true;
var anyList = [1, 'str', false]; //mix of different types
anyList[1] = true;
/* any Vs Object */
var notSure = 4;
//notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)
var prettySure = 4;
//prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.
//Void [When no return type is needed]
function showInformation() {
    alert('Hello!');
}
var voidVar1 = undefined; //Only undefined can be assigned to a void type variable
//Undefined or Null type variable
var undefinedVar = undefined; //[Can not assign other type of value]
var nullVar = null; //[Can not assign other type of value]
//Never [represents the type of values that never occur]
function showError() {
    return errorFunction("Error Occured!");
}
// Function returning never must have unreachable end point
function errorFunction(msg) {
    throw new Error(msg);
}
function infiniteLoop() {
    while (true) {
    }
}
//Type Assertion [like type cast]
var someValue = 'Hello Everyone!';
var strLength = someValue.length;
function showResultInPage() {
    document.getElementById("basic").innerHTML = "" + someValue;
}
console.log(showResultInPage());

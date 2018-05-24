//Basic types
//Basic Types in Typescript

//Boolean type
let isDone: boolean = false;

//Number Type
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

//String
let color: string = "blue";
color = 'red';

/*You can also use template strings, which can span multiple lines and have embedded expressions. 
These strings are surrounded by the backtick/backquote (`) character, and embedded expressions are of the form ${ expr }.*/
let fullName: string = 'Mr. ABC'
let age: number =23
let greet: string = `Name is ${fullName} and age is ${age}`

//Array
let list : number[] =[1,2,3]
let strList : string[] =['1','2','3']
let numberList : Array<number> = [12,13,14]

//Tuple
/*Tuple types allow you to express an array where the type of a fixed number of elements is known, but need not be the same. For example, 
you may want to represent a value as a pair of a string and a number*/

let x :[string,number]
x=['A',1]
console.log(x[0].substr(1))
//console.log(x[1].substr(1))  //Will show error

//Enum is a way of giving more friendly names to sets of numeric values.

enum Color {Red, Green, Blue} //default value is 0,1,2
enum Color1 {Red =1, Green=2, Blue =3} //Assign value from 1..
let colorValue: Color1 = Color1.Red //Will show 1 as value of Red is 1
let colorName: string = Color1[2] //Will show green

//Any [We will use it when we don't know the type of variable]
let anyName: any ='String value'
anyName=1
anyName=true
let anyList : any = [1,'str',false] //mix of different types
anyList[1] = true;

/* any Vs Object */
let notSure: any = 4;
//notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

let prettySure: Object = 4;
//prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.

//Void [When no return type is needed]
function showInformation(): void{
    alert('Hello!');
}

let voidVar1: void = undefined //Only undefined can be assigned to a void type variable

//Undefined or Null type variable
let undefinedVar : undefined = undefined; //[Can not assign other type of value]
let nullVar : null = null; //[Can not assign other type of value]

//Never [represents the type of values that never occur]
function showError(){
    return errorFunction("Error Occured!")
}

// Function returning never must have unreachable end point
function errorFunction(msg:string): never{
    throw new Error(msg)
}
function infiniteLoop(): never {
    while (true) {
    }
}

//Type Assertion [like type cast]
let someValue: string ='Hello Everyone!'
let strLength: number = (<string>someValue).length;

function showResultInPage(){
    document.getElementById("basic")!.innerHTML = ""+someValue
}
console.log(showResultInPage());//Show result in index.html page
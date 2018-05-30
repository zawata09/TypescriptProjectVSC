//let can be used for block-scoping [block-scoped variables are not visible outside of their nearest containing block]
function f(input: boolean){
    let a =12;
    if(input){
        let b = a + 8;
        return b;
    }
    //return b; [Will show error becauese its out of scope]
}

function sleepCity(){
    let checkCity;
    if(true){
        let city ='Bangladesh';
        checkCity = function(){
            return city;
        }
    }
    return checkCity();
}

//const [value cannot be changed once they are bound]
const numberOfKitties = 10;
const kitty = {
    name: 'All Cats',
    numLives: numberOfKitties
}
//[Will show error as we cant change const value]
/*kitty = {
    name: 'All Cats',
    numLives: numberOfKitties
}*/
kitty.name ='New';
kitty.numLives--;

//Array Destructuring
let input =[1,2]
let [first, second] = input
console.log(first);
console.log(second);

let numberItems = [1,2,3,4,5,6]
let [first1, ...rest] = numberItems;
console.log(first1);
console.log(rest);

//Object destructuring
let o = {
        a:'Q',
        b:2,
        c: true
}
let {a,b} =o; 
console.log(a);
console.log(b);

//assignment without declaration
({ a, b } = { a: "baz", b: 101 });

//Function declarations
type C = {a:string, b:number}
function g({a,b}:C): void {

}

//Spread [Is a operator opposite of destructing]
let firstN =[2,3,4]
let lastN =[7,8,9]
let combined=[1, ...firstN, 5,6, ...lastN ]
console.log(combined);
"use strict";
//let can be used for block-scoping [block-scoped variables are not visible outside of their nearest containing block]
function f(input) {
    var a = 12;
    if (input) {
        var b_1 = a + 8;
        return b_1;
    }
    //return b; [Will show error becauese its out of scope]
}
function sleepCity() {
    var checkCity;
    if (true) {
        var city_1 = 'Bangladesh';
        checkCity = function () {
            return city_1;
        };
    }
    return checkCity();
}
//const [value cannot be changed once they are bound]
var numberOfKitties = 10;
var kitty = {
    name: 'All Cats',
    numLives: numberOfKitties
};
//[Will show error as we cant change const value]
/*kitty = {
    name: 'All Cats',
    numLives: numberOfKitties
}*/
kitty.name = 'New';
kitty.numLives--;
//Array Destructuring
var input = [1, 2];
var first = input[0], second = input[1];
console.log(first);
console.log(second);
var numberItems = [1, 2, 3, 4, 5, 6];
var first1 = numberItems[0], rest = numberItems.slice(1);
console.log(first1);
console.log(rest);
//Object destructuring
var o = {
    a: 'Q',
    b: 2,
    c: true
};
var a = o.a, b = o.b;
console.log(a);
console.log(b);
//assignment without declaration
(_a = { a: "baz", b: 101 }, a = _a.a, b = _a.b);
function g(_a) {
    var a = _a.a, b = _a.b;
}
//Spread [Is a operator opposite of destructing]
var firstN = [2, 3, 4];
var lastN = [7, 8, 9];
var combined = [1].concat(firstN, [5, 6], lastN);
console.log(combined);
var _a;

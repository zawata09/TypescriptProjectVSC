"use strict";
function printLabel(obj) {
    console.log(obj.label);
}
var mainObj = { name: 'A', label: 'new' };
printLabel(mainObj);
function createSquare(config) {
    var newObject = { color: 'white', area: 100 };
    if (config.color)
        newObject.color = config.color;
    if (config.width)
        newObject.area = config.width * config.width;
    return newObject;
}
var mySquare = createSquare({ color: "red", width: 100 });
var mySquare2 = createSquare({ width: 100, colour: '3434' });
var p1 = { x: 10, y: 20 };
//p1.x = 5; // error!
var arr = [1, 2, 3];
var arrRO = arr; //Assign readonly array
//arrRO[0] ='' [Error]
//arrRO.push(7) [Error]
arr = arrRO; //Retrival of readonly array to normal array
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
var DigitalClock = /** @class */ (function () {
    function DigitalClock(h, m) {
    }
    DigitalClock.prototype.tick = function () {
        console.log("beep beep");
    };
    return DigitalClock;
}());
var AnalogClock = /** @class */ (function () {
    function AnalogClock(h, m) {
    }
    AnalogClock.prototype.tick = function () {
        console.log("tick tick");
    };
    return AnalogClock;
}());
function createClock(obj, hour, minute) {
    return new obj(hour, minute);
}
var digital = createClock(DigitalClock, 12, 17);
var analog = createClock(AnalogClock, 7, 32);
var square = {};
square.color = 'RED';
square.length = 12;
square.angle = 45;

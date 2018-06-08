interface labelValue{
    label: string
}

function printLabel(obj: labelValue){
    console.log(obj.label);
}

let mainObj = {name:'A', label:'new'};
printLabel(mainObj);

//Optional Properties
interface SquareConfig{
    color?: string; //optional property denoted by a ?
    width?: number;
}

function createSquare(config: SquareConfig): {color: string, area: number}{
    let newObject = {color:'white', area: 100}
    
    if(config.color)
    newObject.color = config.color;
    
    if(config.width)
    newObject.area = config.width * config.width;

    return newObject
}
let mySquare = createSquare({ color: "red", width: 100 });
let mySquare2 = createSquare({ width: 100, colour: '3434' } as SquareConfig);

//Readonly properties
interface Point {
    readonly x: number;
    readonly y: number;
}
let p1: Point = { x: 10, y: 20 };
//p1.x = 5; // error!

let arr :number[]=[1,2,3]
let arrRO : ReadonlyArray<number> = arr //Assign readonly array
//arrRO[0] ='' [Error]
//arrRO.push(7) [Error]

arr = arrRO as number[]; //Retrival of readonly array to normal array

//Function Types
interface searchFunction{
    (source :string, subStr: string): boolean;
}
let mySearch : searchFunction;
mySearch = function(source: string, subString: string){
    let result = source.search(subString);
    return result >-1
}

//Class Types
// interface ClockInterface{
//     currentDate : Date;
//     setTime(d: Date): any;
// }

// class Clock implements ClockInterface{
//     currentDate : Date;
//     setTime(d: Date){
//         this.currentDate =d;
//     }
//     constructor(h: number, m: number){}
// }

//Sample program
interface ClockInterface{
    tick(): any;
}
interface ClockConstructor{
    new (hour: number, minute: number): ClockInterface
}
class DigitalClock implements ClockInterface{
    constructor(h: number, m:number){}
    tick(){
        console.log("beep beep")
    }
}

class AnalogClock implements ClockInterface{
    constructor(h: number, m:number){}
    tick(){
        console.log("tick tick")
    }
}
function createClock(obj:ClockConstructor, hour : number, minute: number): ClockInterface{ //constructor function createClock that creates instances of the type that is passed to it
    return new obj(hour,minute);
}
let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);

//Extending Interfaces
interface Shape{
    color: string
} 
interface Degree{
    angle: number
}
interface Square extends Shape, Degree{ //Multiple extends
    length: number
}
let square = <Square> {};
square.color='RED';
square.length =12;
square.angle =45;
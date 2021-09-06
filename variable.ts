let apples: number =5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined =undefined;

// built in objects
let now: Date = new Date()

now.getFullYear

//array
let color: string[] =['red', 'green', 'blue', 'indigo', 'violet'];
let myNumbers: number[] = [1, 2, 3, 4, 5]
let truths: boolean[]= [true, true, true, false, false]

//classes
class Car {

}
let ride: Car = new Car();
//object literals
let point: { x:number; y:string; z:boolean} = {
 x: 10,
 y: 'olamide',
 z: true
}

//FUNCTION
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

//when to use annotations
// 1) Functions that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: {x:number; y:number} = JSON.parse(json);
console.log(coordinates); //it will return something like this= {x: 10, y: 20};

//When we declare a variable on one line 
//and initialize it later
let words = ['red', 'blue', 'green', 'indigo', 'violet']
let foundWord: boolean

for (let i = 0; i<words.length; i++) {
  if(words[i] === 'green'){
    foundWord = true
  }
}

//3) Variable whos type cannot be infered correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for(let i=0; i<numbers.length; i ++) {
  if(numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}


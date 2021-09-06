const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date(),];

//we add an annotation to an array wehn there is nothing in the content when we initialize it
const cars: string[] = [];

const carsByMake: string[][] = [
['f150'],
['corolla'],
['camaro']
];

//Help with inference when extracting values
const car = carMakers[0]; // to bring out the first one 'ford'
const myCar = carMakers.pop(); // to remove the last one 'chevy'

//2) Help with incompatible values
carMakers.push(100); //inidicating here that carMMaker consist of string and we can not add a number type to it

//3) Help with the map and other functions of an aray and gives us access to various method
carMakers.map((car: string): string => {
 return car.toUpperCase()
})

//4)Flexibility for two or more types
const importantDates: (Date | string )[] = [new Date(), '2021-13-09']
importantDates.push('2030-10-11'); //we can add the string type
importantDates.push(new Date());
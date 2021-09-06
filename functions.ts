const add= (a:number , b:number) : number => {
return a + b;
}

const subract = (a:number, b:number):number  => {
  return a-b;
}

function divide(a: number, b:number): number {
  return a/b;
}
console.log(divide(25, 5))
const logger = (message: string): void => {
  console.log(message);
};

const throwError = (message: string): void => {
  if(!message) {
  throw new Error(message);
  }
};

//DESTRUCTURING
const todayWeather = {
  date: new Date(),
  weather: 'sunny'
}

const logWeather =({date, weather } : { date: Date, weather: string}): void => {
console.log(date);
console.log(weather);
};

logWeather(todayWeather);
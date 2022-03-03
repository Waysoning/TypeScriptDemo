const add = (a: number, b: number): number => {
  return a + b;
};

// why need to specify the type of value returned
const subtract = (a: number, b: number) => {
  a - b;
};

function divide(a: number, b: number): number {
  return a / b;
};

const multify = function(a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
  // return null;
  // return undefined;
};

// never expected something to return
const throwError = (message: string): never => {
  throw new Error(message);
};

const throwError2 = (message: string): void => {
  if(!message){
    throw new Error(message);
  }
};

// 
const todayWeather = {
  date: new Date(),
  weather: 'sunny'
}

const logWeather = (forecast: { date: Date, weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

const logWeather2 = ({date, weather}: { date: Date, weather: string }): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todayWeather);
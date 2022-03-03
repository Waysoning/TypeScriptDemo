const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const carMakers2 = ['ford', 'toyota', 'chevy'];
const carMakers3: string[] = [];

const dates = [new Date(), new Date()];

const carsByMake = [
  ['f150'],
  ['corolla'],
  ['camaro']
];

const carsByMake2: string[][] = [];

// help with inference when extracting values
const car1 = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
// carMakers.push(100);

// help with map
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates = [new Date(), '2022-3-2'];
const importantDates2: (Date | string)[] = [new Date(), '2022-3-2'];
importantDates.push('2030-1-1');
importantDates.push(new Date());
// importantDates.push(100);
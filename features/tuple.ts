const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

// Type alias
type Drink = [string, boolean, number];

// the order is important
const pepsi: [string, boolean, number] = ['brown', true, 40];
const sprite: Drink = ['brown', false, 40];

const carSpecs: [number, number] = [400, 3354];

const carStats = {
  horsepower: 400,
  weight: 3354
};
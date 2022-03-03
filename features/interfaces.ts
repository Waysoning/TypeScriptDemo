interface Report {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
  brand: 'toyota' // more properties is ok
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `$ {this.color}`
  }
}

const printSummary = (item: Report): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);
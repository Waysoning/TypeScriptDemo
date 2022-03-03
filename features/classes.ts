class Vehicle {


  // color: string = 'red';
  // constructor(color: string) {
  //   this.color = color;
  // }
  constructor(public color: string){}



  // default public
  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

class Car extends Vehicle{

  constructor(public wheels: number, color: string) {
    super(color);
  }

  // cannot change the modifier
  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

// const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();

const car = new Car(4, 'green');
car.startDrivingProcess();
// car.honk();
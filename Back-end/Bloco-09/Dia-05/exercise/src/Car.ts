import { ICar } from "./IVehicle";

export default class Car implements ICar {
  drive(): void {
    console.log('This car is moving for a long time');
  }

  fly(): void {
    throw new Error('This car don\'t fly');
  }
}
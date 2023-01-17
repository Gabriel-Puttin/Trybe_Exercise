import { IFly } from "./IVehicle";

export default class AirPlane implements IFly {
  drive(): void {
    throw new Error('This airplane don\'t move');
  }

  fly(): void {
    throw new Error('This airplane had already been flown for a long time');
  }
}
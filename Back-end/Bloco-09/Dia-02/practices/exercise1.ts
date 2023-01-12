export default class Person {
  private _name: string;
  private _birthDate: Date;

  constructor(name: string, birthDate: Date) { 
    this._name = name;
    this._birthDate = birthDate;
   }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if(value.length < 3) {
      throw new Error('Nome deve ter no mínimo 3 caracteres');
    }
    this._name = value
  }

  static getAge(value: Date): number {
    const diff = Math.abs(new Date().getTime() - value.getTime());
    const yearMs = 31_536_000_000;
    return Math.floor(diff / yearMs);
  }

  get birthDate(): Date {
    return this._birthDate;
  }

  set birthDate(value: Date) {
    if(value.getTime() > new Date().getTime()) {
      throw new Error('Não pode ser uma data futura');
    }
    if(Person.getAge(value)) throw new Error('A pessoa não pode ter mais de 120 anos');
    this._birthDate = value;
  }
}
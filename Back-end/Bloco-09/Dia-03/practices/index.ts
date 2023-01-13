class Animal {
  constructor(public name: string) { }
  move() { console.log(`${this.name} está se movendo.`); }
}
class Bird extends Animal {
  move() {
    super.move();
    console.log(`${this.name} está voando.`);
  }
}
class Mammal extends Animal {
  move() { console.log(`${this.name} está andando.`); }
}

const a = new Animal('Tubarão');
const b = new Bird('Papagaio');
const m = new Mammal('Tatu');

const myMove = (animal: Animal) => {
  animal.move();
}
myMove(a);
myMove(b);
myMove(m);
//-------------------------------------------------------------------------------------------------------------------------------------------------------

class Employee {
  private static employeeCount = 0
  constructor(public name: string) {
    Employee.addEmployee();
  }
  private static addEmployee() {
    this.employeeCount += 1;
  }
  static get employees() {
    return this.employeeCount;
  }
}
console.log(Employee.employees);
const e1 = new Employee('Ronald');
console.log(Employee.employees);
const e2 = new Employee('Cíntia');
console.log(Employee.employees);
//-------------------------------------------------------------------------------------------------------------------------------------------------------
// abstract class Character {
//   talk(): void {  };
//   specialMove(): void {  };
// }

// class MeleeCharacter extends Character {
//   constructor(public name: string) { super() }

//   talk(): void {
//     console.log('Eu sou um atacante de curto alcance');
//   }
//   specialMove(): void {
//     console.log('Meu ataque especial é soco normais consecutivos');
//   }
// }

// class LongCharacter extends Character {
//   constructor(public name: string) { super() }

//   talk(): void {
//     console.log('Eu sou um atacante de longo alcance');
//   }
//   specialMove(): void {
//     console.log('Meu ataque especial é hasengan');
//   }
// }

// const funcMain = (char: Character) => {
//   char.talk();
//   char.specialMove();
// }

// const naruto = new LongCharacter('Naruto Uzukraque');
// const saitama = new MeleeCharacter('Cabeça de ovo');
// funcMain(naruto);
// funcMain(saitama);
//-------------------------------------------------------------------------------------------------------------------------------------------------------
interface Person {
  id: number;
  name: string;
  showIdentification(): void;
}

class PhysicalPerson implements Person {
  private static lastId = 0;
  private _name;
  private _id;
  private _cpf;

  constructor(name: string, cpf: string) {
    this._id = PhysicalPerson.newId();
    this._name = name;
    this._cpf = cpf;
  }

  private static newId() { return this.lastId++; }
  get id() { return this._id; }
  get name() { return this._name; }
  get cpf() { return this._cpf; }
  showIdentification() { console.log(this.id, this._cpf); }
}

class LegalPerson implements Person {
  private static lastId = 0;
  private _name;
  private _id;
  private _cnpj;

  constructor(name: string, cnpj: string) {
    this._id = LegalPerson.newId();
    this._name = name;
    this._cnpj = cnpj;
  }

  private static newId() { return this.lastId++; }
  get id() { return this._id; }
  get name() { return this._name; }
  get cnpj() { return this._cnpj; }
  showIdentification() { console.log(this.id, this._cnpj); }
}

const pp0 = new PhysicalPerson('John', '123456789');
const pp1 = new PhysicalPerson('Jenny', '987654321');
const lp = new LegalPerson('International Sales SA', '834729384723');

const showIdentification = (person: Person) => {
  person.showIdentification();
}
showIdentification(pp0);
showIdentification(pp1);
showIdentification(lp);
//-------------------------------------------------------------------------------------------------------------------------------------------------------
class Contract<T> {
  static _number = 0;
  constructor(public broken: T) { }
  static get number() { return this._number }
}

const c1 = new Contract(pp0);
console.log(c1.broken.cpf);

const c2: Contract<LegalPerson> = new Contract(lp);
console.log(c2.broken.cnpj);
//-------------------------------------------------------------------------------------------------------------------------------------------------------
interface Character {
  name: string;
  specialMove: string;
}

interface DbCharacter extends Character {
  id: number;
}

const db: DbCharacter[] = [];

interface Imodel {
  create: (char: Character) => Promise<DbCharacter>;
  read: () => Promise<DbCharacter[]>;
  update: (id: number, char: Character) => Promise<DbCharacter>;
  delete: (id: number) => Promise<Boolean>;
}

class LocalDbModel implements Imodel {
  create = async (character: Character) => {
    const lastId = db.length > 0 ? db[db.length - 1].id : 0;
    const newCharacter = { id: lastId + 1, ...character };
    db.push(newCharacter);
    return newCharacter;
  };

  read = async () => db;

  findIndexById = (id: number) => {
    const index = db.findIndex((character) => character.id === id);
    if (index < 0) throw new Error('Character not found');
    return index;
  };

  update = async (id: number, character: Character) => {
    const indexToUpdate = this.findIndexById(id);
    db[indexToUpdate] = { ...db[indexToUpdate], ...character };
    return db[indexToUpdate];
  };

  delete = async (id: number) => {
    const indexToDelete = this.findIndexById(id);
    const deletedItem = db.splice(indexToDelete, 1);
    if (deletedItem.length > 0) return true;
    return false;
  };

};

class CharacterService {
  constructor(readonly model: LocalDbModel) { }

  async create(character: Character) {
    const newCharacter = await this.model.create(character);
    return ({ status: 201, data: newCharacter });
  }

  async read() {
    const allCharacter = await this.model.read();
    return ({ status: 200, data: allCharacter });
  }

  async update(id: number, character: Character) {
    const updateCharacter = await this.model.update(id, character);
    return ({ status: 201, data: updateCharacter });
  }

  async delete(id: number) {
    const idCharacter = await this.model.delete(id);
    return ({ status: 200, data: idCharacter });
  }
}

class MockDbModel implements Imodel {
  async create(character: Character) {
    console.log('character created');
    return { id: 1, name: 'Peach', specialMove: 'Toad' };
  }

  async read() {
    console.log('character created');
    return [{ id: 1, name: 'Peach', specialMove: 'Toad' }];
  }

  async update(id: number, character: Character) {
    console.log('character updated');
    return { id: 1, name: 'Yoshi', specialMove: 'Egg Lay' };
  }

  async delete(id: number) {
    console.log('character deleted');
    return true;
  }
}
//-------------------------------------------------------------------------------------------------------------------------------------------------------
class Animal {
  /*
    Ao invés de declarar os atributos antes do construtor, receber parâmetros
    no construtor e colocá-los nos atributos da classe, se não formos
    validar, podemos utilizar uma forma simplificada de escrita, simplesmente
    colocando o modificador de visibilidade na frente
    do nome do parâmetro no construtor
 
    Exemplo
    O seguinte código:
 
    public x: number
    constructor(x: number) { this.x = x }
 
    Pode ser substituído por:
 
    constructor(public x: number) { }
    
    Obs: Usando essa sintaxe é necessário indicar explicitamente 
    logo antes do nome do atributo se ele é public, private, protected ou readonly
  */
  constructor(public name: string, protected birthDate: Date) { }

  get age() {
    /*Para operar com datas, vamos operar somente com milissegundos. Uma data
    é o número de milissegundos desde o dia 01/01/1970 (era Unix).*/
    const timeDiff = Math.abs(
      Date.now() -
      new Date(this.birthDate).getTime()
    );

    /*Convertendo de volta para o número de anos inteiros, considerando anos bissextos.
    Tente entender a lógica abaixo: como converter de milissegundos para anos?*/
    return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
  }
}

class Mammal extends Animal {
  walk() {
    console.log(`${this.name} está andando!`);
  }
}

const tiger = new Mammal(
  'Tigre',
  new Date(Date.parse('May 03, 2020')),
);

const main = (animal: Animal) => {
  console.log(animal.age);
}

main(tiger);
tiger.walk();

class Bird extends Animal {
  fly() {
    console.log(`${this.name} está voando!`);
  }

  showBirthDate() {
    console.log(this.birthDate);
  }
}

const parrot = new Bird(
  'Papagaio',
  new Date(Date.parse('Jun 07, 2017')),
);

console.log(parrot.age);
parrot.fly();

//-------------------------------------------------------------------------------------------------------------------------------------------------------
class Superclass {
  isSuper: boolean;

  constructor() { 
    this.isSuper = true;
   }

  public sayHello() {
    console.log('Olá Mundo!');
  }
}

class Subclass extends Superclass { 
  constructor() {
    super();
    this.isSuper = false;
  }
 }

const myFunc = (obj: Subclass) => {
  obj.sayHello();
  obj.isSuper ? console.log('Super!') : console.log('Sub!');
}

const sup = new Superclass();
const sub = new Subclass();

myFunc(sup);
myFunc(sub);
//-------------------------------------------------------------------------------------------------------------------------------------------------------
// interface Animal {
//   name: string;
//   age: number;

//   getBirthDate(): Date;
// }

// class Bird implements Animal {
//   constructor(
//     public name: string,
//     private birthDate: Date) {}

//   get age() {
//     var timeDiff = Math.abs(Date.now() - new Date(this.birthDate).getTime());
//     return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
//   }

//   getBirthDate() { return this.birthDate; }

//   fly() { console.log(`${this.name} está voando!`); }
// }

// const parrot = new Bird(
//   'Papagaio',
//   new Date(Date.parse('Aug 16, 2015')),
// );

// console.log(parrot.age);
// parrot.fly();
//-------------------------------------------------------------------------------------------------------------------------------------------------------
interface MyInterface {
  myNumber: number;
  myFunc(myParam: number): string;
}

class MyClass implements MyInterface {
  constructor(public myNumber: number) {}

  myFunc(myParam: number): string {
    return `Soma: ${ this.myNumber + myParam }`
  }
}

const myObj = new MyClass(2);
//-------------------------------------------------------------------------------------------------------------------------------------------------------
interface Logger {
  log(param: string): void;
}

class ConsoleLogger implements Logger {
  log(param: string): void {
    console.log(param);
  }
}

class ConsoleLogger2 implements Logger {
  log(param: string): void {
    console.log(`Este é o logger2 ${param}`);
  }
}

interface Database {
  logger: Logger;
  save(key: string, value: string): void;
}

class ExampleDatabase implements Database {
  constructor(public logger: Logger = new ConsoleLogger()) {  }

  save(key: string, value: string): void {
    this.logger.log(`chave: ${key}, valor: ${value}`)
  }
}

const logger = new ConsoleLogger();
const logger2 = new ConsoleLogger2();

const db1 = new ExampleDatabase(logger);
const db2 = new ExampleDatabase(logger2);
const db3 = new ExampleDatabase();

db1.save('pastor', 'alemão');
db2.save('border', 'collie');
db3.save('null', 'null');
//-------------------------------------------------------------------------------------------------------------------------------------------------------
// interface Contract {
//   subject: string;
//   clauses: string[];
//   signatories: Person[];
//   describe(): void;
// }

// class Person {
//   private _name;
//   constructor(name: string) {
//     this._name = name;
//   }
//   get name() { return this._name; }
// }

// class NaturalPerson extends Person {
//   private _cpf;
//   constructor(name: string, cpf: string) {
//     super(name);
//     this._cpf = cpf;
//   }
//   get cpf() { return this._cpf; }
// }

// class LegalPerson extends Person {
//   private _cnpj;
//   constructor(name: string, cnpj: string) {
//     super(name);
//     this._cnpj = cnpj;
//   }
// }

// class SalesContract implements Contract {
//   private _signatories: Person[];
//   private _clauses: string[];

//   constructor() {
//     this._signatories = [];
//     this._clauses = [];
//   }

//   get signatories() { return [...this._signatories]; }
//   get clauses() { return [...this._clauses]; }
//   get subject() { return "Sales"; }

//   sign(signatory: Person) { this._signatories.push(signatory); }
//   addClause(clause: string) {
//     if (this._signatories.length > 0) return;
//     this._clauses.push(clause);
//   }

//   describe() {
//     console.log('--------------------');
//     console.log(`Contrato: ${this.subject}`);
//     this.clauses.forEach((clause) => { console.log(`Cláusula: ${clause}`) });
//     this.signatories.forEach((signatory) => { console.log(`Assinado por: ${signatory.name}`) });
//     console.log('--------------------\n');
//   }
// }

// const s1 = new SalesContract();
// const pp1 = new NaturalPerson('Tony', '123456789');
// const pp2 = new NaturalPerson('Lilly', '987654321');
// const lp = new LegalPerson('International Sales SA', '23961237162378');

// s1.describe();
// s1.addClause('Foo');
// s1.addClause('Bar');
// s1.describe();
// s1.sign(pp1);
// s1.sign(pp2);
// s1.describe();
// s1.addClause('Baz');
// s1.sign(lp);
// s1.describe();
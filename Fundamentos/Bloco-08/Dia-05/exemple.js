//-------------------------------------------Spread Operator--------------------------------------------
const numbers = [1, 2, 3];

const newArray = [...numbers, 4, 5, 6];
console.log(newArray); 
console.log(numbers);
//------------------------------------------------------------------------------------------------------
const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer, ...fall, ...winter, ...spring];
console.log(months);
//------------------------------------------------------------------------------------------------------
const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 1.7];

console.log(imc(...patientInfo));
//------------------------------------------------------------------------------------------------------
const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

console.log(Math.max(...randomNumbers));
console.log(Math.min(...randomNumbers));
//------------------------------------------------------------------------------------------------------
const people = {
  id: 101,
  name: 'Alysson',
  age: 25,
};

const about = {
  address: 'Av. Getúlio Vargas, 1000',
  occupation: 'Developer',
};

const customer = { ...people, ...about };
console.log(customer);
//------------------------------------------------------------------------------------------------------
// Faça uma lista com as suas frutas favoritas
const specialFruit = ['amora', 'coco', 'ingá', 'pinha', 'jaca'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['laranja', 'maçã', 'uva', 'banana', 'morango', 'kiwi'];

const fruitSalad = (fruit, additional) => [...fruit, ...additional];

console.log(fruitSalad(specialFruit, additionalItens));

//----------------------------------------------Rest----------------------------------------------------
function quantosParams(...args) {
  console.log('parâmetros:', args);
  return `Você passou ${args.length} parâmetros para a função.`;
}

console.log(quantosParams(0, 1, 2));
console.log(quantosParams('string', null, [1, 2, 3], { }));
//------------------------------------------------------------------------------------------------------
const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60));

//----------------------------------------Object Destructuring------------------------------------------
const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

const { nome, seller } = product;
console.log(nome);
console.log(seller); 

const printProductDetails = ({ name, price, seller }) => {
  console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
};

printProductDetails(product);
//------------------------------------------------------------------------------------------------------
const character = {
  name: 'Luke SkyWalker',
  age: '53',
  description: {
    specieName: 'Human',
    jedi: true,
  },
  homeWorld: {
    name: 'Tatooine',
    population: '200000',
  },
};

// desestruturando o objeto:
const { name, age, homeWorld: { name: planetName }, description: { jedi } } = character;

// imprimindo os valores:
console.log(`Esse é o ${name}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);
//------------------------------------------------------------------------------------------------------
const daysOfWeek = {
  workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  weekend: ['Saturday', 'Sunday'],
};

const { workDays, weekend } = daysOfWeek;
const weekdays = [...workDays, ...weekend]
console.log(workDays);
console.log(weekend);
console.log(weekdays);
//------------------------------------------------------------------------------------------------------
const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matematica',
};

const { a: nameStudent, b: classAssigned, c: subject } = student;

console.log(nameStudent); 
console.log(classAssigned); 
console.log(subject);
//------------------------------------------------------------------------------------------------------
const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const teste = {...user, ...jobInfos};

const greeting = ({ name, age, nationality, profession, squad, squadInitials }) => console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`);

greeting(teste);

//-------------------------------------------Array Destructuring----------------------------------------
const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];

const [firstCountry, secondCountry, thirdCountry, fourthCountry] = arrayCountries;

console.log(firstCountry);
console.log(secondCountry); 
console.log(thirdCountry);
console.log(fourthCountry); 
//------------------------------------------------------------------------------------------------------
const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

const [first] = saudacoes;
console.log(first);
//------------------------------------------------------------------------------------------------------
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(animal, comida, bebida); // arroz gato água

[comida, animal, bebida] = [bebida, comida, animal];
console.log(comida, animal, bebida);
// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo
//------------------------------------------------------------------------------------------------------
let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares);

numerosPares = [6, 8, 10, 12];
console.log(numerosPares);
// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

//-----------------------------------Default Destructuring----------------------------------------------
// const person = {
//   name: 'João',
//   lastName: 'Jr',
//   age: 34,
// };

// const { nationality = 'Brazilian' } = person;
// console.log(nationality);
//------------------------------------------------------------------------------------------------------
const position2d = [1.0, 2.0];
const [x, y, z = 0] = position2d;

console.log(x); 
console.log(y); 
console.log(z); 
//------------------------------------------------------------------------------------------------------
const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson));
console.log(getNationality(person));

//---------------------------------------Property Shorthand---------------------------------------------
// const newUser = (id, name, email) => {
//   return {
//     id: id,
//     name: name,
//     email: email,
//   };
// };

const newUser = (id, name, email) => {
  return {
    id,
    name,
    email,
  };
};

console.log(newUser(54, 'isabella', 'isabella@email.com'));
//------------------------------------------------------------------------------------------------------
const getPosition = (latitude, longitude) => ({
  latitude,
  longitude });

console.log(getPosition(-19.8157, -43.9542));

//------------------------------------------Default Parameters------------------------------------------
// const greeting = (user) => console.log(`Welcome ${user}!`);

// greeting();

// const greeting = (user) => {
//   const userDisplay = typeof user === 'undefined' ? 'usuário' : user;
//   console.log(`Welcome ${userDisplay}!`);
// };

// greeting();

const salutation = (user = 'usuário') => console.log(`Welcome ${user}!`);

salutation();
//------------------------------------------------------------------------------------------------------
const multiply = (number, value = 1) => {
  return number * value;
};

console.log(multiply(8));
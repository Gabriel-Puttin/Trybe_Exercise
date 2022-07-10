// const numbers = [32, 15, 3, 2, -5, 56, 10,];
// let sumNumbers = 0;


// for (let index = 0; index < numbers.length; index += 1) {
//   sumNumbers += numbers[index];
// }
// console.log(sumNumbers); 
//---------------------------------------------reduce---------------------------------------------------
const numbers = [32, 15, 3, 2, -5, 56, 10];

const sumNumbers = numbers.reduce((result, number) => result + number); // O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
console.log(sumNumbers);

// Ou seja:

// const getSum = (result, number) => result + number;
// const sumNumbers = numbers.reduce(getSum);
// console.log(sumNumbers);

//------------------------------------------------------------------------------------------------------
const collection = [1, 2, 3, 4, 5];

const getSum = (accumulator, number) => {
  console.log(accumulator);
  return accumulator + number;
};

const sumNumbersTwo = collection.reduce(getSum);
console.log(sumNumbersTwo); 

//------------------------------------------------------------------------------------------------------
const numbersTwo = [32, 15, 3, 2, -5, 56, 10];

const getSumTwo = (result, number) => {
  console.log(result); 
  return result + number;
};

const sumNumbersThree = numbersTwo.reduce(getSumTwo);
console.log(sumNumbersThree);

const getSumThree = (result, number) => {
  console.log(result); // 0 32 47 50 52 47 103
  return result + number;
  };
const sumNumbersFour = numbersTwo.reduce(getSumThree, 10); 
console.log(sumNumbersFour);

//---------------------------------------------Exemple--------------------------------------------------
const num = [50, 85, -30, 3, 15];

const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

const bigger = num.reduce(getBigger, 0);
console.log(bigger);
//------------------------------------------------------------------------------------------------------
const nums = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const getPar = () => nums.filter((number) => number % 2 === 0);

const sumPar = getPar().reduce((result, number) => result + number);
console.log(sumPar);

const sumPair = (accumulator, number) => (
  (number % 2 === 0) ? accumulator + number : accumulator
);

const sumNums = (array) => array.reduce(sumPair, 0);

console.log(sumNums(nums));

//------------------------------------------------------------------------------------------------------
const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: 59 },
      { name: 'Português', nota: 80 },
      { name: 'Química', nota: 78 },
      { name: 'Biologia', nota: 92 },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 76 },
      { name: 'Português', nota: 90 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 80 },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 91 },
      { name: 'Português', nota: 85 },
      { name: 'Química', nota: 92 },
      { name: 'Biologia', nota: 90 },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 70 },
      { name: 'Português', nota: 70 },
      { name: 'Química', nota: 60 },
      { name: 'Biologia', nota: 50 },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 80 },
      { name: 'Português', nota: 82 },
      { name: 'Química', nota: 79 },
      { name: 'Biologia', nota: 75 },
    ],
  },
];

const getBestClass = (acc, materia) => {
  if (acc.nota > materia.nota) return acc;
  return materia;
};

const names = () => estudantes.map((student) => ({
  name: student.nome,
  materia: student.materias.reduce(getBestClass).name}));

console.log(names());
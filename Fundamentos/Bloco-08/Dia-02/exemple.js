const students = [
  { name: 'Maria', grade: 70, approved: '' },
  { name: 'José', grade: 56, approved: '' },
  { name: 'Roberto', grade: 90, approved: '' },
  { name: 'Ana', grade: 81, approved: '' },
];
  
  function verifyGrades() {
    for (let i = 0; i < students.length; i += 1) {
      const student = students[i];
    if (student.grade >= 60) {
      student.approved = 'Aprovado';
    } else {
      student.approved = 'Recuperação';
    }
    }
  }
  
  verifyGrades();
  
  console.log(students);
//------------------------------------------------forEach-----------------------------------------------
  function verifyGrades() {
  students.forEach((student, index) => {
    if (student.grade >= 60) {
      students[index].approved = 'Aprovado';
    } else {
      students[index].approved = 'Recuperação';
    }
  });
  }
  
  verifyGrades();
  
  console.log(students);
//------------------------------------------------------------------------------------------------------
// const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
let result;
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 5 === 0) {
    result = numbers[index];
    break;
  }
}

console.log(result);
//-------------------------------------------------find-------------------------------------------------
const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
const firstMultipleOf5 = numbers.find((number) => number % 5 === 0);

console.log(firstMultipleOf5);
//------------------------------------------------forEach-----------------------------------------------
const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
arrayOfValues.forEach((element) => {
  console.log('Cada elemento do array:', element);
});
// arrayOfValues - Nome do array que será percorrido;
// .forEach - A HOF, pode ser, .find, .some, .every;
// element - Valor do elemento do array;
// (element) => {console.log('Cada elemento do array:', element); - função a ser executada, pode ser passada igual ao terceiro exemplo do conteúdo com a função verifyGrade.
arrayOfValues.forEach((element, indexOfTheArray, theEntireArray) => {
  console.log('Cada elemento do array:', element);
  console.log('Index, posição do elemento:', indexOfTheArray);
  console.log('Array percorrido:', theEntireArray);
});
// element - Valor do elemento do array;
// index - Índice em cada iteração ou posição do elemento no array, começando do 0;
// array - Array original que está sendo percorrido.
const arrayOfNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const multipliesFor2 = (element) => {
  console.log(`${element} * 2: ${element * 2}`);
};

arrayOfNumbers.forEach(multipliesFor2);
//------------------------------------------------------------------------------------------------------
const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

const convertToUpperCase = (name, index) => {
  names[index] = name.toUpperCase();
};

names.forEach(convertToUpperCase);
console.log(names);
//--------------------------------------------Exercise forEach------------------------------------------
const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

emailListInData.forEach(showEmailList);

//-------------------------------------------------find-------------------------------------------------
const numbersTwo = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;

const isEven = numbersTwo.find(verifyEven);

console.log(isEven); // 30

console.log(verifyEven(9)); // False
console.log(verifyEven(14)); // True

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isEven2 = numbersTwo.find((number) => number % 2 === 0);

console.log(isEven2); // 30
//------------------------------------------Exercise find-----------------------------------------------
const numbersThree = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = numbersThree.find((number) => number % 3 === 0 && number % 5 ===0);

console.log(findDivisibleBy3And5);

const arrayOfNames = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = arrayOfNames.find((name) => name.length === 5); 

console.log(findNameWithFiveLetters);

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(id) {
  return musicas.find((item) => item.id === id); 
};

console.log(findMusic('31031685'));

//---------------------------------------------some-----------------------------------------------------
const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

console.log(verifyFirstLetter('J', listNames));
console.log(verifyFirstLetter('x', listNames));
//---------------------------------------------every----------------------------------------------------
const grades = {
  portugues: 'Aprovado',
  matematica: 'Aprovado',
  ingles: 'Aprovado',
};

const verifyGrades = (studentGrades) => (
  Object.values(studentGrades).every((grade) => grade === 'Aprovado')
);

console.log(verifyGrades(grades));
//------------------------------------------Exercise some-----------------------------------------------
const namesTwo = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => arr.some((item) => item === name);

console.log(hasName(namesTwo, 'Ana'))
//------------------------------------------Exercise every----------------------------------------------
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => arr.every((item) => item.age >= minimumAge);

console.log(verifyAges(people, 16));
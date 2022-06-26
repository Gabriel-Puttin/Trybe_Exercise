//-----------------------------------------------filter-------------------------------------------------
const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;

const isEven = numbers.filter(verifyEven);

console.log(isEven);

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isEven2 = numbers.filter((number) => number % 2 === 1);

console.log(isEven2);

const objPeople = [
    { name: 'José', age: 21 },
    { name: 'Lucas', age: 19 },
    { name: 'Maria', age: 16 },
    { name: 'Gilberto', age: 18 },
    { name: 'Vitor', age: 15 },
  ];
  
  const verifyAgeDrive = (arrayOfPeople) => (
    arrayOfPeople.filter((people) => (people.age < 18))
  );
  
console.log(verifyAgeDrive(objPeople));
  
const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const removeStudentByName = (name, listStudents) =>
  listStudents.filter((student) => student !== name);
  // Filtra todos os estudantes que não têm o nome 'Ricardo' e retorna um array com eles. Na prática, remove o Ricardo do array.

const newListStudents = removeStudentByName('Ricardo', arrayMyStudents);
console.log(newListStudents);

//-------------------------------------------------map--------------------------------------------------
const persons = [
    { firstName: 'Maria', lastName: 'Ferreira' },
    { firstName: 'João', lastName: 'Silva' },
    { firstName: 'Antonio', lastName: 'Cabral' },
  ];
  
//   const fullNames = [];
  
//   for (let index = 0; index < persons.length; index += 1) {
//     fullNames.push(`${persons[index].firstName} ${persons[index].lastName}`);
//   }
const fullNames = persons.map((person) => `${person.firstName} ${person.lastName}`);

console.log(fullNames);

const numbersTwo = [1, 2, 3, 4, -5];

const negativeNumbers = numbersTwo.map((number) => ((number > 0) ? number * (-1) : number));
    
console.log(negativeNumbers);
console.log(numbersTwo); 

const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];


const result = (arr1, arr2) => arr1.map((element, index) => ( { [element]: arr2[index] } ));
const list = result(products, prices);
console.log(list);
//------------------------------------------------forEach-----------------------------------------------
const numeros = [1, 2, 3, 4, 5, 6];
console.log(numeros.map((numero) => numero * 2));

const paresMenoresQueCinco = [];
numeros.forEach((numero) => {
  if (numero < 5 && numero % 2 === 0) {
    paresMenoresQueCinco.push(numero);
  }
});
console.log(paresMenoresQueCinco);
//--------------------------------------------------Exemple---------------------------------------------
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
        { name: 'Matemática', nota: '59' },
        { name: 'Português', nota: '80' },
        { name: 'Química', nota: '78' },
        { name: 'Biologia', nota: '92' },
      ],
    },
    {
      nome: 'Jorge',
      sobrenome: 'Santos',
      idade: 15,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '76' },
        { name: 'Português', nota: '90' },
        { name: 'Química', nota: '70' },
        { name: 'Biologia', nota: '80' },
      ],
    },
    {
      nome: 'Maria',
      sobrenome: 'Silveira',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '91' },
        { name: 'Português', nota: '85' },
        { name: 'Química', nota: '92' },
        { name: 'Biologia', nota: '90' },
      ],
    },
    {
      nome: 'Natalia',
      sobrenome: 'Castro',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '70' },
        { name: 'Português', nota: '70' },
        { name: 'Química', nota: '60' },
        { name: 'Biologia', nota: '50' },
      ],
    },
    {
      nome: 'Wilson',
      sobrenome: 'Martins',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '80' },
        { name: 'Português', nota: '82' },
        { name: 'Química', nota: '79' },
        { name: 'Biologia', nota: '75' },
      ],
    },
  ];
//----------------------------------------------Com for-------------------------------------------------
// const allNameStudents = [];

// for (let index = 0; index < estudantes.length; index += 1 ) {
//   if(estudantes[index].turno === 'Manhã') {
//     allNameStudents.push(`${estudantes[index].nome} ${estudantes[index].sobrenome}`)
//   }
// }

// console.log(allNameStudents);
//----------------------------------------------Com map-------------------------------------------------
const allNameStudents = estudantes.filter((estudante) => (
    estudante.turno === 'Manhã')).map((estudante) => `${estudante.nome} ${estudante.sobrenome}`);
  
  console.log(allNameStudents);
//----------------------------------------------Com for-------------------------------------------------
// const findStudent = (name, students) => {
//     for (let index = 0; index < students.length; index += 1) {
//       if (students[index].nome === name) {
//         return students[index];
//       }
//     }
//   };
  
//   const reportStatus = (name, students) => {
//     const getStudent = findStudent(name, students);
//     const report = [];
//     for (let index = 0; index < getStudent.materias.length; index += 1) {
//       if (getStudent.materias[index].nota >= 60) {
//         report.push(`${getStudent.materias[index].name} Aprovado`);
//       } else {
//         report.push(`${getStudent.materias[index].name} Reprovado`);
//       }
//     }
//     return report;
//   };
  
//   console.log(reportStatus('Natalia', estudantes));
//----------------------------------------------Com map e find------------------------------------------
const reportStatus = (name, students) => {
    const studentInfo = students.find((student) => student.nome === name);
    return studentInfo.materias.map((materia) => (
      `${materia.name} ${(materia.nota >= 60) ? 'Aprovado' : 'Reprovado'}`
    ));
  };
  
  console.log(reportStatus('Natalia', estudantes));
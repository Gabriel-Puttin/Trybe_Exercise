// let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

// console.log(tasksList.length);
// console.log(tasksList [0]);

// let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

// let searchForFirstTask = tasksList[0];
// console.log(searchForFirstTask);
// // Tomar café

// let searchForLastTask = tasksList[tasksList.length - 1];
// console.log(searchForLastTask);
// // Brincar com o cachorro

// let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

// tasksList.unshift('Fazer exercícios da Trybe');  // adiciona mais uma tarefa
// console.log(tasksList);

// ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']

// let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

// tasksList.shift();  // remove a última tarefa
// console.log(tasksList);

// [ 'Tomar café', 'Reunião' ]

// let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

// let indexOfTask = tasksList.indexOf('Reunião');
// console.log(indexOfTask);

// 1

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let menuServices = menu[1] ;

// console.log(menuServices);

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let indexOfPortfolio = menu.indexOf('Portfólio');

// console.log(indexOfPortfolio);

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
//     menu.push('Trybe')
// console.log(menu);

// let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

// for (let index = 0; index < groceryList.length; index += 1){
//     console.log(groceryList[index]);
// }


// let numeros = [1,2,3,4,5];
// for(let numero of numeros) {
//   console.log(numero);
// }

// resultado:
//1
//2
//3
//4
//5


// let word = 'Hello';
// for (let letter of word) {
//   console.log(letter);
// }
// resultado:
// "H"
// "e"
// "l"
// "l"
// "o"

// let names = ['João', 'Maria', 'Antônio', 'Margarida'];

// for (let listaNames of names){
//     console.log(listaNames);
// }

//exercício 1
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 0; index < numbers.length; index += 1) {
//     console.log('Valores:', numbers[index]);
// }

// exercício 2
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let addition = 0;
// for (let indexTwo = 0; indexTwo < numbers.length; indexTwo += 1) {
//     addition += numbers[indexTwo];
// }

// console.log(addition);

// exercício 3
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let addition = 0;

// for (let indexTwo = 0; indexTwo < numbers.length; indexTwo += 1) {
//         addition += numbers[indexTwo];
//      }
// let media = addition / numbers.length;
// console.log(media);

// //exercício 4
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let addition = 0;

// for (let indexTwo = 0; indexTwo < numbers.length; indexTwo += 1) {
//         addition += numbers[indexTwo];
//      }
// let media = addition / numbers.length;
// console.log(media);

// if (media > 20) {
//     console.log("valor maior que 20");
// } else {
//     console.log("valor menor ou igual a 20");
// }

//exercício 5
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let result = 0;

// for (let indexTwo = 0; indexTwo < numbers.length; indexTwo += 1) {
//      if (result < numbers[indexTwo]){
//          result = numbers[indexTwo];
//      }
// }

// console.log(result);

// exercício 6
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let result = 0;

// for (let indexTwo = 0; indexTwo < numbers.length; indexTwo += 1) {
//      if (numbers[indexTwo] % 2 === 1){
//          result += 1;
//      } 
// }

// if (result === 0){
//     console.log("nenhum valor ímpar encontrado");
// } else {
//     console.log(result);
// }

//exercício 7
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let result = 100000;

// for (let indexTwo = 0; indexTwo < numbers.length; indexTwo += 1) {
//       if (numbers[indexTwo] < result){
//          result = numbers[indexTwo];
//       }
//  }

//  console.log(result);

 // exercício 8
  let listOfNumbers = [];

  for (let index = 0; index <= 25; index += 1) {
      listOfNumbers.push(index);
  }
  
  console.log(listOfNumbers);

  // exercício 9
  let listOfNumbers = [];
  let result = 0;

  for (let index = 1; index <= 25; index += 1) {
      listOfNumbers.push(index);
  }
  for (let indexTwo = 0; indexTwo < listOfNumbers.length; indexTwo += 1) {
    console.log(listOfNumbers[indexTwo] / 2);
  }
  

// let fruits = [3, 4, 10, 1, 12];
// let sum = 0;

// for (let index = 0; index < fruits.length; index += 1;){
//     sum += fruits[index];
// }

// if(sum > 15){
//     console.log(sum);
// } else {
//     console.log("Valor maior que 16");
// }

// const n = 9;
// let resultado = 100;
// for (let i = 0; i <= n; i += 1){
//     resultado -= i;
// }
// console.log(resultado);

// exercício 01

let fatorial = 1;

for (let index = 10; index > 0; index -= 1){
    fatorial *= index;
}

console.log(fatorial);

// exercício 2

let word = 'tryber';
let reserveWord = '';

for (let index = 0; index < word.length; index += 1){
    reserveWord += word[word.length - 1 - index];
}

console.log(reserveWord);

// exercício 3

let array = ['java', 'javascript', 'python', 'html', 'css'];
let bigWord = '';
let smallWord = array[0];

for (let index = 0; index < array.length; index += 1){
    if (array[index] .length > bigWord.length) {
        bigWord = array[index];
    }
    if (array[index] .length <= smallWord.length) {
        smallWord = array[index];
    }
}
console.log(bigWord);
console.log(smallWord);

// exercício 4

let primeNumber = 0;

  for (let listOfNumbers = 0; listOfNumbers <= 50; listOfNumbers += 1) {
      let isPrime = true;
      for (let i = 2; i < listOfNumbers; i += 1){
          if (listOfNumbers% i === 0){
              isPrime = false;
          }
        }
        if (isPrime){
            primeNumber = listOfNumbers;
        }
  }
  
  console.log(primeNumber);

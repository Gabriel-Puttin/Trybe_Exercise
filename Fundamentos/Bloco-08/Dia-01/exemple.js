//---------------------------------------------First-Class Functions-----------------------------------
function sum (number1, number2) {
    return number1 + number2;
  }
  
  const sumVariable = sum;
  
  console.log(sumVariable);
  //  [Function: sum]

//   const sum = (number1, number2) => {
//     return number1 + number2;
//   };

const sayHello = () => {
    return ('hello trybers');
  }
  
  const printGreeting = (callback) => {
      console.log(callback());
  }
  
  printGreeting(sayHello);

  const sumFixAmount = (amount) => {
    return (number) => amount + number;
  }
  
  const initialSum = sumFixAmount(15)
  console.log(initialSum(5));

//-----------------------------------------------Higher Order Functions--------------------------------
const repeat = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
      action(count);
    }
  };
  
  repeat(5, console.log);
//------------------------------------------------------------------------------------------------------
  const repeat2 = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
      action(count);
    }
  };
  
  repeat2(20, (number) => {
    if (number % 3 === 0) {
      console.log(number, 'is even');
    }
  });
//------------------------------------------------------------------------------------------------------
const repeat3 = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

const isEven = (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
};

const isOdd = (number) => {
  if ((number % 2) > 0) {
    console.log(number, 'is odd');
  }
};

repeat3(10, isEven); // Testa quais números serão pares;
repeat3(10, isOdd); // Testa quais números serão ímpares;
//------------------------------------------------------------------------------------------------------
const numberGenerator = () => {
  return Math.random() * 100;
}

console.log(numberGenerator());
//--------------------------------------------Fixing----------------------------------------------------
const awake = () => 'Acordado!!';
const coffe = () => 'Bora tomar café!!';
const sleep = () => 'Partiu dormir!!';

const doingThings = (func) => console.log(func());
doingThings(awake);
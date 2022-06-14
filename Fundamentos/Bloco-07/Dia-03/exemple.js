const assert = require('assert'); // Sintaxe para incluir o módulo assert

assert.strictEqual(50, 50); // Sem erros: 50 === 50
assert.strictEqual(50, 70); // AssertionError: 50 !== 70
//----------------------------------------------------------------------------------------------------
let gemeoUm = "Cabelo comprido";
let gemeoDois = gemeoUm;

gemeoUm = "Careca";

console.log(gemeoUm); // Careca
console.log(gemeoDois); // Cabelo comprido
//----------------------------------------------------------------------------------------------------
let myName = { firstName: "Pedro" };
let identity = myName;

myName.firstName = "Carol";

console.log(myName.firstName); // Carol
console.log(identity.firstName); // Carol

const workDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const weekDays = ['Sunday', ...workDays, 'Saturday'];
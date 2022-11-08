const { expect } = require('chai');

const avg = require('../src/exemple');

describe('Quando a média for menor que 7', function () {
  it('retorna "Reprovação"', function () {
    const resposta = avg(4);

    expect(resposta).to.be.equals('Reprovação');
  });
});


// const avg = require('../src/exemple');

// console.log('Quando a média for menor que 7, retorna "reprovação":');

// const respostaCenario1 = avg(4);
// if (respostaCenario1 === 'reprovação') {
//   console.log(`Ok 🚀`);
// } else {
//   console.error('Resposta não esperada 🚨');
// }
// // console:
// // Quando a média for menor que 7, retorna "reprovação":
// // Ok 🚀

// console.log('Quando a média for maior que 7, retorna "aprovação":');

// const respostaCenario2 = avg(9);
// if (respostaCenario2 === 'aprovação') {
//   console.log(`Ok 🚀`);
// } else {
//   console.error('Resposta não esperada 🚨');
// }
// // console:
// // Quando a média for maior que 7, retorna "aprovação":
// // Ok 🚀

// console.log('Quando a média for igual a 7, retorna "aprovação":');

// const respostaCenario3 = avg(7);
// if (respostaCenario3 === 'aprovação') {
//   console.log(`Ok 🚀`);
// } else {
//   console.error('Resposta não esperada 🚨');
// }
// console:
// Quando a média for igual a 7, retorna "aprovação":
// Resposta não esperada 🚨
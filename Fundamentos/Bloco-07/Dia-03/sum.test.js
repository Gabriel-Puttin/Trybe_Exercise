const sum = require('./sum.js');

describe('Testa a função soma', () => {
  it('Deve retornar o resultado da soma', () =>{
    expect(sum(2, 3)).toEqual(5);
    expect(sum(0, 0)).toEqual(0);
  });
  it('Deve retornar um erro', () =>{
    expect(() => sum(4, '5')).toThrowError();
    expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
  });
});
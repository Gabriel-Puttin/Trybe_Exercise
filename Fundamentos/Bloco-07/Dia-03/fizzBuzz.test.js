const fizzBuzz = require('./fizzBuzz.js');

describe('Testando a função', () =>{
    it('Verifica se o número é divisível por 3 e 5', () =>{
        expect(fizzBuzz(15)).toEqual('fizzbuzz');
    });
    it('Verifica se o número é divisível por 3', () =>{
        expect(fizzBuzz(6)).toEqual('fizz');
    });
    it('Verifica se o número é divisível por 5', () =>{
        expect(fizzBuzz(20)).toEqual('buzz');
    });
    it('Verifica se o número não é divisível por 3 e nem por 5', () =>{
        expect(fizzBuzz(14)).toEqual(14);
    });
    it('Verifica se o parâmetro é um número', () =>{
        expect(fizzBuzz('0')).toEqual(false);
    });
});
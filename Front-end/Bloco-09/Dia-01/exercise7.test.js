const { exportAllDeclaration } = require("@babel/types");
const { isTypedArray } = require("util/types");

const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

describe('Teste da função uppercase', () => {
  it('Verificando a função uppercase', (done) => {
    uppercase('trybe', (str) => {
      try {
        expect(str).toBe('TRYBE');
        done();
      } catch (erro) {
        done(erro);
      }
    })
  });
});
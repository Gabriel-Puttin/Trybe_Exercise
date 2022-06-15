const {encode, decode} = require('./encode&decode.js');

describe('Testa as funções encode e decode', () =>{
    it('Verificar se encode é uma função', () =>{
        expect(typeof encode).toEqual('function');
    });
    it('Verificar se decode é uma função', () =>{
        expect(typeof decode).toEqual('function');
    });
    it('Testar a função encode', () =>{
        expect(encode('a, e, i, o, u')).toEqual('1, 2, 3, 4, 5');
    });
    it('Testar a função decode', () =>{
        expect(decode('1, 2, 3, 4, 5')).toEqual('a, e, i, o, u');
    });
    it('Testar se a função encode não converte outros tipos de caracteres', () =>{
        expect(encode('a, e, i, o, u, 6, 7, 8, 9, d, t, l, q, p')).toEqual('1, 2, 3, 4, 5, 6, 7, 8, 9, d, t, l, q, p');
    });
    it('Testar se a função decode não converte outros tipos de caracteres', () =>{
        expect(decode('1, 2, 3, 4, 5, 6, 7, 8, 9, d, t, l, q, p')).toEqual('a, e, i, o, u, 6, 7, 8, 9, d, t, l, q, p');
    });
    it('Verifica se o tamnho da palavra permanece', () =>{
        expect(encode('Ola, mundo').length).toEqual(10);
    });
    it('Verifica se o tamnho da palavra permanece', () =>{
        expect(decode('Ola, mundo').length).toEqual(10);
    });
});
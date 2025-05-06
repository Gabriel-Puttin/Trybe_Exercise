const service = require('./service');
jest.mock('./service');

describe('Teste a função randomNumber', () => {
  it('Verifica se a função é chamada', () => {
    service.randomNumber = jest.fn().mockReturnValue(10);

    expect(service.randomNumber()).toEqual(10);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
  });

  it('Testa se a nova função retorna a divisão correta', () => {
    service.randomNumber = jest.fn().mockImplementation((a, b) => a / b);
    service.randomNumber(10, 2);

    expect(service.randomNumber).toHaveBeenCalled()
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(10, 2);
    expect(service.randomNumber(10, 2)).toEqual(5);
  });

  it('Testa se a nova função retorna a multiplicação correta', () => {
    service.randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);
    service.randomNumber(7, 11, 21);

    expect(service.randomNumber).toHaveBeenCalled()
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(7, 11, 21);
    expect(service.randomNumber(7, 11, 21)).toEqual(1617);
  });

  it('Testa se a nova função retorna o dobro do número', () => {
    service.randomNumber.mockReset();
    expect(service.randomNumber).toHaveBeenCalledTimes(0);

    service.randomNumber = jest.fn().mockImplementation((a) => a * 2);
    service.randomNumber(7);

    expect(service.randomNumber).toHaveBeenCalled()
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(7);
    expect(service.randomNumber(7)).toEqual(14);
  });

  it('Verifica se a função retorna uma string em caixa baixa', () => {
    service.uperCase = jest.fn().mockImplementation((phrase) => phrase.toLowerCase());
    service.uperCase('HEY WORLD');

    expect(service.uperCase).toHaveBeenCalled()
    expect(service.uperCase).toHaveBeenCalledTimes(1);
    expect(service.uperCase).toHaveBeenCalledWith('HEY WORLD');
    expect(service.uperCase('HEY WORLD')).toBe('hey world');
  });

  it('Verifica se a função retorna a ultima letra de uma string', () => {
    service.firstLetter = jest.fn().mockImplementation((phrase) => [...phrase][phrase.length - 1]);
    service.firstLetter('HEY WORLD');

    expect(service.firstLetter).toHaveBeenCalled()
    expect(service.firstLetter).toHaveBeenCalledTimes(1);
    expect(service.firstLetter).toHaveBeenCalledWith('HEY WORLD');
    expect(service.firstLetter('HEY WORLD')).toBe('D');
  });

  it('Verifica se a função retorna a junção das 3 strings', () => {
    service.joinWords = jest.fn().mockImplementation((phrase1, phrase2, phrase3) => phrase1.concat(phrase2, phrase3));
    service.joinWords('HEY WORLD', 'OLÁ MUNDO', 'olá mundo');

    expect(service.joinWords).toHaveBeenCalled()
    expect(service.joinWords).toHaveBeenCalledTimes(1);
    expect(service.joinWords).toHaveBeenCalledWith('HEY WORLD', 'OLÁ MUNDO', 'olá mundo');
    expect(service.joinWords('HEY WORLD', 'OLÁ MUNDO', 'olá mundo')).toBe('HEY WORLDOLÁ MUNDOolá mundo');
  });

  it('Testa se a função uperCase foi restaurada', () => {
    service.uperCase.mockRestore();

    expect(service.uperCase).toHaveBeenCalledTimes(0);
  });
});

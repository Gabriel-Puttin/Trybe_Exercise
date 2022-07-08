// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require("./exercise8.js");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    const erro = new Error ('Não temos esse pokémon para você :(');
    const callback = (par1, par2) => {
      expect(par1).toEqual(erro);
      done();
    }
    getPokemonDetails((pokemon) => pokemon.name === 'Trybe', callback);
  });

  it("retorna um pokemon que existe no banco de dados", () => {
    const pokemonName = 'Olá, seu pokémon é o Bulbasaur, o tipo dele é Grass e a habilidade principal dele é Razor Leaf';
    const callback = (par1, par2) => {
      expect(par2).toEqual(pokemonName);
      done();
    }
    getPokemonDetails((pokemon) => pokemon.name === 'Bulbasaur', callback)
  });
});
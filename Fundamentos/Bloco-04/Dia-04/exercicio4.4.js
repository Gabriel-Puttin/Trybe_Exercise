let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
  };

  //------------------------------------------------------

  let diasDaSemana = {
    1: 'domingo',
    2: 'segunda',
    3: 'terça',
    4: 'quarta',
    5: 'quinta',
    6: 'sexta',
    7: 'sábado',
    };
    
    diasDaSemana[1]; // SyntaxError: Unexpected number
    console.log(diasDaSemana['1']); // domingo

    //--------------------------------------------------

    let conta = {
        agencia: '0000',
        banco: {
          cod: '012',
          id: 4,
          nome: 'TrybeBank',
        },
      };
      
      let infoDoBanco = 'banco';
      console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
      console.log(conta[infoDoBanco]['nome']); // TrybeBank
      
      console.log(conta.agencia); // 0000
      console.log(conta['agencia']); // 0000
      
      console.log(conta.banco.cod); // 012
      console.log(conta['banco']['id']); // 4

      //------------------------------------------------
      let usuario = {
        id: 99,
        email: 'jakeperalta@gmail.com',
        infoPessoal: {
          nome: 'Jake',
          sobrenome: 'Peralta',
          endereco: {
            rua: 'Smith Street',
            bairro: 'Brooklyn',
            cidade: 'Nova Iorque',
            estado: 'Nova Iorque',
          },
        },
      };
      
      console.log(usuario['id']); // 99
      console.log(usuario.email); // jakeperalta@gmail.com
      
      console.log(usuario.infoPessoal.endereco.rua); // Smith Street
      console.log(usuario['infoPessoal']['endereco']['cidade']); // Nova Iorque

      //------------------------------------------------------------------------
      let moradores = [
        {
          nome: 'Luiza',
          sobrenome: 'Guimarães',
          andar: 10,
          apartamento: 1005,
        },
        {
          nome: 'William',
          sobrenome: 'Albuquerque',
          andar: 5,
          apartamento: 502,
        },
        {
          nome: 'Murilo',
          sobrenome: 'Ferraz',
          andar: 8,
          apartamento: 804,
        },
        {
          nome: 'Zoey',
          sobrenome: 'Brooks',
          andar: 1,
          apartamento: 101,
        },
      ];
      
      let primeiroMorador = moradores[0];
      console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
      console.log(primeiroMorador['andar']); // 10
      
      let ultimoMorador = moradores[moradores.length - 1];
      console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
      console.log(ultimoMorador.nome); // Zoey

      //-----------------------------------------------------------------------------------------------

let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3,
    }
};

console.log('A jogadora ' + player['name'] + ' ' + player['lastName'] + ' tem ' + player['age'] + ' de idade.');

player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];
console.log(player);
console.log('A jogadora ' + player['name'] + ' ' + player['lastName'] + ' foi eleita a melhor do mundo por ' + player['bestInTheWorld'].length + ' vezes.')
console.log('A jogadora possui ' + player['medals'] ['golden'] + ' medalhas de ouro e ' + player['medals'] ['silver'] + ' medalhas de prata.');

//---------------------------------------------------------------------------------------------------
// let cars = ['Saab', 'Volvo', 'BMW'];

// for (let index in cars) {
//   console.log(cars[index]);
// }

// let car = {
//     type: 'Fiat',
//     model: '500',
//     color: 'white',
//   };
  
//   for (let index in car) {
//     console.log(index, car[index]);
//   }

  /*
  let food = ['hamburguer', 'bife', 'acarajé'];

  for (let position in food) {
    console.log(position);
  };
  //resultado: 0, 1, 2;
  */

  let food = ['hamburguer', 'bife', 'acarajé'];

for (let value of food) {
  console.log(value);
};
//resultado: hamburguer, bife, acarajé;

//---------------------------------------------------------------------------------------------------

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };
  for (let key in names) {
      console.log( 'Olá ' + names[key]);
  }

  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };
  for (let key in car) {
    console.log( key + ': ' + car[key]);
}

//------------------------------------------------------------------------------------------------


// Sem função
let nome = 'João';

console.log('Bom dia, ' + nome);


// Com função
function bomDiaTryber(nome) {
  console.log('Bom dia, ' + nome);
}

bomDiaTryber('João'); // Bom dia, João
bomDiaTryber('Julia'); // Bom dia, Julia
bomDiaTryber('Marcelo'); // Bom dia, Marcelo

function bomDia() {
    return 'Bom dia!';
  }
  
  console.log(bomDia()); // Bom dia!

  //-----------------------------------------------------------------------------------------------

  let status = 'deslogado';

function logarDeslogar() {
  if (status === 'deslogado') {
    status = 'logado';
  } else {
    status = 'deslogado';
  }
}

console.log(status); // deslogado

logarDeslogar();
console.log(status); // logado

logarDeslogar();
console.log(status); // deslogado

console.log('O usuário está ' + status); // O usuário está deslogado

// Com função
function soma(a, b, c) {
    return a + b + c;
  };
  
  console.log(soma(5, 2, 90)); // 97

  //--------------------------------------------------------------------------------------------------

  function maiorNum(primeiroNum, segundoNum) {
    if (primeiroNum > segundoNum) {
      return primeiroNum + ' é maior que ' + segundoNum;
    } else if (segundoNum > primeiroNum) {
      return segundoNum + ' é maior que ' + primeiroNum;
    } else {
      return 'Os números são iguais';
    }
  };
  
  console.log(maiorNum(10, 20)); // 20 é maior que 10
  console.log(maiorNum(2, -5)); // 2 é maior que -5
  console.log(maiorNum(1, 1)); // Os números são iguais

  function sum(a, b) {
    return a + b;

  }
  console.log(sum(90, 70));
  
  
// ---------------------------------------PARTE 1------------------------------------------------------
// exercício 1 ao 5
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  console.log('Boas vindas, ' + info['personagem'] + '!');

  info['recorrente'] = 'Sim';
  console.log(info);

  for (let key in info){
      console.log(key);
  }

  for (let key in info){
    console.log(info[key]);
}

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  info['recorrente'] = 'Sim';

let infoTwo = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
};

for (let key in info){
    if(key === 'reconrrente' && info[key] === 'Sim' && infoTwo[key] === 'Sim'){
        console.log('Ambos recorrentes')
    } else {
        console.log(info[key] + ' e ' + infoTwo[key]);
    };

};

//exercício 6 ao 8
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

  let array = leitor.livrosFavoritos[0];

  console.log('O livro favorito de ' + leitor['nome'] + ' ' + leitor['sobrenome'] + ' se chama ' + array['titulo']);

  leitor.livrosFavoritos.push({
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editora: 'Rocco',   
  },);
  console.log(leitor);

  console.log( '"' + leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos"');

  //--------------------------------------PARTE 2-----------------------------------------------------
  
  //exercício 1
  function palíndromo (word){
    for (let index in word){
        if(word[index] != word[(word.length - 1) - index]){
            return false;
        };
    };
    return true;
  };
  
  console.log(palíndromo('arara'));
    
  console.log(palíndromo('pneu'));

  //exercício 2
  function array (exemplo){
    let maiorValor = exemplo[0];

    for (let index in exemplo){
      if(exemplo[index] > exemplo[maiorValor]){
        maiorValor = index;
      }
    }
    return maiorValor;
  };
  console.log(array([2, 3, 6, 7, 10, 1]));


  //exercício 3
  function array (exemplo){
    let menorValor = exemplo[0];

    for (let index in exemplo){
      if(exemplo[index] < exemplo[menorValor]){
        menorValor = index;
      }
    }
    return menorValor;
  };
  console.log(array([2, 4, 6, 7, 10, 0, -3]));


  //exercício 4
function maiorPalavra(array) {

let resultado = array[0];

for (let index in array) {
    if (resultado.length < array[index].length) {
      resultado = array[index];
    }
}
return resultado;
}
console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

//exercício 5
function maisRepetido(numeros) {
  let num = {};

  for (let index = 0; index < numeros.length; index += 1) {
    let valor = numeros[index];
    if (num[valor] === undefined) {
      num[valor] = 1;
    } else {
      num[valor] = num[valor] + 1;
    }
  }

  let contRepetido = 0;
  let contNumero = 0;

  for (let prop in num) {
    if (contRepetido < num[prop]) {
      contRepetido = num[prop];
      contNumero = prop;
    }
  }

  return contNumero;
}
console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]));
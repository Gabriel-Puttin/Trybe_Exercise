import React, { Component } from 'react';

class Content extends Component {
  render() {
    const conteudos = [
      {
        conteudo: 'High Order Functions',
        bloco: 8,
        status: 'Aprendido'
      },
      {
        conteudo: 'Composicao de Componentes',
        bloco: 11,
        status: 'Aprendendo',
      },
      {
        conteudo: 'Composicao de Estados',
        bloco: 12,
        status: 'Aprenderei'
      },
      {
        conteudo: 'Redux',
        bloco: 16,
        status: 'Aprenderei'
      },
    ];
    const contents = (request) => {
      return request.map((content) => 
        <div key={content.conteudo} className='content'>
        <h4>{`O conteúdo é: ${content.conteudo}`}</h4>
        <p>{`Status: ${content.status}`}</p>
        <p>{`Bloco: ${content.bloco}`}</p>
        </div>)
    }
    return (
      <ul>{contents(conteudos)}</ul>
    );
  }
}

export default Content;
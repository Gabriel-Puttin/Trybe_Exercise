import React, { Component } from "react";
import Idade from "./Idade";
import Nome from "./Nome";
import './Form.css';

class Form extends Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      algoEscrito: '',
      regiao: '',
      nome: '',
      idade: '',
      status: false,
      formularioComErros: true,
    }
  }

  handleError() {
    const { nome, idade } = this.state;

    const arr = [!nome.length, !idade];

    const formularioPreenchido = arr.every((error) => error !== true);

    this.setState({
      formularioComErros: !formularioPreenchido,
    })
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => { this.handleError(); });
  }

  render() {
    const { algoEscrito, regiao, nome, idade, status } = this.state;
    return (
      <div>
        <h1>First Form</h1>
        <form>
          <label>Escreva algo:
            <textarea name='algoEscrito' value={algoEscrito} onChange={this.handleChange} />
          </label>
          <label>Escolha sua região:
            <select name='regiao' value={regiao} onChange={this.handleChange}>
              <option>Sul</option>
              <option>Sudeste</option>
              <option>Centro-oeste</option>
              <option>Nordeste</option>
              <option>Norte</option>
            </select>
          </label>
          <Nome nome={nome} handleChange={this.handleChange} />
          <Idade idade={idade} handleChange={this.handleChange} />
          <label>Concorda em salvar suas informações:
            <input value={status} onChange={this.handleChange} type='checkbox' name='status' />
          </label>
          <fieldset>
            <input type='file' />
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Form;

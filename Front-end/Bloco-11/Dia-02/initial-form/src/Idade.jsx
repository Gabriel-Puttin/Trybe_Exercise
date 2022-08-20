import React, { Component } from "react";

class Idade extends Component {
  render() {
    const { handleChange, idade } = this.props;
    let error = undefined;
    if (idade < 0) return error = "Valor Inválido";
    return (
      <div>
        <label>Escreva sua idade:
          <input value={idade} onChange={handleChange} type='number' name='idade' />
          <span>{error ? error : ''}</span>
        </label>
      </div>
    );
  }
}

export default Idade;

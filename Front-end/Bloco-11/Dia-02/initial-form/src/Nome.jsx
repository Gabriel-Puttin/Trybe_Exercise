import React, { Component } from "react";

class Nome extends Component {
  render() {
    const {handleChange, nome} = this.props;
    let error = undefined;
    if(nome.length > 120) return error = "Nome muito grande";
    return (
      <label>Escreva seu nome:
        <input value={nome} onChange={handleChange} type='text' name='nome' />
        <span>{error ? error : ''}</span>
      </label>
    );
  }
}

export default Nome;

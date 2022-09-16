import React, { useState, useContext } from "react";
import MyContext from "./MyContext";

function App() {
  const [form, setForm] = useState({
    name: '',
    number: '',
    city: '',
    formation: '',
  });
  const { data, addData } = useContext(MyContext);

  const handleChange = ({ target }) => {
    setForm((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  }

  const handleClick = () => {
    addData(form);
  }

  return (
    <main>
      <form>
        <input
          onChange={handleChange}
          value={form.name}
          name="name"
          type="text"
          placeholder='Digite seu nome'
        />
        <input
          onChange={handleChange}
          value={form.number}
          name="number"
          type="number"
          placeholder='Digite sua idade'
        />
        <input
          onChange={handleChange}
          value={form.city}
          name="city"
          type="text"
          placeholder='Digite sua cidade'
        />
        <label htmlFor='fun'>Fundamentos
          <input
            onChange={handleChange}
            value="Fundamentos"
            id='fun'
            name='formation'
            type="radio"
          />
        </label>
        <label htmlFor='front'>Front-end
          <input
            onChange={handleChange}
            value="Front-end"
            id='front'
            name='formation'
            type="radio"
          />
        </label>
        <label htmlFor='back'>Back-end
          <input
            onChange={handleChange}
            value="Back-end"
            id='back'
            name='formation'
            type="radio"
          />
        </label>
        <label htmlFor='science'>Ciência da computação
          <input
            onChange={handleChange}
            value="Ciência da computação"
            id='science'
            name='formation'
            type="radio"
          />
        </label>
        <button onClick={handleClick} type='button'>Submeter</button>
      </form>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <p>{`Nome: ${item.name}`}</p>
            <p>{`Idade: ${item.number}`}</p>
            <p>{`Cidade: ${item.city}`}</p>
            <p>{`Módulo: ${item.formation}`}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;

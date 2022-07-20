import React, { Component } from "react";

class AboutMe extends Component {
  render() {
    const skills = ["HTML", 'CSS', 'JS', 'Jest', 'ES6', 'Async/Await']
    const jsxSkills = skills.map((skill) => <li>{skill}</li>)
    return <div>
      <h1>Gabriel Constantino Biancardi Puttin</h1>
      <p>Tenho 20 anos, sou natural de Nova Venécia - ES, e amo estudar tecnologia e programação.</p>
      <h2>Minhas habilidades</h2>
      <ul> { jsxSkills } </ul>
    </div>
  }
}

export default AboutMe;